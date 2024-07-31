import { LuContact2 } from 'react-icons/lu'
import { Botao } from './styles'
const IncludeContact = () => {
  return (
    <>
      <Botao to="/cadastro">
        <LuContact2 style={{ marginRight: '1rem', fontSize: '1.5rem' }} />
        Incluir contato
      </Botao>
    </>
  )
}

export default IncludeContact
