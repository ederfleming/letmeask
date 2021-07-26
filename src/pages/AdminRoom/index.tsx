import { useHistory, useParams } from 'react-router-dom'

import { Trash, MessageAltCheck, Message } from '@styled-icons/boxicons-regular'
import {
  MessageAltCheck as Checked,
  MessageAlt
} from '@styled-icons/boxicons-solid'
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

const AdminRoom = () => {
  const { user } = useAuth()
  const history = useHistory()
  const params = useParams<RoomParams>()

  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date()
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContent>
          <img src="/img/logo.svg" alt="Logo Letmeask" />
          <S.IdentificationRoom>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerar Sala
            </Button>
          </S.IdentificationRoom>
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
                  onClick={() => handleCheckQuestion(question.id)}
                >
                  {question.isAnswered ? <Checked /> : <MessageAltCheck />}
                </button>
                <button
                  type="button"
                  onClick={() => handleHighlightQuestion(question.id)}
                >
                  {question.isHighlighted ? <MessageAlt /> : <Message />}
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <Trash />
                </button>
              </S.OptionsButtons>
            </QuestionComponent>
          ))}
        </S.QuestionList>
      </S.Main>
    </S.Wrapper>
  )
}

export default AdminRoom
