import { BsPeople } from 'react-icons/bs'
import * as S from './styles'

export type CardProps = {
  ativo?: 'ativado' | 'naoativado'
}

const FilterCard = (props: CardProps) => {
  return (
    <S.Card ativo={props.ativo}>
      <BsPeople />
      <S.Contrador>3</S.Contrador>
      <S.Label>Pendentes</S.Label>
    </S.Card>
  )
}

export default FilterCard
