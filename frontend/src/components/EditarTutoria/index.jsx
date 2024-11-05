import {
  Container,
  Header,
  Form,
  FormField,
  Select,
  Textarea,
  DatePicker,
  Button,
  SpaceBetween
} from '@cloudscape-design/components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditarTutoria() {
  const navigate = useNavigate()

  // Estados para los campos del formulario
  const [asignatura, setAsignatura] = useState({
    label: 'Métodos numéricos',
    value: '1'
  })
  const [tipoTutoria, setTipoTutoria] = useState({
    label: 'Individual',
    value: 'individual'
  })
  const [tema, setTema] = useState('')
  const [fechaHora, setFechaHora] = useState('')

  // Opciones para el campo de asignatura
  const opcionesAsignatura = [
    { label: 'Métodos numéricos', value: '1' },
    { label: 'Redes de computadores', value: '2' },
    { label: 'Inteligencia artificial', value: '3' },
    { label: 'Sistemas organizacionales y legislación', value: '4' },
    { label: 'Sistemas operativos', value: '5' }
  ]

  // Opciones para el tipo de tutoría
  const opcionesTipoTutoria = [
    { label: 'Individual', value: 'individual' },
    { label: 'Grupal', value: 'grupal' }
  ]

  const handleSubmit = () => {
    // Acción a realizar al confirmar la tutoría
    console.log('Asignatura:', asignatura)
    console.log('Tipo de tutoría:', tipoTutoria)
    console.log('Tema:', tema)
    console.log('Fecha y hora:', fechaHora)

    // Redirigir al usuario a otra página, como el historial
    navigate('/exito-modificar-tutoria')
  }

  return (
    <Container header={<Header variant="h1">Modificar tutoría</Header>}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="s" justifyContent="center">
            <Button variant="link" onClick={() => navigate('/historial')}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Confirmar tutoría
            </Button>
          </SpaceBetween>
        }
      >
        <SpaceBetween direction="vertical" size="l">
          {/* Campo de Asignatura */}
          <FormField
            label="Asignatura"
            description="Selecciona la asignatura para la tutoría"
          >
            <Select
              selectedOption={asignatura}
              onChange={({ detail }) => setAsignatura(detail.selectedOption)}
              options={opcionesAsignatura}
              placeholder="Selecciona una asignatura"
            />
          </FormField>

          {/* Campo de Tipo de Tutoría */}
          <FormField
            label="Tipo de tutoría"
            description="Elige si prefieres una tutoría individual o grupal"
          >
            <Select
              selectedOption={tipoTutoria}
              onChange={({ detail }) => setTipoTutoria(detail.selectedOption)}
              options={opcionesTipoTutoria}
              placeholder="Selecciona tipo de tutoría"
            />
          </FormField>

          {/* Campo de Tema de la Tutoría */}
          <FormField
            label="Tema de la tutoría"
            description="Especifica el tema o problema que te gustaría abordar en esta sesión"
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
      </Form>
    </Container>
  )
}
