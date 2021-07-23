import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'
type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  isOutlined?: boolean
} & ButtonTypes

const Button = ({ isOutlined = false, ...props }: ButtonProps) => (
  <S.Button isOutlined={isOutlined} {...props} />
)

export default Button
