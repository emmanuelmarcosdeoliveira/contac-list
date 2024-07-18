import styled from 'styled-components'

export const Asside = styled.aside`
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    border-radius: 0.25rem;
    box-shadow: none;
    background-color: #ffffff;
  }
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
  font-size: 1rem;
  text-align: left;
  input {
    border: none;
    padding: 0.5rem;
    background-color: #eee;
    outline-style: none;
    font-size: 0.875rem;
  }
`

export const Lupa = styled.svg`
  color: #38bdf8;
  height: 1rem;
  width: 1.5rem;
  display: flex;
  align-content: center;
`

export const MyCard = styled.div`
  border: 1px solid #222;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #fff;
  font-size: 1.5rem;
  color: #5e5e5e;
`
