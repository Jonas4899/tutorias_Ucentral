import {
  Container,
  Header,
  SpaceBetween,
  ColumnLayout,
  Box,
  Table,
  Button,
  StatusIndicator
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'

export default function DetallesTutoria() {
  const navigate = useNavigate()

  const participantes = [
    { nombre: 'María García', rol: 'Profesor' },
    { nombre: 'Jonathan Salcedo', rol: 'Estudiante' }
  ]

  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">Detalles de la tutoría</Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <ColumnLayout columns={5} variant="text-grid">
          <Box>
            <Box variant="awsui-key-label">Asignatura</Box>
            <Box>Métodos numéricos</Box>
          </Box>
          <Box>
            <Box variant="awsui-key-label">Tipo</Box>
            <Box>Individual</Box>
          </Box>
          <Box>
            <Box variant="awsui-key-label">Dirección</Box>
            <Box>Calle Principal, Número 123</Box>
          </Box>
          <Box>
            <Box variant="awsui-key-label">Fecha y hora</Box>
            <Box>15 de Septiembre, 10:00</Box>
          </Box>
          <Box>
            <Box variant="awsui-key-label">Estado</Box>
            <StatusIndicator type="success">Confirmada</StatusIndicator>
          </Box>
        </ColumnLayout>

        <Box>
          <Box variant="h2">Temas a trabajar</Box>
          <ul>
            <li>Introducción a la programación en Python</li>
          </ul>
        </Box>

        <Box>
          <Box variant="h2">Participantes</Box>
          <Table
            columnDefinitions={[
              {
                header: 'Nombre completo',
                cell: (item) => item.nombre
              },
              {
                header: 'Roles',
                cell: (item) => item.rol
              }
            ]}
            items={participantes}
            header={<Header variant="h3">Participantes</Header>}
          />
        </Box>

        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/editar-tutoria')}>
            Editar tutoría
          </Button>
          <Button
            variant="link"
            color="red"
            onClick={() => navigate('/cancelar-tutoria')}
          >
            Cancelar tutoría
          </Button>
        </SpaceBetween>

        <Button
          variant="primary"
          onClick={() => navigate('/historial-tutorias')}
        >
          Volver al historial
        </Button>
      </SpaceBetween>
    </Container>
  )
}
