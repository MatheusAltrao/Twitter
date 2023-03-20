import './sidebar.css'
import twitterLogo from '../assets/Logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'

import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <aside className='sidebar'>

      <img className='logo' src={twitterLogo} alt="logo" />

      <nav className='main-navigation'>
        <NavLink to='/' > <House weight='fill' /> <span>Home</span></NavLink>
        <a href=""> <Hash /> <span>Explorer</span></a>
        <NavLink to='/notifications'> <Bell /> <span>Notifications</span></NavLink>
        <NavLink to='/messages'> <Envelope /> <span>Messages</span></NavLink>
        <NavLink to='/bookmarks'> <BookmarkSimple /> <span>Bookmarks</span></NavLink>
        <a href=""> <FileText /> <span>Lists</span></a>
        <NavLink to='/perfil'> <User /> <span>Profile</span></NavLink>
        <NavLink to='/more' > <DotsThreeCircle /> <span>More</span></NavLink>

      </nav>

      <button className='new-tweet'>
        <span>Tweet</span>
        <Pencil />

      </button>
    </aside >
  )
}

export default Sidebar


