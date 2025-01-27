import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  isolation: isolate;
`

const App = () => {
  return (
    <AppContainer>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppContainer>
  )
}

export default App
