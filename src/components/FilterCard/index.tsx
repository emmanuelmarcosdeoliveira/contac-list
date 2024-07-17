import { BsPeople } from 'react-icons/bs'
import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FilterCard = (props: Props) => {
  return (
    <S.Card ativo={props.ativo}>
      <BsPeople />
      <S.Contrador>3</S.Contrador>
      <S.Label>Pendentes</S.Label>
    </S.Card>
  )
}

export default FilterCard
