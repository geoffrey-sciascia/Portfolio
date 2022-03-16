import React, { useEffect, useState } from 'react'

import { fetchGreetings } from '../api'
import Info from './Info'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchGreetings()
      .then(greetings => setMessages(greetings))
  }, [])

  return (
    <div className='app-container'>
      <h1 className='app-title'>My Dev Portfolio!</h1>
      <ul>
        {messages.map(m => <li key={m.id}>{m.text} 👋</li>)}
      </ul>
      <Info />
    </div>
  )
}

export default App
