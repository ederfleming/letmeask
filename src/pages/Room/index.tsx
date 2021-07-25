import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Like } from '@styled-icons/boxicons-regular'
import { Like as SolidLike } from '@styled-icons/boxicons-solid/Like'
import { useAuth } from 'hooks/useAuth'
import { useRoom } from 'hooks/useRoom'
import { database } from 'services/firebase'

import Button from 'components/Button'
import QuestionComponent from 'components/Question'
import RoomCode from 'components/RoomCode'

import * as S from './styles'

type RoomParams = {
  id: string
}

const Room = () => {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')

  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()
    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswred: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id
      })
    }
  }
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContent>
          <img src="/img/logo.svg" alt="Logo Letmeask" />
          <RoomCode code={roomId} />
        </S.HeaderContent>
      </S.Header>
      <S.Main>
        <S.RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length && (
            <span>
              {questions.length}{' '}
              {questions.length == 1 ? 'pergunta' : 'perguntas'}
            </span>
          )}
        </S.RoomTitle>
        <S.RoomForm onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <S.FormFooter>
            {user ? (
              <S.QuestionAuthor>
                <img src={user.avatar} alt="" />
                <span>{user.name}</span>
              </S.QuestionAuthor>
            ) : (
              <S.SendQuestion>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </S.SendQuestion>
            )}

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </S.FormFooter>
          <S.QuestionList>
            {questions.map((question) => (
              <QuestionComponent
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <S.OptionsButtons>
                  <button
                    type="button"
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}

                    {question.likeId ? <SolidLike /> : <Like />}
                  </button>
                </S.OptionsButtons>
              </QuestionComponent>
            ))}
          </S.QuestionList>
        </S.RoomForm>
      </S.Main>
    </S.Wrapper>
  )
}

export default Room
