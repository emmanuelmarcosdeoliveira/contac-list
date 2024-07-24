import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
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

export const Grid = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
