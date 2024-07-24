import { useSelector } from 'react-redux'

import CardContact from '../../components/CardContact'
import * as S from './styles'
import { RootReducer } from '../../store'


const ContactList = () => {
  const {itens}  =  useSelector((state: RootReducer) => state.contatos )
  
  return (
    <S.Main>
      <p>2 Contatos marccados como: "Todos"</p>
      <S.Grid>
      {itens.map((c) => (
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