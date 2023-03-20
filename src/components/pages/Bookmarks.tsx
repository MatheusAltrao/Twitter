import React from 'react'
import Header from '../Header'
import './bookmarks.css'
import imgbookmark from '../../assets/bookmarkempty.png'

const Bookmarks = () => {
  return (
    <main className='bookmarks'>
      <Header title='Bookmarks' />

      <div className="bookmark">
        <img src={imgbookmark} alt="" />

        <div className="text">
          <h2>Save Tweets for later</h2>
          <p>Don’t let the good ones fly away! Bookmark <br />
            Tweets to easily find them again in the future.</p>
        </div>

      </div>

    </main>
  )
}

export default Bookmarks
