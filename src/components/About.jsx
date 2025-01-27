import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutSection = styled.section`
  min-height: 100vh;
  margin-top: -6rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 
    0 1px 1px rgba(0,0,0,0.034),
    0 2px 2px rgba(0,0,0,0.048),
    0 4px 4px rgba(0,0,0,0.06),
    0 8px 8px rgba(0,0,0,0.072);
  position: relative;
  
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

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 1rem;
`

const CardContent = styled.p`
  color: #6b7280;
  line-height: 1.6;
`

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <ContentGrid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <CardTitle>Background</CardTitle>
            <CardContent>
              With over 5 years of experience in web development, I've worked on various projects
              ranging from small business websites to large-scale enterprise applications.
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <CardTitle>Approach</CardTitle>
            <CardContent>
              I believe in creating intuitive, user-friendly interfaces that not only look beautiful
              but also provide exceptional user experiences through clean, efficient code.
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <CardTitle>Goals</CardTitle>
            <CardContent>
              My goal is to continue pushing the boundaries of web development, learning new
              technologies, and creating impactful solutions that make a difference.
            </CardContent>
          </Card>
        </ContentGrid>
      </Container>
    </AboutSection>
  )
}

export default About
