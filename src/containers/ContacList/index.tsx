import { useSelector } from 'react-redux'

import CardContact from '../../components/CardContact'
import * as S from './styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/contatos'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)
  const filtraContatos = () => {
    let contatoFiltrados = itens
    if (termo !== undefined) {
      contatoFiltrados = contatoFiltrados.filter(
        (contato) =>
          contato.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'Trabalho') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.tag === enums.Grupos.WORK
        )
      } else if (criterio === 'Pessoal') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.tag === enums.Grupos.GUYS
        )
      } else if (criterio === 'Familia') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.tag === enums.Grupos.FAMILY
        )
      }
      return contatoFiltrados
    } else {
      return itens
    }
  }
  const contatos = filtraContatos()
  return (
    <S.Main>
      <p>
        {contatos.length} Contato(s) marcado(s) como: {criterio} e "{termo}"
      </p>
      <S.Grid>
        {contatos.map((c) => (
         <li key={c.titulo}>
            <CardContact
              tag={c.tag}
              titulo={c.titulo}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
     </S.Grid>
    </S.Main>
  )
}

export default ContactList
