import { VscSearch } from 'react-icons/vsc'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { GoPeople } from 'react-icons/go'
import { LuContact } from 'react-icons/lu'
import { SlPeople } from 'react-icons/sl'
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
        <S.MyCard>
          <MdOutlineWorkOutline />
          <FilterCard legenda="Trabalho" contador={1} ativo="ativado" />
        </S.MyCard>
        <S.MyCard>
          <GoPeople />
          <FilterCard legenda="Pessoal" contador={2} />
        </S.MyCard>
        <S.MyCard>
          <SlPeople />
          <FilterCard legenda="Familia" contador={3} />
        </S.MyCard>
        <S.MyCard>
          <LuContact />
          <FilterCard legenda="Todos" contador={6} />
        </S.MyCard>
      </S.Filtros>
    </S.Asside>
  )
}

export default Sidebar
