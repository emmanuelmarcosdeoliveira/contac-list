
import ContactList from './containers/ContacList'
import Sidebar from './containers/Sidebar'
import StyleGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    
      <Provider store={store}>
        <StyleGlobal />
        <Container>
         <Sidebar />
          <ContactList />
          </Container>
      </Provider>
    
  )
}
export default App
