import React from 'react'
import './message.css'

interface MessageProps {
  image?: string,
  name: string,
  nick?: string,

}
const Message = (props: MessageProps) => {
  return (
    <div className='message'>
      <img src={props.image} alt="" />

      <div className='message-card'>

        <div className='message-person' >
          <h3>{props.name}</h3>
          <p>{props.nick}</p>
          <p>•</p>
          <p>Mar 14</p>
        </div>

        <div className='message-content'>
          <p>Shared tweet</p>
        </div>


      </div>
    </div >
  )
}

export default Message
