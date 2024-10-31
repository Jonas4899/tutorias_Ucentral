import SpaceBetween from '@cloudscape-design/components/space-between'
import Button from '@cloudscape-design/components/button'
import Box from '@cloudscape-design/components/box'
import Header from '@cloudscape-design/components/header'
import { Container } from '@cloudscape-design/components'
import InfoBox from '../InfoBox'

export default function Home() {
  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h2">Próximas tutorías agendadas</Header>
        </SpaceBetween>
      }
    >
      <InfoBox
        buttons={
          <SpaceBetween alignItems="end" size="s">
            <SpaceBetween direction="vertical" size="s">
              <Button>Ver detalles</Button>
            </SpaceBetween>
          </SpaceBetween>
        }
        title="Tema de la tutoría: Matematicas avanzadas"
      >
        <Box variant="p">Profesor/a: María Rodríguez</Box>
        <Box variant="p">Dirección: Calle Universidad, número 123</Box>
        <Box variant="p">Fecha y hora: 15 de septiembre, 10:00</Box>
        <Box variant="p">Estado: Confirmada 🟢</Box>
      </InfoBox>
    </Container>
  )
}
