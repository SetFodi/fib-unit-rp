'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const operations = [
    {
      title: "სპეცოპერაციები",
      description: "ჩვენი აგენტები ყოველდღიურად პატრულირებენ, ატარებენ გამოძიებებს, აგროვებენ ინფორმაციას და რეაგირებენ საგანგებო სიტუაციებზე.",
      image: "/1.png"
    },
    {
      title: "შტაბი",
      description: "ოპერაციების კოორდინირებისთვის და ინფორმაციის ანალიზისთვის აუცილებელი უახლესი ტექნოლოგიით დაკომპლოქტებული დაწესებულება.",
      image: "/2.png"
    },
    {
      title: "სწრაფი რეაგირება",
      description: "საგანგებო სიტუაციების და მაღალი რისკის შემცველი ოპერაციებისთვის მუდმივ მზაობაში მყოფი ელიტური დანაყოფი.",
      image: "/3.png"
    },
    {
      title: "სამხილი და კრიმინალისტიკა",
      description: "სამხილების ანალიზისთვის და დაკითხვების ჩატარებისთვის პასუხისმგებელი სპეციალური დანაყოფი.",
      image: "/4.png"
    }
  ]

  return (
    <main className="bg-fib-dark min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={containerRef}
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fib-blue via-fib-dark to-fib-darker opacity-95" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 15,
              duration: 1.2 
            }}
            className="mb-12"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Outer glow layers */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 blur-3xl bg-gradient-radial from-fib-gold/40 via-fib-gold/20 to-transparent rounded-full"
                style={{
                  transform: 'translate(-10%, -10%)',
                  width: '120%',
                  height: '120%'
                }}
              />
              <motion.div
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 blur-2xl bg-gradient-radial from-fib-gold/50 via-fib-gold/25 to-transparent rounded-full"
                style={{
                  transform: 'translate(-5%, -5%)',
                  width: '110%',
                  height: '110%'
                }}
              />
              
              {/* Logo */}
              <motion.div
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))",
                    "drop-shadow(0 0 40px rgba(212, 175, 55, 0.9))",
                    "drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image 
                  src="/fib.png" 
                  alt="FIB Logo" 
                  width={288}
                  height={288}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-8xl md:text-9xl font-heading font-bold mb-6 bg-gradient-to-r from-fib-gold via-fib-gold-light to-fib-gold bg-clip-text text-transparent tracking-wider"
            style={{ letterSpacing: '0.1em' }}
          >
            FIB
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-4xl font-heading text-gray-200 mb-6 tracking-wide"
          >
            Federal Investigation Bureau
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center justify-center gap-4 text-lg md:text-xl text-fib-gold font-medium"
          >
            <span>პროფესიონალიზმი</span>
            <span className="text-fib-gold/50">•</span>
            <span>ერთიანობა</span>
            <span className="text-fib-gold/50">•</span>
            <span>სამართალი</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-fib-gold text-4xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Operations Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-fib-dark via-fib-accent to-fib-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-fib-gold to-fib-gold-light bg-clip-text text-transparent">
              ჩვენი მიზანი
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
             ლოს სანტოსის უსაფრთსოების უზრუნველყოფა და მუდმივი ბრძოლა სამართლიანობისთვის.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operations.map((operation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-gradient-to-br from-fib-accent/30 to-fib-blue/30 rounded-xl border border-fib-gold/20 hover:border-fib-gold/60 transition-all duration-300 cursor-pointer backdrop-blur-sm overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={operation.image} 
                    alt={operation.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? 'object-top' : ''}`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fib-dark via-fib-dark/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300">
                    {operation.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {operation.description}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-fib-gold/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 bg-gradient-to-t from-fib-blue to-fib-dark">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-fib-gold">
            შემოუერთდით ჩვენს ელიტარულ გუნდს
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            ჩვენ ვეძებთ მოტივირებულ და დისციპლინირებულ ინდივიდებს, რომლებიც მზად არიან ემსახურონ და დაიცვან ლოს სანტოსი 
          </p>
          <motion.a
            href="/recruitment"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(212, 175, 55, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-fib-gold to-fib-gold-light text-fib-darker px-10 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 shadow-lg"
          >
            შემოგვიერთდი
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}


