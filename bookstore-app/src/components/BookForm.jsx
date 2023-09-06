import { useState } from 'react'
// import Card from "./shared/Card"
import Button from "./shared/Button"
// import FeedbackContext from '../context/FeedbackContext'

function BookForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 4) {
            setMessage('Make up something fun!')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 4) {
            const newStory = {
                text,
            }
            handleAdd(newStory)

        }
    }

    return <div className='card'>
        <form onSubmit={handleSubmit}>
            <h2>What book are you looking for?</h2>
            <div className="input-group">
                <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder='Make up a book!' 
                    value={text}
                />
                <Button type="submit" isDisabled={btnDisabled} version="primary">Search</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </div>
}

export default BookForm
