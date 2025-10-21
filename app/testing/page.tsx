'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type TestCategory = 'background-check' | 'psych-eval' | 'field-test'

interface FormData {
  name: string
  subject: string
  message: string
  category: TestCategory
}

export default function Testing() {
  const [selectedCategory, setSelectedCategory] = useState<TestCategory | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    message: '',
    category: 'background-check'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const categories = [
    {
      id: 'background-check' as TestCategory,
      title: 'Background Check',
      icon: '📋',
      description: 'Submit your information for a comprehensive background investigation',
      color: 'from-fib-blue to-fib-accent'
    },
    {
      id: 'psych-eval' as TestCategory,
      title: 'Psychological Evaluation',
      icon: '🧠',
      description: 'Request a psychological assessment for field readiness',
      color: 'from-fib-accent to-fib-blue'
    },
    {
      id: 'field-test' as TestCategory,
      title: 'Field Test Application',
      icon: '🎯',
      description: 'Apply for practical field examination and skills assessment',
      color: 'from-fib-gold/30 to-fib-accent'
    }
  ]

  const handleCategorySelect = (categoryId: TestCategory) => {
    setSelectedCategory(categoryId)
    setFormData({ ...formData, category: categoryId })
    setSubmitStatus('idle')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: categories.find(cat => cat.id === formData.category)?.title,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', subject: '', message: '', category: formData.category })
        
        setTimeout(() => {
          setSubmitStatus('idle')
          setSelectedCategory(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Testing & Evaluation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Select your test category and submit your application. 
            Our team will review and respond within 24-48 hours.
          </p>
        </motion.div>

        {/* Category Selection */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategorySelect(category.id)}
                className={`group bg-gradient-to-br ${category.color} p-8 rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-fib-gold/20 hover:border-fib-gold`}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="text-6xl mb-4 inline-block"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-200">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Form Section */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-fib-accent/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-fib-gold/30 shadow-2xl"
          >
            {/* Selected Category Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">
                  {categories.find(cat => cat.id === selectedCategory)?.icon}
                </span>
                <div>
                  <h2 className="text-3xl font-heading font-bold text-fib-gold">
                    {categories.find(cat => cat.id === selectedCategory)?.title}
                  </h2>
                  <p className="text-gray-300">
                    Complete the form below to submit your application
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCategory(null)}
                className="text-gray-400 hover:text-fib-gold transition-colors text-xl font-bold"
              >
                ✕
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-fib-blue/50 border border-fib-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fib-gold focus:ring-2 focus:ring-fib-gold/50 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-fib-blue/50 border border-fib-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fib-gold focus:ring-2 focus:ring-fib-gold/50 transition-all"
                  placeholder="Brief subject of your application"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-fib-blue/50 border border-fib-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fib-gold focus:ring-2 focus:ring-fib-gold/50 transition-all resize-none"
                  placeholder="Provide detailed information about your application..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? undefined : "0 10px 40px rgba(212, 175, 55, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-fib-gold to-fib-gold-light text-fib-darker hover:shadow-fib-gold/50'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Application'}
              </motion.button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-300 text-center"
              >
                ✓ Application submitted successfully! We'll be in touch soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-600/20 border border-red-500 rounded-lg text-red-300 text-center"
              >
                ✗ Error submitting application. Please try again.
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-gray-400"
        >
          <p className="text-sm">
            All applications are confidential and will be reviewed by authorized FIB personnel only.
          </p>
        </motion.div>
      </div>
    </main>
  )
}

