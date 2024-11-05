import {
  Container,
  Header,
  Box,
  SpaceBetween,
  Button,
  StatusIndicator
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'

export default function ExitoModificarTutoria() {
  const navigate = useNavigate()

  return (
    <Container>
      <SpaceBetween size="l" direction="vertical">
        {/* Ícono de éxito y título */}
        <Box textAlign="center" justifyContent="center">
          <Header variant="h1">¡Tutoría modificada exitosamente!</Header>
          <StatusIndicator type="success" />
        </Box>

        {/* Mensaje de confirmación */}
        <Box textAlign="center" variant="p">
          Hemos enviado los nuevos detalles de tu tutoría al docente. Ahora
          debes esperar a que el docente confirme la tutoría nuevamente.
        </Box>

        {/* Línea separadora */}
        <Box textAlign="center">
          <hr
            style={{ width: '80%', margin: '0 auto', borderColor: '#e5e5e5' }}
          />
        </Box>

        {/* Botones de navegación */}
        <SpaceBetween size="s" direction="horizontal" justifyContent="center">
          <Button
            variant="link"
            onClick={() => navigate('/tutorias-agendadas')}
          >
            Volver a tutorías agendadas
          </Button>
          <Button variant="primary" onClick={() => navigate('/home')}>
            Volver al inicio
          </Button>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  )
}
