import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    0 1px 1px rgba(0,0,0,0.034),
    0 2px 2px rgba(0,0,0,0.048),
    0 4px 4px rgba(0,0,0,0.06),
    0 8px 8px rgba(0,0,0,0.072);
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputWrapper = styled.div`
  position: relative;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  background: #e5e7eb;
  color: #1f2937;
  font-size: 1rem;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 
      inset 0 2px 4px rgba(0, 0, 0, 0.1),
      inset 0 2px 6px rgba(0, 0, 0, 0.05),
      0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Get in Touch</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <SubmitButton
            type="submit"
            whileHover={{ 
              y: -2,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ 
              y: 0,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </Container>
    </ContactSection>
  )
}

export default Contact
