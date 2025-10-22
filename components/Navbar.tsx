'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.95)']
  )

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'მთავარი', path: '/' },
    { name: 'შესახებ', path: '/about' },
    { name: 'ხელმძღვანელობა', path: '/recruitment' },
    { name: 'ვაკანსიები', path: '/testing' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg border-b border-fib-gold/20 shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-fib-gold/50">
                <Image 
                  src="/fib.png" 
                  alt="FIB Logo" 
                  width={48}
                  height={48}
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-fib-gold hidden md:block tracking-wider">
                Federal Investigation Bureau
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2"
                  >
                    <span className={`text-base font-medium transition-colors ${
                      isActive ? 'text-fib-gold' : 'text-gray-300 hover:text-fib-gold'
                    }`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-fib-gold"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile Hamburger Button - Only show when menu is closed */}
          {!isMobileMenuOpen && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 bg-fib-accent/50 rounded-lg border border-fib-gold/30 z-[60]"
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-fib-gold rounded-full" />
              <span className="block w-6 h-0.5 bg-fib-gold rounded-full" />
              <span className="block w-6 h-0.5 bg-fib-gold rounded-full" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-br from-fib-dark via-fib-accent to-fib-blue border-l-2 border-fib-gold/40 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* Close button at top */}
              <div className="sticky top-0 bg-fib-darker/95 backdrop-blur-lg border-b border-fib-gold/20 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image 
                    src="/fib.png" 
                    alt="FIB Logo" 
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-fib-gold font-bold text-sm">FIB</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-fib-accent/50 rounded-lg border border-fib-gold/30 hover:bg-fib-accent transition-colors"
                >
                  <svg className="w-6 h-6 text-fib-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col h-full pt-8 pb-8 px-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path
                    return (
                      <Link key={item.path} href={item.path}>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`relative py-4 px-4 rounded-lg transition-all ${
                            isActive 
                              ? 'bg-fib-gold/20 border-l-4 border-fib-gold' 
                              : 'bg-fib-accent/30 border-l-4 border-transparent hover:border-fib-gold/50'
                          }`}
                        >
                          <span className={`text-lg font-medium leading-loose ${
                            isActive ? 'text-fib-gold' : 'text-gray-200'
                          }`}>
                            {item.name}
                          </span>
                        </motion.div>
                      </Link>
                    )
                  })}
                </nav>

                {/* Discord link at bottom */}
                <div className="mt-auto pt-8 border-t border-fib-gold/20">
                  <a 
                    href="https://discord.gg/wgWwQEnHJ7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-[#5865F2] hover:bg-[#4752C4] p-4 rounded-lg transition-all shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span className="text-white font-medium leading-loose">Discord-ზე გაწევრიანება</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

