import { FormEvent, useState } from 'react'
import { Main } from '../../styles/'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AreaTag, BtnCadastro, Dados, Fild, Opcao } from './styles'
import * as enums from '../../utils/enums/contatos'
import { cadastrar } from '../../store/reducers/contacts'

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

          {/* <input name="prioridade" type="radio" id="Trabalho" />
        <label htmlFor="Trabalho">Trabalho</label>
        <input name="prioridade" type="radio" id="Familia" />
        <label htmlFor="Familia">Familia</label> */}
        </AreaTag>
        <BtnCadastro type="submit">Cadastrar</BtnCadastro>
      </form>
    </Main>
  )
}

export default Formulario
