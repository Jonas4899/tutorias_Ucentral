import {
  Container,
  Header,
  InfoBox,
  Box,
  Button,
  SpaceBetween
} from '@glrodasz/components'

export default function TutoriasAgendadas() {
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
