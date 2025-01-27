import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 0 5vw 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 5vh;
  }
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: clamp(1.5rem, 5vw, 3rem);
  width: 100%;
  max-width: 500px;
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
const PreviewSection = styled.div`
  flex: 1;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const PreviewCard = styled(motion.a)`
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.2rem;
    color: #4b5563;
  }
  
  p {
    font-size: 0.9rem;
    color: #6b7280;
  }

  &:hover {
    transform: translateY(-2px);
  }
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

  const previewSections = [
    {
      title: "Projects",
      description: "Check out my latest work and side projects",
      href: "#projects"
    },
    {
      title: "Skills",
      description: "Technologies and tools I work with",
      href: "#skills"
    },
    {
      title: "About",
      description: "Learn more about my journey and experience",
      href: "#about"
    },
    {
      title: "Contact",
      description: "Let's connect and discuss opportunities",
      href: "#contact"
    }
  ]

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
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
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
      
      <PreviewSection>
        {previewSections.map((section, index) => (
          <PreviewCard
            key={section.title}
            href={section.href}
            as={motion.a}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(section.href);
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </PreviewCard>
        ))}
      </PreviewSection>
    </HeroSection>
  )
}

export default Hero
