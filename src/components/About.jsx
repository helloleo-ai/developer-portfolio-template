import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
`

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>A passionate developer building amazing things.</p>
    </AboutSection>
  )
}

export default About
