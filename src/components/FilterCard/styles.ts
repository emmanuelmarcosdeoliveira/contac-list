import styled from 'styled-components'
import { CardProps } from '.'

type PropssemLegandaEContador = Omit<CardProps, 'contador' | 'legenda'>

export const Card = styled.div<PropssemLegandaEContador>`
  padding: 0.5rem;
  color: ${(props) => (props.ativo ? '#EE5566' : '#5e5e5e')};
  border-radius: 0.25rem;
  text-align: right;
  font-size: 1.5rem;
`

export const Contador = styled.span`
  font-weight: 700;
  display: block;
  font-size: 2rem;
  text-align: center;
`

export const Label = styled.span`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`
