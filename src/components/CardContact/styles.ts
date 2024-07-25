import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagsProps =  {
  tag: string
  children: string
}

function corDeFundo(props: TagsProps): string {
  if('tag' in props) {
    if(props.tag === 'trabalho') return variaveis.cor3
    if(props.tag === 'Familia') return variaveis.cor1  
    if(props.tag === 'Pessoal') return variaveis.cor4
  }
  return variaveis.cor7
}


export const CarddeContatos = styled.div`

  background-color: ${variaveis.cor001};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  width: 380px;
  width: 100%;
  height: 180px;
  border-radius: 0.25rem;
`
export const Tag = styled.span<TagsProps>`
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  color: ${variaveis.cor0};
  font-weight: 700;
  display: inline-block;
  background-color: ${(props) => corDeFundo(props)};
  margin-bottom: 0.5rem;
`

export const MyTitle = styled.textarea`
  font-weight: 700;
  font-size: 1rem;
  color: ${variaveis.cor8};
  height: 1.30rem;
  cursor: pointer;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Email = styled.textarea`
  color: ${variaveis.cor5};
  font-size: 0.75rem;
  line-height: 150%;
  font-family: 'Roboto Mono', monospace;
  height: 1.30rem;
  font-family: "Roboto Mono" , monospace;
  cursor: pointer;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`


export const TelPhone = styled.textarea`
  color: #000;
  font-weight: 700;
  font-family: 1rem;
  height: 1.30rem;
  font-family: Roboto , monospace;
  cursor: pointer;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-block: 0.5rem;
 
`

export const Btn = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${variaveis.cor001};
  padding: 0.25rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cor6};
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`

export const btnSalvar = styled(Btn)`
background-color: ${variaveis.cor2};
color: #0D1E07;
`
export const BtncancelarRemover = styled(Btn)`
background-color: ${variaveis.cor3};

`
export const btnEditar = styled(Btn)`
background-color: ${variaveis.cor1};

`


export const MyDiv = styled.div`
  display: flex;
  align-items: center;
`
