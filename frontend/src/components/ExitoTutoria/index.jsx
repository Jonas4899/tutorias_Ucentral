import {
  SpaceBetween,
  Container,
  Header,
  Button,
  Box
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
import { StatusIndicator } from '@cloudscape-design/components'

export default function ExitoTutoria() {
  const navigate = useNavigate()

  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">¡Tutoría registrada exitosamente!</Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween direction="vertical" size="l">
        {/* Icono de éxito y mensaje principal */}
        <Box textAlign="center">
          <StatusIndicator type="success" />
          <Box variant="h3" margin={{ top: 's' }}>
            ¡Tutoría registrada exitosamente!
          </Box>
          <Box variant="p">
            Hemos enviado los detalles de tu tutoría al docente. Ahora debes
            esperar a que el docente confirme la tutoría.
          </Box>
        </Box>

        {/* Sección "¿Qué sigue?" */}
        <Box variant="h4" textAlign="center">
          ¿Qué sigue?
        </Box>
        <Box variant="p" margin={{ top: 'xs' }}>
          <ol>
            <li>
              Revisa tu correo o la plataforma para recibir una notificación de
              confirmación cuando el docente acepte tu tutoría.
            </li>
            <li>
              Si no recibes respuesta en 24-48 horas, te recomendamos ponerte en
              contacto con el docente o verificar el estado en la plataforma.
            </li>
          </ol>
        </Box>

        {/* Botones de navegación */}
        <SpaceBetween direction="horizontal" size="s" justifyContent="center">
          <Button onClick={() => navigate('/mis-tutorias')}>
            Ver mis tutorías
          </Button>
          <Button variant="link" onClick={() => navigate('/home')}>
            Volver al inicio
          </Button>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  )
}
