import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../Header'
import Separator from '../Separator'
import Tweet from '../Tweet'

import './timeline.css'

const Timeline = () => {

  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(['Hello', 'Good Morning', 'I love study TypeScript!'])


  //controled components

  function createNewTweet(e: FormEvent) {


    e.preventDefault()

    //estado sempre que alterar o valor das variaveis ele vai reagir 
    //imperativa x declarativa

    setTweets([newTweet, ...tweets])
    setNewTweet('')

    //imutabilidade
  }

  function handleHotKeySubmit(e: KeyboardEvent) {

    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }

  }

  return (
    <main className='timeline' >

      <Header title='Home' />


      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/matheusAltrao.png" alt="Matheus Altrão" />
          <textarea id='tweet' placeholder='Whats happening?'
            value={newTweet}
            onChange={(e) => {
              setNewTweet(e.target.value)
            }}
            onKeyDown={handleHotKeySubmit}
          />

        </label>

        <button type='submit' >Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}

export default Timeline
