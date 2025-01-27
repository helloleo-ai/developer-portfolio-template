import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  position: relative;
  overflow: hidden;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    padding: 2px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  margin-bottom: 1rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ProjectDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
`

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool built with React and Redux",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard with real-time data visualization",
  }
]

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <ProjectImage 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Project
            </Button>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects
