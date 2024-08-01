import * as enums from '../utils/enums/contatos'

class Contatos {
  grupos: enums.Grupos
  titulo: string
  telefone: string
  email: string
  id: number

  constructor(
    grupos: enums.Grupos,
    titulo: string,
    telefone: string,
    email: string,
    id: number
  ) {
    this.grupos = grupos
    this.titulo = titulo
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contatos
