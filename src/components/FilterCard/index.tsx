import { alterarFiltro } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/contatos'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type CardProps = {
  legenda: string
  criterio: 'Trabalho' | 'Pessoal' | 'Familia' | 'Todos'
  valor?: enums.Grupos
}

const FilterCard = ({ legenda, criterio, valor }: CardProps) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }
  const contarContatos = () => {
    if (criterio === 'Todos') return contatos.itens.length
    if (valor === enums.Grupos.FAMILY) {
      return contatos.itens.filter((item) => item.tag === 'Familia').length
    } else if (valor === enums.Grupos.GUYS) {
      return contatos.itens.filter((item) => item.tag === 'Pessoal').length
    } else if (valor === enums.Grupos.WORK) {
      return contatos.itens.filter((item) => item.tag === 'Trabalho').length

    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  const contador = contarContatos()
  const ativo = verificaEstaAtivo()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FilterCard
