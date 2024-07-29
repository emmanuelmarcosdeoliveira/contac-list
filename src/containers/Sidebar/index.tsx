import { VscSearch } from 'react-icons/vsc'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { GoPeople } from 'react-icons/go'
import { LuContact } from 'react-icons/lu'
import { SlPeople } from 'react-icons/sl'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraTermo } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/contatos'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Asside>
      <S.Search>
        <S.Lupa>
          <VscSearch />
        </S.Lupa>
        <input
          type="text"
          placeholder="Digite o nome do contato"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </S.Search>

      <S.Filtros>
        <S.MyCard>
          <MdOutlineWorkOutline />
          <FilterCard
            valor={enums.Grupos.WORK}
            criterio="Trabalho"
            legenda="Trabalho"
          />
        </S.MyCard>
        <S.MyCard>
          <GoPeople />
          <FilterCard
            valor={enums.Grupos.GUYS}
            criterio="Pessoal"
            legenda="Pessoal"
          />
        </S.MyCard>
        <S.MyCard>
          <SlPeople />
          <FilterCard
            valor={enums.Grupos.FAMILY}
            criterio="Familia"
            legenda="Familia"
          />
        </S.MyCard>
        <S.MyCard>
          <LuContact />
          <FilterCard criterio="Todos" legenda="Todos" />
        </S.MyCard>
      </S.Filtros>
    </S.Asside>
  )
}
export default Sidebar
