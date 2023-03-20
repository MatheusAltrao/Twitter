import { Moon, Sun } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import './darkmode.css'

const Darkmode = () => {


  const [theme, setTheme] = useState(localStorage.theme)


  useEffect(() => {



    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')

    } else {
      localStorage.removeItem('theme')
      document.body.classList.remove('dark')
    }

  }, [theme])

  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="area">
      <input onClick={changeTheme} className="checkbox" type="checkbox" name="checkbox" id="checkbox" />
      <label >
        <Sun weight='fill' className='sun  ' />
        <Moon weight='fill' className='moon ' />
        <div className="ball"></div>
      </label>
    </div>
  )
}

export default Darkmode
