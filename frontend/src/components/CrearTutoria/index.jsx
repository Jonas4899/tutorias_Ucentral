import { useState } from 'react'
import {
  SpaceBetween,
  Container,
  Header,
  Button,
  Form,
  FormField,
  Select,
  Textarea,
  DatePicker
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'

export default function CrearTutoria() {
  const navigate = useNavigate()
  const [selectedAsignatura, setSelectedAsignatura] = useState(null)
  const [selectedProfesor, setSelectedProfesor] = useState(null)
  const [tipoTutoria, setTipoTutoria] = useState(null)
  const [tema, setTema] = useState('')
  const [fechaHora, setFechaHora] = useState('')

  const handleSubmit = () => {
    navigate('/confirmar-tutoria')
  }

  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">Crear nueva tutoría</Header>
        </SpaceBetween>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Form
          actions={
            <SpaceBetween alignItems="center" direction="horizontal" size="xs">
              <Button formAction="none" variant="link">
                Cancelar
              </Button>
              <Button variant="primary">Confirmar tutoría</Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween direction="vertical" size="l">
              {/* Campo de Asignatura */}
              <FormField
                label="Asignatura"
                description="Selecciona la asignatura para la tutoría"
              >
                <Select
                  selectedOption={selectedAsignatura}
                  onChange={({ detail }) =>
                    setSelectedAsignatura(detail.selectedOption)
                  }
                  options={[
                    { label: 'Arquitectura de sistemas I', value: '1' },
                    { label: 'Redes de computadores', value: '2' },
                    { label: 'Inteligencia artificial', value: '3' },
                    {
                      label: 'Sistemas organizacionales y legislación',
                      value: '4'
                    },
                    { label: 'Sistemas operativos', value: '5' }
                  ]}
                  placeholder="Selecciona una asignatura"
                />
              </FormField>

              {/* Campo de Profesor */}
              <FormField
                label="Profesor"
                description="Selecciona al profesor para la tutoría"
              >
                <Select
                  selectedOption={selectedProfesor}
                  onChange={({ detail }) =>
                    setSelectedProfesor(detail.selectedOption)
                  }
                  options={[
                    { label: 'Ingeniero García', value: '1' },
                    { label: 'Ingeniero Pérez', value: '2' },
                    { label: 'Ingeniero Fernández', value: '3' },
                    { label: 'Ingeniero Gómez', value: '4' },
                    { label: 'Ingeniero Ruiz', value: '5' }
                  ]}
                  placeholder="Selecciona un profesor"
                />
              </FormField>

              {/* Campo de Tipo de Tutoría */}
              <FormField
                label="Tipo de tutoría"
                description="Elige si prefieres una tutoría individual o grupal"
              >
                <Select
                  selectedOption={tipoTutoria}
                  onChange={({ detail }) =>
                    setTipoTutoria(detail.selectedOption)
                  }
                  options={[
                    { label: 'Individual', value: 'individual' },
                    { label: 'Grupal', value: 'grupal' }
                  ]}
                  placeholder="Selecciona tipo de tutoría"
                />
              </FormField>

              {/* Campo de Tema de la Tutoría */}
              <FormField
                label="Tema de la tutoría"
                description="Describe brevemente el tema que deseas tratar"
              >
                <Textarea
                  placeholder="Describe brevemente el tema que deseas tratar"
                  value={tema}
                  onChange={({ detail }) => setTema(detail.value)}
                />
              </FormField>

              {/* Campo de Fecha y Hora de la Tutoría */}
              <FormField
                label="Fecha y hora de la tutoría"
                description="Selecciona una fecha y hora disponibles para la tutoría"
              >
                <DatePicker
                  placeholder="YYYY/MM/DD"
                  value={fechaHora}
                  onChange={({ detail }) => setFechaHora(detail.value)}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </Container>
  )
}
