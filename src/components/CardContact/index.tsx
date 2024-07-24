import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {remover} from "../../store/reducers/contacts"

import * as S from './styles'

import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import ContatosClass from '../../models/Contatos'

type Props = ContatosClass

const CardContact = ({tag, titulo,email, telefone, id}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando]  = useState(false)

  return (
    <S.CarddeContatos>
      <S.Tag tag={tag}>{tag}</S.Tag>
      <S.MyDiv>
        <IoPeopleCircleOutline
          style={{ fontSize: '1.25rem', marginRight: '.50rem' }}
        />
        <S.MyTitle>{titulo}</S.MyTitle>
      </S.MyDiv>
      <S.MyDiv>
        <MdOutlineMail style={{ fontSize: '1rem', marginRight: '.75rem' }} />
        <S.Email>{email}</S.Email>
      </S.MyDiv>
      <S.MyDiv>
        <FaPhoneAlt style={{ fontSize: '0.75rem', marginRight: '1rem' }} />
        <S.TelPhone>{telefone}</S.TelPhone>
      </S.MyDiv>
      <S.ActionBar>
    {editando ? (
      <>
<S.btnSalvar>Salvar</S.btnSalvar>
<S.Btn onClick={() => setEditando(false)}  >Cancelar</S.Btn>
      </>
    ) : (
      <>
<S.btnEditar onClick={() => setEditando(true)}  >Editar</S.btnEditar>
<S.BtncancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BtncancelarRemover>
      </>
    )}
      </S.ActionBar>
    </S.CarddeContatos>
  )
}

export default CardContact

