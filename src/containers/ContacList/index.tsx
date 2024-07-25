import { useSelector } from 'react-redux'

import CardContact from '../../components/CardContact'
import * as S from './styles'
import { RootReducer } from '../../store'


const ContactList = () => {
  const {itens}  =  useSelector((state: RootReducer) => state.contatos )
  const {termo} = useSelector((state: RootReducer) => state.filtro )
const filtraContatos  = () => {
  return itens.filter(contato => contato.titulo.toLowerCase().search(termo.toLowerCase()) >= 0 )
}

  return (
    <S.Main>
      <p>2 Contatos marccados como:  "categoria" e"{termo}"</p>
      <S.Grid>
      {filtraContatos().map((c) => (
         <li key={c.titulo}>
      <CardContact    
      tag={c.tag} 
      titulo={c.titulo} 
      email={c.email} 
      telefone={c.telefone} 
      id={c.id}
       />

        </li>))}
             
      </S.Grid>
    </S.Main>
  )
}

export default ContactList