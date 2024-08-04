import { FormEvent, useState } from 'react'
import { Main } from '../../styles/'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AreaTag, BacktoPage, BtnCadastro, Dados, Fild, Opcao } from './styles'
import * as enums from '../../utils/enums/contatos'
import { cadastrar } from '../../store/reducers/contacts'
import {Link} from 'react-router-dom'

import { MdArrowBack } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [grupos, setGrupos] = useState(enums.Grupos.GUYS)
  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        grupos,
        titulo,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <Main>
      <h2>Novo Contato</h2>
      <form onSubmit={cadastrarContato}>
        <Fild>
          <legend>Dados de Cadastro</legend>
          <Dados
            value={titulo}
            onChange={({ target }) => setTitulo(target.value)}
            type="text"
            placeholder="Descriçao ou Nome"
          />
          <Dados
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="text"
            placeholder="(99) 99999-9999"
          />
          <Dados
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Digite o e-mail"
          />
        </Fild>
        <AreaTag>
          {Object.values(enums.Grupos).map((grupos) => (
            <Opcao key={grupos}>
              <>
                <input
                  value={grupos}
                  name="prioridade"
                  type="radio"
                  onChange={(evento) =>
                    setGrupos(evento.target.value as enums.Grupos)
                  }
                  id={grupos}
                  defaultChecked={grupos == enums.Grupos.GUYS}
                />
                <label htmlFor={grupos}>{grupos}</label>
              </>
            </Opcao>
          ))}

         
        </AreaTag>
        <div style={{display: 'flex'}}>
        <BtnCadastro type="submit"> <IoAdd style={{fontSize: '1rem', marginLeft:'.5rem'}} />Cadastrar</BtnCadastro>
        <div>
       <Link to="/">
               <BacktoPage style={{display: 'inline-flex', alignItems: 'center', marginLeft: '1rem'}}>  <MdArrowBack style={{fontSize: '1rem', marginLeft:'.5rem'}} />Voltar para  Contatos </BacktoPage>
       </Link>
        </div>
        </div>
            </form>
    </Main>
  )
}

export default Formulario
