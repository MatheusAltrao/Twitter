import React, { useState } from 'react'
import Header from '../Header'
import Message from '../Message'
import './messages.css'

const Messages = () => {

  const [search, setSearch] = useState('')

  const persons = [
    { id: 1, image: 'https://github.com/birobirobiro.png', name: 'biro', nick: '@birobirobiro', },
    { id: 2, image: 'https://github.com/diego3g.png', name: 'Diego', nick: '@diego3g', },
    { id: 3, image: 'https://github.com/maykbrito.png', name: 'Mayk', nick: '@maykbrito', },
    { id: 4, image: 'https://github.com/rodrigorgtic.png', name: 'Rodrigo', nick: '@rodrigorgtic', },
    { id: 5, image: 'https://github.com/jakeliny.png', name: 'Jakeliny', nick: '@jakeliny', },
    { id: 6, image: 'https://github.com/nyousefali.png', name: 'Násser', nick: '@nyousefali', },
  ]

  const filterNames = persons.filter((i) => i.name.toLocaleLowerCase().includes(search.toLowerCase()))

  return (
    <main className='messages'>
      <Header title='Messages' />

      <div className='search-area' >
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='search-input' type="text" placeholder='Search Direct Messages' />
      </div>

      <div className="messages-list">

        {filterNames.map((person) => (
          <Message key={person.id} image={person.image} name={person.name} nick={person.nick} />
        ))}



      </div>

    </main>
  )
}

export default Messages
