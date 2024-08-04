import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Dados = styled.input`
  font-size: 1rem;
  display: block;
  max-width: 600px;
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 0.5rem;
  margin-block: 1.4rem;
  background-color: ${variaveis.cor11};
  border: 1px solid ${variaveis.cor7};
`

export const Fild = styled.fieldset`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  max-width: 610px;
  width: 100%;
`

export const AreaTag = styled.div`
  margin-block: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${variaveis.cor7};
  width: min-content;
  display: flex;
  align-items: center;
  label {
    margin-left: 0.25rem;
  }
  input {
    margin-left: 1rem;
  }
`
export const BtnCadastro = styled.button`
  display: flex;
  justify-content: center;
  width: 220px;
  margin-block: 1rem;
  padding: 8px 36px;
  border-radius: 4px;
  background-color: #25d366;
  font-weight: 600;
  cursor: pointer;
`

export const BacktoPage = styled.button`
  display: inline-block;
  color: white;
  text-decoration: none;
  justify-content: center;
  align-items: center;
    width: 280px;
  margin-block: 1rem;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${variaveis.cor3};
  font-weight: 600;
  a {
    text-decoration: none!important;
  }




`
export const Opcao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  @media (max-width: 780px) {
    label {
      font-size: 12px;
    }
  }
`
