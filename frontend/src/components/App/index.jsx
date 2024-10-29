import { useState } from 'react'
import {
  AppLayout,
  ContentLayout,
  Header,
  SideNavigation
} from '@cloudscape-design/components'
import { I18nProvider } from '@cloudscape-design/components/i18n'
import messages from '@cloudscape-design/components/i18n/messages/all.en'
import TopNavigation from '@cloudscape-design/components/top-navigation'
import { Outlet } from 'react-router-dom'

const LOCALE = 'en'

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const handleNavigationToggle = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <TopNavigation
        identity={{
          href: '#',
          title: 'Gestor de tutorias'
        }}
        utilities={[
          {
            type: 'button',
            iconName: 'notification',
            title: 'Notifications',
            ariaLabel: 'Notifications (unread)',
            badge: true,
            disableUtilityCollapse: false
          },
          {
            type: 'menu-dropdown',
            iconName: 'settings',
            ariaLabel: 'Settings',
            title: 'Settings',
            items: [
              {
                id: 'settings-org',
                text: 'Organizational settings'
              },
              {
                id: 'settings-project',
                text: 'Project settings'
              }
            ]
          },
          {
            type: 'menu-dropdown',
            text: 'Customer Name',
            description: 'email@example.com',
            iconName: 'user-profile',
            items: [
              { id: 'profile', text: 'Profile' },
              { id: 'signout', text: 'Sign out' }
            ]
          }
        ]}
      />
      <AppLayout
        navigationOpen={isNavigationOpen}
        onNavigationChange={handleNavigationToggle}
        navigation={
          <SideNavigation
            header={{
              href: '#',
              text: 'Tutorías'
            }}
            items={[
              { type: 'link', text: `Buscar tutoría o crear nueva`, href: `#` },
              { type: 'link', text: `Historial de tutorías`, href: `#` },
              { type: 'link', text: `Mis tutorías agendadas`, href: `#` }
            ]}
          />
        }
        content={
          <ContentLayout header={<Header variant="h1">Page header</Header>}>
            <Outlet />
          </ContentLayout>
        }
      />
    </I18nProvider>
  )
}

export { App }
