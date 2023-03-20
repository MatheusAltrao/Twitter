import { DotsThree } from 'phosphor-react'
import React from 'react'

interface NewsProps {
  title: string,
  subtitle: string,
  tweets: string
}

const NewsItem = (props: NewsProps) => {
  return (
    <li>
      <div className='news-subtitle-area'>
        <p className='news-title'>{props.title}</p>
        <span><DotsThree /></span>
      </div>

      <p className='news-subtitle' >{props.subtitle}</p>
      <p className='news-tweet'>{props.tweets}</p>
    </li>
  )
}

export default NewsItem
