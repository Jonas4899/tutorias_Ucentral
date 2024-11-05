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
import HistorialTutorias from './components/HistorialTutorias'
import EvaluacionDocente from './components/EvaluacionDocente'
import ExitoEvaluacion from './components/ExitoEvaluacion'
import DetallesTutoria from './components/DetallesTutoria'
import EditarTutoria from './components/EditarTutoria'
import CancelarTutoria from './components/CancelarTutoria'
import ExitoModificarTutoria from './components/Home/ExitoModificarTutoria'

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
        element: <HistorialTutorias />
      },
      {
        path: '/calificar-profesor',
        element: <EvaluacionDocente />
      },
      {
        path: '/exito-evaluacion',
        element: <ExitoEvaluacion />
      },
      {
        path: '/tutorias-agendadas',
        element: <h1>Tutorias agendadas</h1>
      },
      {
        path: '/detalles-tutoria',
        element: <DetallesTutoria />
      },
      {
        path: '/editar-tutoria',
        element: <EditarTutoria />
      },
      {
        path: '/exito-modificar-tutoria',
        element: <ExitoModificarTutoria />
      },
      {
        path: '/cancelar-tutoria',
        element: <CancelarTutoria />
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
