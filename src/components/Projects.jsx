import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
`

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <p>My projects will be displayed here.</p>
    </ProjectsSection>
  )
}

export default Projects
