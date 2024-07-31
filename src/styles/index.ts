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
export const Main = styled.main`
  padding: 1.5rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  background-color: ${variaveis.cor002};
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
  height: 90vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: ${variaveis.cor0};
  }
`

export default Styleglobal
