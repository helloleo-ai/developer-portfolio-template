import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Video from './components/Video'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`

const App = () => {
  return (
    <AppContainer>
      <Navigation />
      <Hero />
      <Video />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppContainer>
  )
}

export default App
