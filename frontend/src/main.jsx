import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@cloudscape-design/global-styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App'
import './index.css'
import Home from './components/Home'
import Notifications from './components/Notifications'
import BuscarTutoria from './components/BuscarTutoria'
import CrearTutoria from './components/CrearTutoria'
import ConfirmarTutoria from './components/ConfirmarTutoria'
import ExitoTutoria from './components/ExitoTutoria'

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
        element: <BuscarTutoria />
      },
      {
        path: '/crear-tutoria',
        element: <CrearTutoria />
      },
      {
        path: '/confirmar-tutoria',
        element: <ConfirmarTutoria />
      },
      {
        path: '/exito-tutoria',
        element: <ExitoTutoria />
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
        element: <Notifications />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
