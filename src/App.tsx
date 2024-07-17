import ContactList from './containers/ContacList'
import Sidebar from './containers/Sidebar'
import StyleGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <div>
        <StyleGlobal />
        <Container>
          <Sidebar />
          <ContactList />
        </Container>
      </div>
    </>
  )
}
export default App
