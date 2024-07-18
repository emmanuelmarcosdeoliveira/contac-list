import * as S from './styles'

export type CardProps = {
  ativo?: 'ativado' | 'naoativado'
  contador: number
  legenda: string
}

const FilterCard = ({ ativo, contador, legenda }: CardProps) => {
  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FilterCard
