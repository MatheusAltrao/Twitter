import { DotsThree } from 'phosphor-react'
import React from 'react'
import Follow from './Follow'
import Message from './Message'
import './news.css'
import NewsItem from './NewsItem'

const News = () => {
  return (
    <main className='news'>
      <div className='search-area' >
        <input className='search-input' type="text" placeholder='Search Twitter' />
      </div>

      <div className="cards">

        <div className="card">
          <h2 className='card-title' >What’s happening</h2>

          <ul className='news-list'>
            <NewsItem title='NBA·LIVE' subtitle='Lakers at Rockets' tweets='4,875 Tweets' />
            <NewsItem title='Trending in Brazil' subtitle='Nubank' tweets='7,071 Tweets' />
            <NewsItem title='Sports · Trending' subtitle='Neymar' tweets='29,925 Tweets' />
          </ul>

        </div>

        <div className="card">
          <h2 className='card-title' >Who to follow</h2>

          <ul className='news-list'>
            <Follow image='https:github.com/maykbrito.png' name='Mayk' nick='@maykbrito' />
            <Follow image='https:github.com/diego3g.png' name='Diego' nick='@diego3g' />
            <Follow image='https:github.com/birobirobiro.png' name='João' nick='@birobirobiro' />
          </ul>

        </div>

      </div>

    </main>
  )
}

export default News
