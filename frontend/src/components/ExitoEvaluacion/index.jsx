import {
  SpaceBetween,
  Container,
  Header,
  Button,
  Box
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
import { StatusIndicator } from '@cloudscape-design/components'

export default function ExitoEvaluacion() {
  const navigate = useNavigate()

  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">¡Evaluación completada!</Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween direction="vertical" size="l">
        {/* Icono de éxito y mensaje principal */}
        <Box textAlign="center">
          <StatusIndicator type="success" />
          <Box variant="p" margin={{ top: 's' }}>
            Tu evaluación ha sido enviada correctamente.
          </Box>
        </Box>

        {/* Botones de navegación */}
        <SpaceBetween direction="horizontal" size="s" justifyContent="center">
          <Button onClick={() => navigate('/historial-tutorias')}>
            Volver al historial de tutorías
          </Button>
          <Button variant="link" onClick={() => navigate('/home')}>
            Volver al inicio
          </Button>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  )
}
