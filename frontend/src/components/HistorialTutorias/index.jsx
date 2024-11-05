import {
  SpaceBetween,
  Container,
  Header,
  Button,
  Box
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
import InfoBox from '../InfoBox'

export default function HistorialTutorias() {
  const navigate = useNavigate()
  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">Historial de tutorías</Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween direction="vertical" size="l">
        {/* Sección "Tutorías pasadas" */}
        <InfoBox
          title="Introducción a la regresion lineal"
          buttons={
            <SpaceBetween alignItems="end" size="s">
              <SpaceBetween direction="horizontal" size="s">
                <Button
                  variant="primary"
                  onClick={() => navigate('/detalles-tutoria')}
                >
                  Ver detalles
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigate('/calificar-profesor')}
                  className="!bg-red-500 !text-white"
                >
                  Calificar al profesor
                </Button>
              </SpaceBetween>
            </SpaceBetween>
          }
        >
          <Box variant="p">Profesor/a: María Rodríguez</Box>
          <Box variant="p">Dirección: Calle Universidad, número 123</Box>
          <Box variant="p">Numero de asistentes: 3 / 10</Box>
        </InfoBox>
        <InfoBox
          title="Introducción a la regresion lineal"
          buttons={
            <SpaceBetween alignItems="end" size="s">
              <SpaceBetween direction="horizontal" size="s">
                <Button
                  variant="primary"
                  onClick={() => navigate('/detalles-tutoria')}
                >
                  Ver detalles
                </Button>
              </SpaceBetween>
            </SpaceBetween>
          }
        >
          <Box variant="p">Profesor/a: María Rodríguez</Box>
          <Box variant="p">Dirección: Calle Universidad, número 123</Box>
          <Box variant="p">Numero de asistentes: 3 / 10</Box>
        </InfoBox>
        {/* Botones de navegación */}
        <SpaceBetween direction="horizontal" size="s" justifyContent="center">
          <Button onClick={() => navigate('/home')}>Volver al inicio</Button>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  )
}
