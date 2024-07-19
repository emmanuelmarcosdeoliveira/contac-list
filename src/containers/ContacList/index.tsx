import CardContact from '../../components/CardContact'
import * as S from './styles'

const contato  = [ 
{
  tag: 'Pessoal',
  titulo: 'Emmanuel Marcos de Oliveira', 
  email: 'oliveira_emmanuel@outlook.com', 
  telefone: '(11)-968336094'
}, 
{
  tag: 'Trabalho',
  titulo: 'EBAC', 
  email: 'ebac@outlook.com', 
  telefone: '(11)-95874-9999'
}, 
{
  tag: 'Familia',
  titulo: 'Elisangela Romero', 
  email: 'elisangela_fotos@outlook.com', 
  telefone: '(11)-968336094'
}

 ]

const ContactList = () => {
  return (
    <S.Main>
      <p>2 Contatos marccados como: "Todos"</p>
      <S.Grid>
      {contato.map((c) => ( <li key={c.titulo}>
      <CardContact tag={c.tag} titulo={c.titulo} email={c.email} telefone={c.telefone}  />
        </li>))}
             
      </S.Grid>
    </S.Main>
  )
}

export default ContactList
