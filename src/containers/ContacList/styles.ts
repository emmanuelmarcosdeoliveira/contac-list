import styled from 'styled-components'

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
