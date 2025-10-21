'use client'

import { motion } from 'framer-motion'

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in all our operations, ensuring every agent embodies professionalism and expertise.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'Our commitment to ethical conduct and transparency guides every decision we make in service of Los Santos.',
      icon: '🎖️'
    },
    {
      title: 'Justice',
      description: 'We are dedicated to upholding the law and ensuring fair treatment for all citizens of our great city.',
      icon: '⚖️'
    },
    {
      title: 'Innovation',
      description: 'Utilizing cutting-edge technology and tactics to stay ahead of criminal organizations.',
      icon: '💡'
    }
  ]

  const stats = [
    { number: '500+', label: 'Active Agents' },
    { number: '24/7', label: 'Operations' },
    { number: '98%', label: 'Case Success Rate' },
    { number: '15+', label: 'Years of Service' }
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
            About FIB
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Federal Investigation Bureau is the premier law enforcement agency in Los Santos, 
            dedicated to protecting citizens and maintaining order through intelligence-driven operations.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gradient-to-br from-fib-blue to-fib-accent p-6 rounded-xl text-center border border-fib-gold/20 hover:border-fib-gold/50 transition-all duration-300"
            >
              <div className="text-4xl font-heading font-bold text-fib-gold mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-fib-accent/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-fib-gold/30"
        >
          <h2 className="text-4xl font-heading font-bold mb-6 text-fib-gold">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The FIB stands as the cornerstone of federal law enforcement in Los Santos and the surrounding territories. 
            Our mission is multifaceted: we investigate and prevent organized crime, conduct intelligence operations, 
            and work tirelessly to ensure the safety and security of all citizens.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Through cutting-edge technology, rigorous training, and unwavering dedication, we maintain the highest 
            standards of professionalism in the face of evolving threats. Every agent of the FIB embodies our core 
            values and works as part of an elite team committed to justice.
          </p>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-fib-gold">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group bg-gradient-to-br from-fib-accent/50 to-fib-blue/50 p-8 rounded-xl border border-fib-gold/20 hover:border-fib-gold/60 transition-all duration-300"
              >
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* History Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-fib-blue to-fib-accent rounded-2xl p-8 md:p-12 border border-fib-gold/30"
        >
          <h2 className="text-4xl font-heading font-bold mb-6 text-fib-gold">Our History</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Established over 15 years ago, the FIB was created in response to the growing need for a specialized 
            federal law enforcement agency capable of tackling complex criminal enterprises operating across Los Santos.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            From our humble beginnings with a small team of dedicated agents, we have grown into a sophisticated 
            organization with state-of-the-art facilities, advanced investigative capabilities, and a reputation 
            for excellence that is recognized throughout the region. Today, we continue to adapt and evolve, 
            staying ahead of emerging threats while maintaining our commitment to protecting the citizens we serve.
          </p>
        </motion.section>
      </div>
    </main>
  )
}

