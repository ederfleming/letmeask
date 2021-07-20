import { useHistory } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

import Button from 'components/Button'

import * as S from './styles'

const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
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
          <S.Form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  )
}

export default Home
