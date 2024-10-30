import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";

export default function InfoBox({buttons, children}) {
    return (
        <Container
      header={
        <Header
          variant="h2"
          actions={buttons}
        >
          Tema de la tutoría: Matematicas avanzadas
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="s">
        {children}
      </SpaceBetween>
    </Container>
    )
}