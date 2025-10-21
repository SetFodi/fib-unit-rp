'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Recruitment() {
  const requirements = [
    {
      title: 'Age & Citizenship',
      items: ['Minimum 21 years of age', 'Valid Los Santos citizenship', 'Clean criminal record']
    },
    {
      title: 'Education',
      items: ['High school diploma or equivalent', 'Bachelor\'s degree preferred', 'Specialized training certifications']
    },
    {
      title: 'Physical Fitness',
      items: ['Pass rigorous physical examination', 'Maintain fitness standards', 'Complete tactical training']
    },
    {
      title: 'Background',
      items: ['Comprehensive background check', 'Drug screening', 'Psychological evaluation']
    }
  ]

  const positions = [
    {
      title: 'Field Agent',
      description: 'Conduct investigations, gather intelligence, and execute operations in the field.',
      icon: '🕵️'
    },
    {
      title: 'Intelligence Analyst',
      description: 'Analyze data, identify threats, and provide strategic intelligence to operations teams.',
      icon: '📊'
    },
    {
      title: 'Tactical Specialist',
      description: 'Lead high-risk operations and provide tactical expertise in critical situations.',
      icon: '⚔️'
    },
    {
      title: 'Cyber Security Expert',
      description: 'Protect FIB systems and investigate cyber crimes affecting Los Santos.',
      icon: '💻'
    }
  ]

  const process = [
    { step: 1, title: 'Application', description: 'Submit your initial application through our testing portal' },
    { step: 2, title: 'Screening', description: 'Background check and initial document verification' },
    { step: 3, title: 'Testing', description: 'Physical, psychological, and skills assessments' },
    { step: 4, title: 'Interview', description: 'Panel interview with senior FIB officials' },
    { step: 5, title: 'Training', description: '12-week intensive training program at FIB Academy' },
    { step: 6, title: 'Deployment', description: 'Assignment to field office and begin service' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-fib-dark via-fib-accent to-fib-dark pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-fib-gold to-fib-gold-light bg-clip-text text-transparent">
            Join the FIB
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Are you ready to serve Los Santos as part of an elite team? 
            Discover what it takes to become an FIB agent.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-10 text-center text-fib-gold">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group bg-gradient-to-br from-fib-accent/50 to-fib-blue/50 p-6 rounded-xl border border-fib-gold/20 hover:border-fib-gold/60 transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {position.icon}
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300">{position.title}</h3>
                <p className="text-gray-300">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Requirements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-10 text-center text-fib-gold">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-fib-accent/50 backdrop-blur-lg p-6 rounded-xl border border-fib-gold/30 hover:border-fib-gold/50 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-fib-gold">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.15) + (i * 0.1), duration: 0.4 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-fib-gold mr-2">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recruitment Process */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-10 text-center text-fib-gold">Recruitment Process</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fib-gold/30" />
            
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="bg-gradient-to-br from-fib-accent/50 to-fib-blue/50 p-6 rounded-xl border border-fib-gold/30 hover:border-fib-gold/60 transition-all duration-300"
                  >
                    <h3 className="text-xl font-heading font-bold mb-2 text-fib-gold">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>

                {/* Circle Indicator */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-fib-gold to-fib-gold-light rounded-full items-center justify-center text-fib-darker font-heading font-bold text-lg z-10 shadow-lg">
                  {item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-fib-blue to-fib-accent rounded-2xl p-12 text-center border border-fib-gold/30"
        >
          <h2 className="text-4xl font-heading font-bold mb-6 text-fib-gold">Ready to Apply?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards joining an elite team dedicated to protecting Los Santos. 
            Submit your application through our testing portal.
          </p>
          <Link href="/testing">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(212, 175, 55, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-fib-gold to-fib-gold-light text-fib-darker px-10 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 shadow-lg"
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </main>
  )
}

