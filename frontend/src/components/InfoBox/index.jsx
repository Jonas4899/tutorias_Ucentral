import Container from '@cloudscape-design/components/container'
import Header from '@cloudscape-design/components/header'
import SpaceBetween from '@cloudscape-design/components/space-between'

export default function InfoBox({ title, buttons, children }) {
  return (
    <Container
      header={
        <Header variant="h2" actions={buttons}>
          {title}
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="s">
        {children}
      </SpaceBetween>
    </Container>
  )
}
