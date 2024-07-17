import styled from 'styled-components'

export const Main = styled.main`
  padding: 1rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  background-color: #f2f2f2;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
  height: 90dvh;
  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: #ffffff;
  }
`
