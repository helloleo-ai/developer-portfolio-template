import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const AppContainer = styled.div`
  min-height: 100vh;
`

const App = () => {
  return (
    <AppContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppContainer>
  )
}

export default App
