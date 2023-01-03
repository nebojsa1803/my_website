import React, { useState } from 'react'

function Contact() {
  const clearInputs = (e) => {
    e.preventDefault()
    setEmail('')
    setName('')
    setSubject('')
    setTextarea('')
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [textarea, setTextarea] = useState('')

  return (
    <div id='contact'>
      <form
        className='contact-form'
        action='https://formspree.io/f/xwkjkpbn'
        method='POST'
        onSubmit={(e) => clearInputs(e)}
      >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          name='subject'
          id='subject'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name='message'
          id='message'
          placeholder='Message'
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          required
        ></textarea>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Contact
