import SpaceBetween from '@cloudscape-design/components/space-between'
import Box from '@cloudscape-design/components/box'
import Header from '@cloudscape-design/components/header'
import { Container } from '@cloudscape-design/components'
import NotificationBox from '../NotificationBox'

export default function Notifications() {
  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h2">Notificaciones</Header>
        </SpaceBetween>
      }
    >
      <NotificationBox title="Tutoria programada exitosamente">
        <Box variant="p">Tutoría programada con el Prof. Juan Pérez</Box>
        <Box variant="p">Fecha: 12 de octubre, 10:00 AM, Aula 203</Box>
        <Box variant="p">
          <div className="text-gray-500 text-xs">Hace 2 horas</div>
        </Box>
      </NotificationBox>
    </Container>
  )
}
