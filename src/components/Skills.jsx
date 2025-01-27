import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
`

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </SkillsSection>
  )
}

export default Skills
