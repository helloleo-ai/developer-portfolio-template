import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
`

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <p>Get in touch with me.</p>
    </ContactSection>
  )
}

export default Contact
