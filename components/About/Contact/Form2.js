import React, { useState } from 'react'
import Image from 'next/image'
// Components
import ResponseAlert from 'components/ResponseAlert/ResponseAlert'

// Api
import api from 'utils/api'

const Form2 = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const [serverResponseType, setServerResponseType] = useState(null)
  const [serverResponse, setServerResponse] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    await api
      .postForm({
        urlParams: { formType: 'contact' },
        data: { name, phoneNumber, email, message, country },
      })
      .then(() => {
        setServerResponseType('success')
        setServerResponse('Your message has been successfully registered')
        setName('')
        setPhoneNumber('')
        setCountry('')
        setEmail('')
        setMessage('')
      })
      .catch(err => {
        if (err.response && err.response.data) {
          setServerResponseType('danger')
          setServerResponse(err.response.data.message)
        }
      })
      .then(() => {
        setIsLoading(null)
      })
  }
  function showLabel(lableName) {
    const label = document.querySelector(`.${lableName}`)
    label.style.display = 'block'
  }
  function hideLabel(lableName, name) {
    const input = document.querySelector(`input[name='${name}']`)
    const label = document.querySelector(`.${lableName}`)
    if (!input.value) {
      label.style.display = 'none'
    }
  }
  function checkInput(lableName, name) {
    const input = document.querySelector(`input[name='${name}']`)
    const label = document.querySelector(`.${lableName}`)
    if (input.value) {
      label.style.display = 'block'
    } else {
      label.style.display = 'none'
    }
  }

  return (
    <div className="form2">
      <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
        <div className="name">
          <p className="name-text">Name</p>
          <input
            type="text"
            name="name"
            value={name}
            required
            placeholder="Whats your name?"
            onFocus={() => {
              showLabel('name-text')
            }}
            onBlur={() => {
              hideLabel('name-text', 'name')
            }}
            onInput={() => {
              checkInput('name-text', 'name')
            }}
            onChange={event => {
              setName(event.target.value)
            }}
          />
        </div>
        <div className="Email">
          <p className="email-text">Email</p>
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Your Fancy email"
            onFocus={() => {
              showLabel('email-text')
            }}
            onBlur={() => {
              hideLabel('email-text', 'email')
            }}
            onInput={() => {
              checkInput('email-text', 'email')
            }}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className="Reigon">
          <p className="reigon-text">Reigon</p>
          <input
            type="text"
            name="reigon"
            value={country}
            required
            placeholder="Country / Region"
            onFocus={() => {
              showLabel('reigon-text')
            }}
            onBlur={() => {
              hideLabel('reigon-text', 'reigon')
            }}
            onInput={() => {
              checkInput('reigon-text', 'reigon')
            }}
            onChange={event => {
              setCountry(event.target.value)
            }}
          />
        </div>
        <div className="Reigon">
          <p className="message-text">Your Message</p>
          <input
            type="message"
            name="message"
            value={message}
            required
            placeholder="Tell us about your project and goals."
            onFocus={() => {
              showLabel('message-text')
            }}
            onBlur={() => {
              hideLabel('message-text', 'message')
            }}
            onInput={() => {
              checkInput('message-text', 'message')
            }}
            onChange={event => {
              setMessage(event.target.value)
            }}
          />
        </div>
        {/* <div className="addAtachment">
          <img src="/Attachment.png" />
          <h6>Add Attachments</h6>
        </div> */}
        <div>
          <div className="contact-link-container mobile-b mt-5 pt2 ">
            <div className="black" />
            <button href="#" type="submit" disabled={isLoading}>
              Submit
              <Image
                className="ml-3"
                src="/Arrow.png"
                width={14}
                height={10}
                alt="arrow"
              />
            </button>
          </div>
          <div className="col-sm-12 mt-2">
            <ResponseAlert type={serverResponseType} text={serverResponse} />
          </div>
        </div>
      </form>
    </div>
  )
}
export default Form2
