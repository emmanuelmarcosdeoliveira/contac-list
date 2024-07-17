import styled from 'styled-components'

export const Asside = styled.aside`
  padding: 1rem;
  background-color: #f9f9f9;
  height: 100dvh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding-block: 1rem;
`
export const Search = styled.div`
  border: 1px solid #a1a1a1;
  border-radius: 0.25rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  input {
    border: none;
    padding: 0.5rem;
    background-color: #eee;
    outline-style: none;
    font-size: 0.875rem;
  }
`
