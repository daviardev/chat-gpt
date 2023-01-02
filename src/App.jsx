import React from 'react'

import Plus from './components/Icons/Plus'
import Icon from './components/Icons/Icon'

import './App.css'
import './normal.css'

function App() {
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
          <div className="chat__message">
            <div className="chat__message_center">
              <div className="avatar">

              </div>
              <div className="message">
                Como se hace un console.log en js
              </div>
            </div>
          </div>
          <div className="chat__message chatgpt">
            <div className="chat__message_center">
              <div className="avatar chatgpt">
                <Icon />
              </div>
              <div className="message">
                console.log("Hola mundo");
              </div>
            </div>
          </div>
        </div>
        <div className="chat__input_holder">
          <textarea className='chat__input_textarea' rows='1' />
        </div>
      </section>
    </div>
  </>
}

export default App