import './header.css'
import { Sparkle } from 'phosphor-react'

interface HeaderProps {
  title: string,
  subtitle?: string
}

const Header = (props: HeaderProps) => {
  return (
    <div className='timeline-header' >
      <div className='left'>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
      <Sparkle />
    </div>
  )
}

export default Header
