import CardContact from '../../components/CardContact'
import * as S from './styles'

const ContactList = () => {
  return (
    <S.Main>
      <p>2 Contatos marccados como: "Todos"</p>
      <S.Grid>
        <li>
          <CardContact />
        </li>
        <li>
          <CardContact />
        </li>
        <li>
          <CardContact />
        </li>
        <li>
          <CardContact />
        </li>
        <li>
          <CardContact />
        </li>
        <li>
          <CardContact />
        </li>
      </S.Grid>
    </S.Main>
  )
}

export default ContactList
