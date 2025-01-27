import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const VideoSection = styled.section`
  min-height: 60vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e3e6e8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const VideoContainer = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 1px 1px rgba(0,0,0,0.034),
    0 2px 2px rgba(0,0,0,0.048),
    0 4px 4px rgba(0,0,0,0.06),
    0 8px 8px rgba(0,0,0,0.072);
  
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

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`

const Video = () => {
  return (
    <VideoSection>
      <VideoContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <VideoPlaceholder>
          Demo Video Coming Soon
        </VideoPlaceholder>
      </VideoContainer>
    </VideoSection>
  )
}

export default Video
