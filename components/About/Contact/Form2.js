import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Form2 = () => {
  function showLabel(lableName) {
    const label = document.querySelector(`.${lableName}`)
    label.style.opacity = 1
  }
  function hideLabel(lableName, name) {
    const input = document.querySelector(`input[name='${name}']`)
    const label = document.querySelector(`.${lableName}`)
    if (!input.value) {
      label.style.opacity = 0
    }
  }
  function checkInput(lableName, name) {
    const input = document.querySelector(`input[name='${name}']`)
    const label = document.querySelector(`.${lableName}`)
    if (input.value) {
      label.style.opacity = 1
    } else {
      label.style.opacity = 0
    }
  }
  return (
    <div className="form2">
      <form
        action="#"
        method="post"
        id="contactForm"
        name="contactForm"
        className="row"
      >
        <div className="col-lg-6">
          <div className="name">
            <p className="name-text">Name</p>
            <input
              type="text"
              name="name"
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
            />
          </div>{' '}
        </div>
        <div className="col-lg-6">
          <div className="Email">
            <p className="email-text">Email</p>
            <input
              type="email"
              name="email"
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
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="Reigon">
            <p className="reigon-text">Reigon</p>
            <input
              type="text"
              name="reigon"
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
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="Reigon">
            <p className="message-text">Your Message</p>
            <input
              type="message"
              name="message"
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
            />
          </div>
        </div>
        {/* <div className="addAtachment">
          <img src="/Attachment.png" />
          <h6>Add Attachments</h6>
        </div> */}
        <div>
          <div className="contact-link-container mobile-b mt-5 pt2 ">
            <div className="black" />
            <Link href="#">
              Submit
              <Image
                className="ml-3"
                src="/Arrow.png"
                width={14}
                height={10}
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Form2
