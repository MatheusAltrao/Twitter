import React from 'react'
import Header from '../Header'
import './perfil.css'
import bgPerfil from '../../assets/bg-perfil.jpeg'
import { Balloon, CalendarCheck, MapPin } from 'phosphor-react'

const Perfil = () => {
  return (
    <main className='perfil'>
      <Header title='Matheus Altrão' subtitle='17.5K Tweets' />

      <div className='bg-area'>
        <img className='bg-img' src={bgPerfil} alt="" />

        <div className='perfil-info'>



          <div className='perfil-img-area'>
            <img className='perfil-img' src="https:github.com/matheusaltrao.png" alt="" />
          </div>

          <button className='edit'>Edit profile</button>
        </div>

      </div>

      <div className='perfil-description'>

        <div className='text' >

          <h2>Matheus</h2>
          <p>@matheus_altrao</p>

          <h3>
            19y <br />
            Dev Front-end
          </h3>
        </div>


        <div className='perfil-localization' >
          <p> <span><MapPin /></span> Três Lagoas Brasil</p>
          <p> <span><Balloon /></span> Born November 21,2003</p>
          <p> <span><CalendarCheck /></span> Joined July 2017</p>
        </div>

        <div className='follow' >

          <span> 350 <p>Following</p></span>
          <span> 200 <p>Followers</p></span>


        </div>

      </div>

      <nav className='nav' >
        <a className='active' href="#">Tweets</a>
        <a href="#">Replies</a>
        <a href="#">Media</a>
        <a href="#">likes</a>
      </nav>


    </main>
  )
}

export default Perfil
