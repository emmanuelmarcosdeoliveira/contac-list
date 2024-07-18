import * as S from './styles'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { IoPeopleCircleOutline } from 'react-icons/io5'

const CardContact = () => {
  return (
    <S.CarddeContatos>
      <S.Tag>Trabalho</S.Tag>
      <S.MyDiv>
        <IoPeopleCircleOutline
          style={{ fontSize: '1.25rem', marginRight: '.50rem' }}
        />
        <S.MyTitle>Emmanuel Marcos de Oliveira</S.MyTitle>
      </S.MyDiv>
      <S.MyDiv>
        <MdOutlineMail style={{ fontSize: '1rem', marginRight: '.75rem' }} />
        <S.Email>oliveira_emmanuel@outlook.com</S.Email>
      </S.MyDiv>
      <S.MyDiv>
        <FaPhoneAlt style={{ fontSize: '0.75rem', marginRight: '1rem' }} />
        <S.TelPhone>(11)-96833-6094</S.TelPhone>
      </S.MyDiv>
      <S.ActionBar>
        <S.Btn>Editar</S.Btn>
        <S.Btn>Remover</S.Btn>
      </S.ActionBar>
    </S.CarddeContatos>
  )
}

export default CardContact
