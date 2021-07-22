import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { database } from 'services/firebase'

import Button from 'components/Button'
import RoomCode from 'components/RoomCode'

import * as S from './styles'

type FirebaseQuestions = Record<
  string,
  {
    author: { name: string; avatar: string }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
  }
>

type RoomParams = {
  id: string
}

type Question = {
  id: string
  author: { name: string; avatar: string }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
}

const Room = () => {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')

  const roomId = params.id

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.once('value', (room) => {
      const databaseRoom = room.val()
      const firebaseQuestions = databaseRoom.questions as FirebaseQuestions

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered
          }
        }
      )
      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId, questions])

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
        </S.RoomForm>
      </S.Main>
    </S.Wrapper>
  )
}

export default Room
