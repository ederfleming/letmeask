import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps) => <S.Button {...props} />

export default Button
