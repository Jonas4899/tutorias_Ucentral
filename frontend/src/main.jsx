import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@cloudscape-design/global-styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App'
import './index.css'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/buscar-tutoria',
        element: <h1>Buscar tutoria</h1>
      },
      {
        path: '/historial-tutorias',
        element: <h1>Historial de tutorias</h1>
      },
      {
        path: '/tutorias-agendadas',
        element: <h1>Tutorias agendadas</h1>
      },
      {
        path: '/notificaciones',
        element: <h1>Notificaciones</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
