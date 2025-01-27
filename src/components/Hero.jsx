import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = styled.section`
  min-height: 100vh;
  padding-bottom: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  position: relative;
  z-index: 1;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: clamp(1.5rem, 5vw, 3rem);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  gap: clamp(1rem, 3vw, 2rem);
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

const Avatar = styled(motion.img)`
  width: clamp(80px, 15vw, 120px);
  height: clamp(80px, 15vw, 120px);
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: clamp(0.3rem, 2vw, 0.5rem);
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #4b5563;
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
`

const Description = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  margin-bottom: 1.5rem;
`

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <HeroSection id="hero">
      <Card
        isMobile={isMobile}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <Avatar 
          src="https://helloleo.dev/wp-content/uploads/brizy/imgs/cropped-Leo-542x542x10x0x520x542x1720683236.png"
          alt="Profile"
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
          <CTAButton
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ 
              y: -2,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ 
              y: 0,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            Get in Touch
          </CTAButton>
        </ContentWrapper>
      </Card>
    </HeroSection>
  )
}

export default Hero
