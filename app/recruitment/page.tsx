'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, BarChart3, Crosshair, Monitor } from 'lucide-react'

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
      icon: Search
    },
    {
      title: 'Intelligence Analyst',
      description: 'Analyze data, identify threats, and provide strategic intelligence to operations teams.',
      icon: BarChart3
    },
    {
      title: 'Tactical Specialist',
      description: 'Lead high-risk operations and provide tactical expertise in critical situations.',
      icon: Crosshair
    },
    {
      title: 'Cyber Security Expert',
      description: 'Protect FIB systems and investigate cyber crimes affecting Los Santos.',
      icon: Monitor
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
            ხელმძღვანელობა
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
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="mb-4 inline-block"
                >
                  <position.icon className="w-12 h-12 text-fib-gold" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300">{position.title}</h3>
                <p className="text-gray-300">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>





      </div>
    </main>
  )
}

