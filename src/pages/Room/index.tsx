import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { database } from 'services/firebase'

import Button from 'components/Button'
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

  // useEffect(() => {
  //   const roomRef = database.ref(`room/${roomId}`)

  //   roomRef.once('value', (room) => {
  //     const parsedQuestions = Object.entries
  //   })
  // }, [roomId])

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
          <h1>Nome da sala</h1>
          <span>4 perguntas</span>
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
