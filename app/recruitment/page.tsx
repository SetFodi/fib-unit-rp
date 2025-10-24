'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Recruitment() {
  const leadership = [
    {
      name: 'Pusho Tergdaleuli',
      georgianName: 'Pusho Tergdaleuli',
      title: 'Deputy Director',
      georgianTitle: 'დირექტორის მოადგილე',
      image: '/DD1.png'
    },
    {
      name: 'Rezo Tergdaleuli',
      georgianName: 'Rezo Tergdaleuli',
      title: 'Director',
      georgianTitle: 'დირექტორი',
      image: '/director.png'
    },
    {
      name: 'Nutsa Tergdaleuli',
      georgianName: 'Nutsa Tergdaleuli',
      title: 'Deputy Director',
      georgianTitle: 'დირექტორის მოადგილე',
      image: '/DD2.png'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-fib-dark via-fib-accent to-fib-dark pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-georgian font-bold mb-6 bg-gradient-to-r from-fib-gold to-fib-gold-light bg-clip-text text-transparent leading-tight pb-2">
            ხელმძღვანელობა
          </h1>
          <p className="text-xl font-georgian text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ფედერალური საგამოძიებო ბიუროს ხელმძღვანელობა
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative rounded-2xl border-2 border-fib-gold/30 hover:border-fib-gold overflow-hidden shadow-2xl hover:shadow-fib-gold/30 transition-all duration-300 h-[600px]">
                {/* Image */}
                <div className="relative w-full h-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`w-full h-full object-cover ${
                      index === 1 ? 'object-[55%_top]' : // Director - shift right
                      index === 2 ? 'scale-150 object-top' : // DD2 - zoom in and align head
                      'object-top' // DD1 - default
                    }`}
                    style={index === 2 ? { objectPosition: 'center -50px' } : undefined}
                  />
                  
                  {/* Name Overlay (Always visible) - Much lighter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fib-darker/80 via-transparent to-transparent flex items-end justify-center pb-12">
                    <div className="text-center">
                      {/* Golden line above name */}
                      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-fib-gold to-transparent mx-auto mb-6" />
                      
                      {/* Name */}
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-fib-gold mb-3 tracking-wide drop-shadow-lg">
                        {leader.name}
                      </h3>
                      
                      {/* Title */}
                      <div>
                        <p className="text-sm font-heading text-fib-gold-light uppercase tracking-widest mb-1">
                          {leader.title}
                        </p>
                        <p className="text-base font-georgian text-gray-200">
                          {leader.georgianTitle}
                        </p>
                      </div>
                      
                      {/* Golden line below */}
                      <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-fib-gold/50 to-transparent mx-auto mt-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

