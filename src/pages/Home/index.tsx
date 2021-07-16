import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <aside>
      <img src="/img/illustration.svg" alt="" />
      <strong>Crie salas de Q&amp;A ao vivo</strong>
      <p>Tire as dúvidas de sua audiência em tempo real</p>
    </aside>
    <main>
      <div>
        <img src="/img/logo.svg" alt="Let me ask" />
        <button>
          <img src="/img/google-icon.svg" alt="Logo do google" />
          Crie sua sala com o Google
        </button>
        <div>ou entre em uma sala</div>
        <form>
          <input type="text" />
        </form>
      </div>
    </main>
  </S.Wrapper>
)

export default Home
