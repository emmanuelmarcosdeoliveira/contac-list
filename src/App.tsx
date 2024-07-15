import Main from './containers/Main'
import SideBar from './containers/SideBar'
import StyleGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <div>
        <StyleGlobal />
        <Container>
          <SideBar />
          <Main />
        </Container>
      </div>
    </>
  )
}
export default App
