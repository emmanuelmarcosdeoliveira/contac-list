import styled, { createGlobalStyle } from 'styled-components'

const Styleglobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
body {
    background-color: #f7f7f7;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default Styleglobal
