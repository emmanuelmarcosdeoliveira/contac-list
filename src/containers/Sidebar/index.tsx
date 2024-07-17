import { MdOutlinePersonSearch } from 'react-icons/md'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
const Sidebar = () => {
  return (
    <S.Asside>
      <S.Search>
        <MdOutlinePersonSearch />
        <input type="text" placeholder="Digite o nome do contato" />
      </S.Search>

      <S.Filtros>
        <FilterCard ativo={true} />
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </S.Filtros>
    </S.Asside>
  )
}

export default Sidebar
