import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
`

const MenuButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const MenuIcon = styled.div.attrs(props => ({
  'data-isopen': props.isOpen
}))`
  width: 20px;
  height: 2px;
  background: #6366f1;
  position: relative;
  transform: ${props => props['data-isopen'] ? 'rotate(45deg)' : 'none'};
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #6366f1;
    transition: transform 0.3s ease;
  }

  &::before {
    top: ${props => props['data-isopen'] ? '0' : '-6px'};
    transform: ${props => props['data-isopen'] ? 'rotate(90deg)' : 'none'};
  }

  &::after {
    bottom: ${props => props['data-isopen'] ? '0' : '-6px'};
    opacity: ${props => props['data-isopen'] ? '0' : '1'};
  }
`

const MenuItems = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
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

const MenuItem = styled(motion.a)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
  }
`

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'Home', href: '#hero' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ]

  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <Nav>
      <MenuButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon isOpen={isOpen} />
      </MenuButton>
      <AnimatePresence>
        {isOpen && (
          <MenuItems
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.title}
                href={item.href}
                onClick={handleClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {item.title}
              </MenuItem>
            ))}
          </MenuItems>
        )}
      </AnimatePresence>
    </Nav>
  )
}

export default Navigation
