import { Bell } from 'phosphor-react'
import React from 'react'
import Header from '../Header'
import Notification from '../Notification'

const Notifications = () => {
  return (
    <main className='notifications' >
      <Header title='Notifications' />
      <Notification image='https://github.com/birobirobiro.png' title='New tweet notifications for' name='Biro' description='Take this tip in React. ' />
      <Notification image='https://github.com/diego3g.png' title='New tweet notifications for' name='Diego3g' description='How to make project with ReactJs and TailwindCSS.' />
      <Notification image='https://github.com/maykbrito.png' title='New tweet notifications for' name='Maykbrito' description='New project with HTML,CSS,Javascript.' />
      <Notification image='https://github.com/rodrigorgtic.png' title='New tweet notifications for' name='Rodrigorgtic' description='First project using ReactNative.' />

    </main>
  )
}

export default Notifications
