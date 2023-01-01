import React from 'react'

import Plus from './components/Icons/Plus'

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
        <div className="chat__input_holder">
          <textarea className='chat__input_textarea' rows='1' />
        </div>
      </section>
    </div>
  </>
}

export default App