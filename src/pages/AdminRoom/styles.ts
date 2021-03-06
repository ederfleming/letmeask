import styled from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }
`

export const IdentificationRoom = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }
`
export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
`
export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #29202e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    color: #fff;
    border-radius: 16px;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 14px;
  }
`
export const RoomForm = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`
export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`
export const SendQuestion = styled.span`
  font-size: 14px;
  color: #737380;
  font-weight: 500;

  button {
    background: transparent;
    border: 0;
    color: #835afd;
    font-size: 14px;
    cursor: pointer;
  }
`
export const QuestionAuthor = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`
export const QuestionList = styled.div`
  margin-top: 32px;
`
export const OptionsButtons = styled.div`
  display: flex;
  gap: 16px;
  button {
    display: flex;
    align-items: flex-end;
    color: #737380;
    gap: 8px;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
  svg {
    width: 24px;
    color: #835afd;
  }
`
