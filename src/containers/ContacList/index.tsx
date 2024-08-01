import { useSelector } from 'react-redux'
import { Main } from '../../styles/'
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
          (contato) => contato.grupos === enums.Grupos.WORK
        )
      } else if (criterio === 'Pessoal') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.grupos === enums.Grupos.GUYS
        )
      } else if (criterio === 'Familia') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.grupos === enums.Grupos.FAMILY
        )
      }
      return contatoFiltrados
    } else {
      return itens
    }
  }
  const contatos = filtraContatos()
  return (
    <Main>
      <p>
        <span
          style={{
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#C5233B',
            padding: '.25rem',
            borderRadius: '25%'
          }}
        >
          {contatos.length}
        </span>{' '}
        Contato(s) classificados(s) como <strong>{criterio}</strong> <br />
        <p style={{ marginLeft: '1.4rem' }}>
          Busca como: <strong>{termo}</strong>{' '}
        </p>
      </p>
      <S.Grid>
        {contatos.map((c) => (
          <li key={c.titulo}>
            <CardContact
              grupos={c.grupos}
              titulo={c.titulo}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </S.Grid>
    </Main>
  )
}

export default ContactList
