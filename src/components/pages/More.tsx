import React from 'react'
import Darkmode from '../Darkmode'
import Header from '../Header'
import Separator from '../Separator'
import './more.css'

const More = () => {
  return (
    <main className='more' >
      <Header title='More' />

      <div className="swtichTheme">
        <div className="switchTheme-left">
          <p className='title'>Theme</p>
          <p className='subtitle'>Change Theme between Light or Dark</p>
        </div>

        <div className="switchTheme-right">
          <Darkmode />
        </div>

      </div>
    </main>
  )
}

export default More
