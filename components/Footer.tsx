'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface DiscordInvite {
  guild: {
    id: string
    name: string
    icon: string
    splash: string
  }
  approximate_member_count: number
  approximate_presence_count: number
}

export default function Footer() {
  const [discordData, setDiscordData] = useState<DiscordInvite | null>(null)
  const navLinks = [
    { name: 'მთავარი', path: '/' },
    { name: 'შესახებ', path: '/about' },
    { name: 'ხელმძღვანელობა', path: '/recruitment' },
    { name: 'ვაკანსიები', path: '/testing' },
  ]

  // Fetch Discord server data
  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch('https://discord.com/api/v10/invites/wgWwQEnHJ7?with_counts=true')
        const data = await response.json()
        setDiscordData(data)
      } catch (error) {
        console.error('Error fetching Discord data:', error)
      }
    }
    fetchDiscordData()
  }, [])

  return (
    <footer className="relative bg-gradient-to-b from-fib-dark to-fib-darker border-t border-fib-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/fib.png" 
                  alt="FIB Logo" 
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-fib-gold">FIB</h3>
                <p className="text-xs text-gray-400">Federal Investigation Bureau</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
            პროფესიონალიზმი • ერთიანობა • სამართალი
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-sm font-heading font-bold text-fib-gold mb-4 uppercase tracking-wider leading-relaxed pb-1">
              სწრაფი ბმულები
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <motion.span
                    whileHover={{ scale: 1.1, color: '#f4d03f' }}
                    className="text-gray-300 hover:text-fib-gold-light transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Discord Server Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-sm font-heading font-bold text-fib-gold mb-4 uppercase tracking-wider leading-relaxed pb-1">
              გაწევრიანდი აქაც!
            </h4>
            
            {/* Discord Server Invite Card */}
            <a 
              href="https://discord.gg/wgWwQEnHJ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(88, 101, 242, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2b2d31] hover:bg-[#313338] rounded-lg p-4 transition-all duration-300 border border-[#3f4147] hover:border-[#5865F2] max-w-sm"
              >
                <div className="flex items-center space-x-3">
                  {/* Server Icon - Real Discord server icon */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    {discordData?.guild?.icon ? (
                      <img
                        src={`https://cdn.discordapp.com/icons/${discordData.guild.id}/${discordData.guild.icon}.png?size=128`}
                        alt={discordData.guild.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#5865F2] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {discordData?.guild?.name?.charAt(0) || 'D'}
                      </div>
                    )}
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#23a559] rounded-full border-2 border-[#2b2d31]" />
                  </div>

                  {/* Server Info */}
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="text-white font-bold text-sm mb-1 leading-tight truncate">
                      {discordData?.guild?.name || 'Discord Server'}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-[#23a559]" />
                        <span className="text-[#b5bac1]">
                          {discordData?.approximate_presence_count || '...'} Online
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-[#80848e]" />
                        <span className="text-[#b5bac1]">
                          {discordData?.approximate_member_count || '...'} Members
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Discord Logo */}
                  <svg 
                    className="w-6 h-6 text-[#5865F2] flex-shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-fib-gold/30 to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Federal Investigation Bureau. All rights reserved.</p>
          <p className="mt-1 text-xs">UNIT RP | GTA 5</p>
        </motion.div>
      </div>
    </footer>
  )
}

