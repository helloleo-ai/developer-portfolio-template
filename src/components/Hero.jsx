import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--secondary-color);
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>John Doe</Title>
        <Subtitle>Frontend Developer & UI Designer</Subtitle>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
