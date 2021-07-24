import { useParams } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { useRoom } from 'hooks/useRoom'

import Button from 'components/Button'
import QuestionComponent from 'components/Question'
import RoomCode from 'components/RoomCode'

import * as S from './styles'

type RoomParams = {
  id: string
}

const AdminRoom = () => {
  const { user } = useAuth()
  const params = useParams<RoomParams>()

  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContent>
          <img src="/img/logo.svg" alt="Logo Letmeask" />
          <S.IdentificationRoom>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerar Sala</Button>
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
            />
          ))}
        </S.QuestionList>
      </S.Main>
    </S.Wrapper>
  )
}

export default AdminRoom
