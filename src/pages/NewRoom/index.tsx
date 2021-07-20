import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { database } from 'services/firebase'

import Button from 'components/Button'

import * as S from './styles'

const NewRoom = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>
          <S.Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </S.Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  )
}

export default NewRoom
