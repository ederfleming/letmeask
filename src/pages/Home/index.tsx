import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { database } from 'services/firebase'

import Button from 'components/Button'

import * as S from './styles'

const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Essa sala não existe')
      return
    }

    if (roomRef.val().closedAt) {
      alert('Essa sala já foi fechada')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }
  return (
    <S.Wrapper>
      <S.Aside>
        <img src="/img/illustration.svg" alt="" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </S.Aside>
      <S.Main>
        <S.MainContent>
          <S.Logo src="/img/logo.svg" alt="Let me ask" />
          <S.GoogleButton onClick={handleCreateRoom}>
            <img src="/img/google-icon.svg" alt="Logo do google" />
            Crie sua sala com o Google
          </S.GoogleButton>
          <S.Separator>ou entre em uma sala</S.Separator>
          <S.Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  )
}

export default Home
