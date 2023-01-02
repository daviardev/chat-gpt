import React, { useState } from 'react'

import Plus from './components/Icons/Plus'
import ChatMessage from './components/ChatMessage'

import './App.css'
import './normal.css'

function App() {
  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([{
    user: 'gpt',
    message: 'How can I help you today'
  }, {
    user: 'me',
    message: 'I want to use ChatGPT today'
  }])

  const handleSubmit = async e => {
    e.preventDefault()
    setChatLog([ ...chatLog, { user: 'me', message: `${input}` } ])
    setInput('')

    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join('')
      })
    })
    const data = await response.json()
    setChatLog([ ...chatLog, { user: 'gpt', message: `${data.message}` } ])
    console.log(data.message)
  }


  return <>
    <div className="App">
      <aside className="side__menu">
        <div className="side__menu__button">
          <span>
            <Plus />
          </span>
          New chat
        </div>
      </aside>
      <section className='chat__box'>
        <div className="chat_log">
          { chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          )) }
        </div>
        <div className="chat__input_holder">
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              className='chat__input_textarea'
            />
          </form>
        </div>
      </section>
    </div>
  </>
}

export default App