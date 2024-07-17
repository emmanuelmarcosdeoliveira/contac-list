import { VscSearch } from 'react-icons/vsc'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const Sidebar = () => {
  return (
    <S.Asside>
      <S.Search>
        <S.Lupa>
          <VscSearch />
        </S.Lupa>
        <input type="text" placeholder="Digite o nome do contato" />
      </S.Search>

      <S.Filtros>
        <FilterCard ativo="ativado" />
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </S.Filtros>
    </S.Asside>
  )
}

export default Sidebar
