import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaNode } from 'react-icons/fa'
import BackgroundPattern from './BackgroundPattern'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 
    inset 0 2px 4px 0 rgba(255, 255, 255, 0.9),
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
`

const SkillIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  box-shadow:
    -8px -4px 8px rgba(255, 255, 255, 0.9),
    8px 4px 12px rgba(0, 0, 0, 0.1),
    4px 4px 4px rgba(0, 0, 0, 0.1) inset,
    -4px -4px 4px rgba(255, 255, 255, 0.9) inset;
  color: #6366f1;
`

const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #4b5563;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
`

const skillsData = [
  { id: 1, name: 'React', icon: FaReact, level: 90 },
  { id: 2, name: 'JavaScript', icon: FaJs, level: 85 },
  { id: 3, name: 'HTML5', icon: FaHtml5, level: 95 },
  { id: 4, name: 'CSS3', icon: FaCss3, level: 85 },
  { id: 5, name: 'Git', icon: FaGitAlt, level: 80 },
  { id: 6, name: 'Node.js', icon: FaNode, level: 75 },
]

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <BackgroundPattern startColor="#6366f108" endColor="#8b5cf608" />
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <SkillIcon
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <skill.icon />
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <ProgressBarContainer>
                <ProgressBar
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </ProgressBarContainer>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}

export default Skills
