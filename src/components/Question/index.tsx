import { ReactNode } from 'react'

import * as S from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
}
const QuestionComponent = ({ content, author, children }: QuestionProps) => (
  <S.Wrapper>
    <p>{content}</p>
    <S.QuestionFooter>
      <S.QuestionAuthor>
        <img src={author.avatar} alt="Author name" />
        <span>{author.name}</span>
      </S.QuestionAuthor>
      <S.QuestionsButton>{children}</S.QuestionsButton>
    </S.QuestionFooter>
  </S.Wrapper>
)

export default QuestionComponent
