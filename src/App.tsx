import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StyleGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastrodecontatos',
    element: <h1>Nova Contato</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}
export default App
