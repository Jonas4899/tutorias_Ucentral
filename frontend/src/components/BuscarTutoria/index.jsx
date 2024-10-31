import { useState } from 'react'
import { SpaceBetween } from '@cloudscape-design/components'
import { Container } from '@cloudscape-design/components'
import { Header } from '@cloudscape-design/components'
import { Select } from '@cloudscape-design/components'
import { Button } from '@cloudscape-design/components'
import { Box } from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
import InfoBox from '../InfoBox'

export default function BuscarTutoria() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState({
    label: 'Arquitectura de sistemas I',
    value: '1'
  })

  const handleConsultar = () => {
    // Aca va la logica para consultar las tutorías ya existentes
  }

  const handleAgregarTutoria = () => {
    navigate('/crear-tutoria')
  }

  return (
    <SpaceBetween direction="vertical" size="m">
      <Container
        header={
          <SpaceBetween alignItems="center" size="xl">
            <Header variant="h1">Tutorías grupales disponibles</Header>
          </SpaceBetween>
        }
      >
        <SpaceBetween alignItems="center" size="m">
          <Box variant="p">
            Elige una materia para ver las tutorías disponibles
          </Box>
          <Select
            selectedOption={selectedOption}
            onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
            options={[
              { label: 'Arquitectura de sistemas I', id: '1' },
              { label: 'Redes de computadores', id: '2' },
              { label: 'Inteligencia artificial', id: '3' },
              { label: 'Sistemas organizacionales y legislación', id: '4' },
              { label: 'Sistemas operativos', id: '5' }
            ]}
          />
          <Button variant="primary" onClick={handleConsultar}>
            Consultar
          </Button>
          <InfoBox
            buttons={
              <SpaceBetween alignItems="end" size="s">
                <SpaceBetween direction="vertical" size="s">
                  <Button>Registrarse</Button>
                </SpaceBetween>
              </SpaceBetween>
            }
            title="Introducción a los Patrones de Diseño en Arquitectura de Sistemas"
          >
            <Box variant="p">Profesor/a: María Rodríguez</Box>
            <Box variant="p">Dirección: Calle Universidad, número 123</Box>
            <Box variant="p">Numero de asistentes: 3 / 10</Box>
          </InfoBox>
        </SpaceBetween>
      </Container>
      <Container
        header={
          <SpaceBetween alignItems="center" size="xl">
            <Header variant="h2">No encontraste una tutoría a tu gusto?</Header>
          </SpaceBetween>
        }
      >
        <SpaceBetween alignItems="center" size="m">
          <Box variant="p">
            Si no encontraste una tutoría que se ajuste a tus necesidades,
            ¡puedes crear una nueva aquí!
          </Box>
          <Button
            variant="primary"
            className="!bg-green-600"
            onClick={handleAgregarTutoria}
          >
            Agregar nueva tutoría
          </Button>
        </SpaceBetween>
      </Container>
    </SpaceBetween>
  )
}
