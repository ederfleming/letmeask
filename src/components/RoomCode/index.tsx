import * as S from './styles'

type RoomCodeProps = {
  code: string
}

const RoomCode = ({ code }: RoomCodeProps) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <S.CodeButton onClick={copyToClipboard}>
      <div>
        <img src="/img/copy.svg" alt="Copiar codigo da sala" />
      </div>
      <span>Sala {code}</span>
    </S.CodeButton>
  )
}

export default RoomCode
