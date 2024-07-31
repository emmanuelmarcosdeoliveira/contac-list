import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contacts'
import ContatosClass from '../../models/Contatos'
// Importação dos icones
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'

type Props = ContatosClass

const CardContact = ({
  grupos,
  titulo,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.CarddeContatos>
      <S.Tag grupos={grupos}>{grupos}</S.Tag>
      {editando && (
        <em
          style={{
            backgroundColor: '#C5233B',
            color: '#fff',
            padding: '.25rem .50rem',
            borderRadius: '4px',
            marginLeft: '11rem',
            fontWeight: '600',
            fontSize: '.75rem'
          }}
        >
          Editando...{' '}
        </em>
      )}
      <S.MyDiv>
        <IoPeopleCircleOutline
          style={{ fontSize: '1.25rem', marginRight: '.50rem' }}
        />
        <S.MyTitle value={titulo}>{titulo}</S.MyTitle>
      </S.MyDiv>
      <S.MyDiv>
        <MdOutlineMail style={{ fontSize: '1rem', marginRight: '.75rem' }} />
        <S.Email
          disabled={!editando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        >
          {email}
        </S.Email>
      </S.MyDiv>
      <S.MyDiv>
        <FaPhoneAlt style={{ fontSize: '0.75rem', marginRight: '1rem' }} />
        <S.TelPhone
          disabled={!editando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        >
          {telefone}
        </S.TelPhone>
      </S.MyDiv>
      <S.ActionBar>
        {editando ? (
          <>
            <S.btnSalvar
              onClick={() => {
                dispatch(
                  editar({
                    grupos,
                    titulo,
                    telefone,
                    email,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.btnSalvar>
            <S.Btn onClick={cancelarEdicao}>Cancelar</S.Btn>
          </>
        ) : (
          <>
            <S.btnEditar onClick={() => setEditando(true)}>Editar</S.btnEditar>
            <S.BtncancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtncancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.CarddeContatos>
  )
}

export default CardContact
