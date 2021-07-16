import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.Aside>
      <img src="/img/illustration.svg" alt="" />
      <strong>Crie salas de Q&amp;A ao vivo</strong>
      <p>Tire as dúvidas de sua audiência em tempo real</p>
    </S.Aside>
    <S.Main>
      <S.MainContent>
        <S.Logo src="/img/logo.svg" alt="Let me ask" />
        <S.CreateButton>
          <img src="/img/google-icon.svg" alt="Logo do google" />
          Crie sua sala com o Google
        </S.CreateButton>
        <S.Separator>ou entre em uma sala</S.Separator>
        <S.Form>
          <input type="text" placeholder="Digite o código da sala" />
          <button type="submit">Entrar na sala</button>
        </S.Form>
      </S.MainContent>
    </S.Main>
  </S.Wrapper>
)

export default Home
