import * as enums from '../utils/enums/contatos'

class Contatos {
  tag: enums.Grupos 
  titulo: string
  email: string 
  telefone: string 
  id: number 


  constructor(tag: enums.Grupos, titulo: string, email: string, telefone: string, id: number ) {
    this.tag  = tag
    this.titulo = titulo
    this.email = email
    this.telefone  = telefone
    this.id  = id
  }
}

export default Contatos 