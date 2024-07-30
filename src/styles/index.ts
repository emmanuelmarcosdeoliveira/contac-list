import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
const Styleglobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  border-radius: 0.25rem;
  padding: 2rem;
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 260px auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin-block: 1rem;
    width: 95%;
    border: 1px solid ${variaveis.cor002};
    border-radius: 0.25rem;
    box-sizing: 4px 2px rgba(0, 0, 0, 1);
    background-color: ${variaveis.cor004};
  }
`

export default Styleglobal
