import { Bell } from 'phosphor-react'
import React from 'react'
import './notification.css'

interface TweetNotification {
  image: string,
  title: string,
  name: string,
  description: string,

}

const Notification = (props: TweetNotification) => {
  return (

    <div className='notfication'>

      <Bell weight='fill' className='notfication-icon' />

      <div className="notfication-person">
        <img src={props.image} alt={props.name} />
        <p className='notification-title' >{props.title} <strong>{props.name}</strong></p>
        <p className='notification-description' >{props.description}</p>
      </div>
    </div>
  )
}

export default Notification
