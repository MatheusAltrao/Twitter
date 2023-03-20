import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../Header'
import Separator from '../Separator'
import Tweet from '../Tweet'
import './status.css'

const Status = () => {

  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState(['Hello', 'Good Morning', 'I love study TypeScript!'])


  //controled components

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    //estado sempre que alterar o valor das variaveis ele vai reagir 
    //imperativa x declarativa

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')

    //imutabilidade
  }

  function handleHotKeySubmit(e: KeyboardEvent) {

    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }

  }

  return (
    <main className='status' >

      <Header title='Tweet' />

      <Tweet content='Similique, reiciendis. Quidem optio natus vitae!' />

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/matheusAltrao.png" alt="Matheus Altrão" />
          <textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} id='tweet' placeholder='Tweet you answer'
            onKeyDown={handleHotKeySubmit} />
        </label>

        <button type='submit' >
          <span>Answer</span>
          <PaperPlaneRight />
        </button>
      </form>



      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}

export default Status
