import InfoBox from '../InfoBox'
import Icon from '@cloudscape-design/components/icon'
import Header from '@cloudscape-design/components/header'

export default function NotificationBox({ title, children }) {
  return (
    <InfoBox title={<Icon name="notification" />}>
      <Header variant="h2">{title}</Header>
      {children}
    </InfoBox>
  )
}
