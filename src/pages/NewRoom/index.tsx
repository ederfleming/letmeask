import Button from 'components/Button'

import * as S from './styles'

const NewRoom = () => (
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
        <S.Form>
          <input type="text" placeholder="Nome da sala" />
          <Button type="submit">Criar sala</Button>
        </S.Form>
        <p>
          Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
        </p>
      </S.MainContent>
    </S.Main>
  </S.Wrapper>
)

export default NewRoom
