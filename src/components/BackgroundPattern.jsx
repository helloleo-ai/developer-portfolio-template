import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PatternContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`

const Shape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, #6366f120, #8b5cf620);
  border-radius: 50%;
`

const BackgroundPattern = () => {
  const shapes = Array.from({ length: 8 }).map((_, i) => ({
    size: Math.random() * 300 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }))

  return (
    <PatternContainer>
      {shapes.map((shape, i) => (
        <Shape
          key={i}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </PatternContainer>
  )
}

export default BackgroundPattern
