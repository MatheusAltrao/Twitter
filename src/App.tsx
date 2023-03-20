import './global.css'

import Tweet from './components/Tweet'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Separator from './components/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Timeline from './components/pages/Timeline'

function App() {

  // typescript é uma ferramente de tipagem estática para o javascript
  //tipagem estática eh um mecanismo para evitar erros enquanto desenvolvemos


  /* 
  criando uma classe no atributo style com js
  
  const tweetStyles = {
     borderRadius: 8,
     margin: 16
   } */



  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App
