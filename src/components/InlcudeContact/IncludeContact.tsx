import { LuContact2 } from 'react-icons/lu'
import { Botao } from './styles'
import { RiContactsLine } from "react-icons/ri";
const IncludeContact = () => {
  return (
    <>
      <Botao to="/cadastro">
        
        <RiContactsLine style={{ marginRight: '1rem', fontSize: '1.5rem' }}   />
        Incluir contato
      </Botao>
    </>
  )
}

export default IncludeContact
