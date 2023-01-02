import React from 'react'

import Icon from './Icons/Icon'

const ChatMessage = ({ message }) => {
    return <>
        <div className={`chat__message ${message.user === 'gpt' && 'chatgpt'}`}>
            <div className="chat__message_center">
                <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
                    { message.user === 'gpt' && <Icon /> }
                </div>
                <div className="message">
                    { message.message }
                </div>
            </div>
        </div>
    </>
}

export default ChatMessage