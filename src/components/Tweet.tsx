import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import React from 'react'

import './tweet.css'

interface TweetProps {
  content: string,
}

const Tweet = (props: TweetProps) => {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/matheusAltrao.png" alt="Matheus Altrão" />

      <div className="tweet-content">
        <div className='tweet-content-header' >
          <strong>Matheus Altrão</strong>
          <span>@matheuxxx</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type='button' >
            <ChatCircle />
            20
          </button>

          <button type='button' >
            <ArrowsClockwise />
            30
          </button>

          <button type='button' >
            <Heart />
            180
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet
