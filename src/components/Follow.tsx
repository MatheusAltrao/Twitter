import React from 'react'

interface FollowProps {
  image: string,
  name: string,
  nick: string,
}

const Follow = (props: FollowProps) => {
  return (
    <li className='news-list-follow' >

      <div className='follow-area'>
        <img className='follow-image' src={props.image} alt="" />
        <div className="follow-perfil">
          <h2 className='follow-name' >{props.name}</h2>
          <p className='follow-nick'>{props.nick}</p>
        </div>
      </div>

      <button>Follow</button>
    </li>
  )
}

export default Follow
