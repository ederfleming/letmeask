import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
export const Aside = styled.aside`
  flex: 7;
  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`
export const Main = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`
export const Logo = styled.img`
  align-self: center;
`
export const Form = styled.form`
  input {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    border: 1px solid #a8a8b3;
  }
  button {
    width: 100%;
    margin-top: 16px;
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`
export const CreateButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500px;
  background: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
