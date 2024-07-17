import styled from 'styled-components'
import { CardProps } from '.'

export const Card = styled.div<CardProps>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.ativo ? '#38bdf8' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#38bdf8' : '#5e5e5e')};
  border-radius: 0.25rem;
  text-align: right;
  font-size: 1.5rem;
`

export const Contrador = styled.span`
  font-weight: 700;
  font-weight: 700;
  display: block;
  font-size: 1.5rem;
  text-align: center;
`

export const Label = styled.span`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`
