import * as S from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
}
const QuestionComponent = ({ content, author }: QuestionProps) => (
  <S.Wrapper>
    <p>{content}</p>
    <S.QuestionFooter>
      <S.QuestionAuthor>
        <img src={author.avatar} alt="Author name" />
        <span>{author.name}</span>
      </S.QuestionAuthor>
      <div></div>
    </S.QuestionFooter>
  </S.Wrapper>
)

export default QuestionComponent
