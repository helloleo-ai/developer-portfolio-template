import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem;
  width: 90%;
  max-width: 600px;
  display: flex;
  gap: 2rem;
  align-items: center;
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
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Avatar = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  flex-shrink: 0;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 1rem;
`

const Description = styled.p`
  color: #6b7280;
  line-height: 1.6;
`

const Hero = () => {
  return (
    <HeroSection>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <Avatar 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <ContentWrapper>
          <Title>John Doe</Title>
          <Subtitle>Frontend Developer & UI Designer</Subtitle>
          <Description>
            Crafting beautiful and intuitive user experiences with modern web technologies.
            Passionate about clean code and pixel-perfect designs.
          </Description>
        </ContentWrapper>
      </Card>
    </HeroSection>
  )
}

export default Hero
