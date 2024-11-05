import {
  SpaceBetween,
  Container,
  Header,
  Form,
  FormField,
  Select,
  Textarea,
  Button
} from '@cloudscape-design/components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EvaluacionDocente() {
  const navigate = useNavigate()

  // Estado inicial para cada select
  const [selectedOptions, setSelectedOptions] = useState({
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
    pregunta4: null,
    pregunta5: null,
    pregunta6: null,
    pregunta7: null,
    pregunta8: null,
    pregunta9: null
  })

  const [observaciones, setObservaciones] = useState('')

  // Opciones comunes de calificación
  const opcionesCalificacion = [
    { label: 'Seleccione una opción', value: '' },
    { label: 'Deficiente (1)', value: '1' },
    { label: 'Regular (2)', value: '2' },
    { label: 'Bueno (3)', value: '3' },
    { label: 'Muy Bueno (4)', value: '4' },
    { label: 'Excelente (5)', value: '5' }
  ]

  const handleSelectChange = (pregunta, opcion) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [pregunta]: opcion
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Respuestas:', selectedOptions)
    console.log('Observaciones:', observaciones)

    // Redirección al enviar el formulario
    navigate('/exito-evaluacion')
  }

  return (
    <Container
      header={
        <SpaceBetween alignItems="center" size="xl">
          <Header variant="h1">Evaluación del profesor</Header>
        </SpaceBetween>
      }
    >
      {/* Uso de un <form> HTML nativo para manejar el envío */}
      <form onSubmit={handleSubmit}>
        <Form>
          <SpaceBetween direction="vertical" size="l">
            {/* Pregunta 1 */}
            <FormField label="¿El profesor explicó los temas de manera clara y comprensible?">
              <Select
                selectedOption={selectedOptions.pregunta1}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta1', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 2 */}
            <FormField label="¿El profesor demostró un buen conocimiento y dominio del tema tratado?">
              <Select
                selectedOption={selectedOptions.pregunta2}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta2', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 3 */}
            <FormField label="¿El profesor resolvió todas tus dudas de manera adecuada?">
              <Select
                selectedOption={selectedOptions.pregunta3}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta3', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 4 */}
            <FormField label="¿El profesor promovió la participación activa y el diálogo entre los estudiantes?">
              <Select
                selectedOption={selectedOptions.pregunta4}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta4', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 5 */}
            <FormField label="¿El profesor fue puntual para iniciar la tutoría?">
              <Select
                selectedOption={selectedOptions.pregunta5}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta5', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 6 */}
            <FormField label="¿El profesor proporcionó o utilizó materiales adecuados para facilitar la comprensión del tema?">
              <Select
                selectedOption={selectedOptions.pregunta6}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta6', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 7 */}
            <FormField label="¿El profesor mostró una actitud respetuosa y amigable hacia los estudiantes?">
              <Select
                selectedOption={selectedOptions.pregunta7}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta7', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 8 */}
            <FormField label="¿La tutoría estuvo bien organizada en cuanto a los temas y el tiempo dedicado a cada uno?">
              <Select
                selectedOption={selectedOptions.pregunta8}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta8', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Pregunta 9 */}
            <FormField label="¿Qué tan satisfecho estás con la tutoría en general?">
              <Select
                selectedOption={selectedOptions.pregunta9}
                onChange={({ detail }) =>
                  handleSelectChange('pregunta9', detail.selectedOption)
                }
                options={opcionesCalificacion}
                placeholder="Seleccione su calificación"
              />
            </FormField>

            {/* Observaciones */}
            <FormField label="¿Tienes algún comentario o sugerencia adicional para el profesor o para mejorar futuras tutorías?">
              <Textarea
                placeholder="Escribe tus observaciones aquí..."
                value={observaciones}
                onChange={({ detail }) => setObservaciones(detail.value)}
              />
            </FormField>

            {/* Botón de envío */}
            <SpaceBetween
              direction="horizontal"
              size="s"
              justifyContent="center"
            >
              <Button variant="primary" type="submit">
                Enviar evaluación
              </Button>
            </SpaceBetween>
          </SpaceBetween>
        </Form>
      </form>
    </Container>
  )
}
