import { useParams } from 'react-router-dom'

import Button from 'components/Button'
import RoomCode from 'components/RoomCode'

import * as S from './styles'

type RoomParams = {
  id: string
}
const Room = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

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

        <S.RoomForm>
          <textarea placeholder="O que você quer perguntar?" />
          <S.FormFooter>
            <S.SendQuestion>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </S.SendQuestion>
            <Button type="submit">Enviar pergunta</Button>
          </S.FormFooter>
        </S.RoomForm>
      </S.Main>
    </S.Wrapper>
  )
}

export default Room
