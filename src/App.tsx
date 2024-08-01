import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StyleGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Register />
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
