import styled from 'styled-components';

const Box = styled.div`
  background: #4a4a49;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #ffffff;
  }
  .subTitle {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #000000;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #000000;
      opacity: 1;
    }
  }
  button {
    border: 1;
    border-color: #FFFFFF;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #4a4a49;
  }
`; 

export default Box