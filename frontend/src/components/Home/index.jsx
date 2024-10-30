import InfoBox from "../InfoBox"
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";

export default function Home() {
  return (
    <InfoBox buttons={
      <SpaceBetween alignItems="end" size="s">
                <SpaceBetween direction="vertical" size="s">
                    <Button>Ver detalles</Button>
                </SpaceBetween>
            </SpaceBetween>
    }>
      <Box variant="p">Profesor/a: María Rodríguez</Box>
      <Box variant="p">Dirección: Calle Universidad, número 123</Box>
      <Box variant="p">Fecha y hora: 15 de septiembre, 10:00</Box>
      <Box variant="p">Estado: Confirmada 🟢</Box>
    </InfoBox>
  )
}
