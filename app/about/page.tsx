'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Shield, Scale, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    
  ]

  const departments = [
    { 
      code: 'FA', 
      name: 'უნივერსალური აგენტები',
      description: 'აგენტები, რომლებსაც შეუძლიათ საჭიროების შემთხვევაში ნებისმიერ დანაყოფს დაეხმარონ.'
    },
    { 
      code: 'IB', 
      name: 'გენერალური ინსპექცია',
      description: 'შიდა ინსპექციის და ანტი კორუფციული დეპარტამენტის მუშაკები.'
    },
    { 
      code: 'HRT', 
      name: 'მძევლების სამაშველო ჯგუფი',
      description: 'ელიტური დანაყოფი, რომლებიც პასუხისმგებლები არიან საგანგებო სიტუაციებისა და მაღალი რისკის შემცველი საფრთხეების წარმართვაზე.'
    },
    { 
      code: 'CID', 
      name: 'სისხლის სამართლის გამოძიების განყოფილება',
      description: 'რთული სისხლის სამართლის საქმეების გამოძიება და დამნაშავეების პასუხისგებაში მიცემა.'
    }
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
            FIB-ის შესახებ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ფედერალური საგამოძიებო ბიურო ლოს სანტოსის წამყვანი სამართალდამცავი ორგანოა, რომელიც დაზვერვაზე დაფუძნებული ოპერაციების მეშვეობით მოქალაქეების დაცვასა და წესრიგის შენარჩუნებას ემსახურება.
          </p>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-10 text-center text-fib-gold">ჩვენი დანაყოფებები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
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
                className="group bg-gradient-to-br from-fib-blue to-fib-accent p-6 rounded-xl border border-fib-gold/20 hover:border-fib-gold/60 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="relative w-16 h-16 rounded-lg border-2 border-fib-gold transition-all duration-300 group/badge"
                    >
                      {/* Logo Image */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden opacity-100 group-hover/badge:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                        <Image 
                          src={`/${dept.code}.png`}
                          alt={dept.code}
                          width={60}
                          height={60}
                          className={`${
                            dept.code === 'FA' ? 'object-contain invert brightness-0 invert scale-75' : 
                            dept.code === 'HRT' ? 'object-contain scale-75' : 
                            dept.code === 'IB' ? 'object-cover w-full h-full' :
                            'object-contain'
                          }`}
                        />
                      </div>
                      
                      {/* Text */}
                      <div className="absolute inset-0 bg-fib-gold/20 group-hover/badge:bg-fib-gold/30 rounded-lg flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-all duration-300">
                        <span className="text-2xl font-heading font-bold text-fib-gold">{dept.code}</span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-fib-gold group-hover:text-fib-gold-light transition-colors duration-300 mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* History Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-fib-blue to-fib-accent rounded-2xl p-8 md:p-12 border border-fib-gold/30"
        >
          <h2 className="text-4xl font-heading font-bold mb-6 text-fib-gold">ჩვენი ისტორია</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
          2015 წელს LSPD-სა და IAA-ს შორის რამდენიმე ერთობლივი ოპერაციის ჩაშლის შემდეგ, სან ანდრეასის შტატის მთავრობამ გადაწყვიტა ფედერალური უსაფრთხოების სისტემის რეფორმირება. შედეგად, შეიქმნა ახალი სტრუქტურა - ფედერალური გამოძიების ბიურო (FIB), რომლის ამოცანაა წესრიგის აღდგენა, ორგანიზებული დანაშაულის წინააღმდეგ ბრძოლა და ეროვნული უსაფრთხოებისთვის საფრთხეების პრევენცია.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
          დაარსების პირველივე დღეებიდან FIB-მა თავი დაიმკვიდრა, როგორც ელიტური სააგენტო, რომელიც დისციპლინის, კონფიდენციალურობისა და ეფექტურობის პრინციპებით მოქმედებს. მისი დანაყოფები იძიებენ კორუფციას, კიბერდანაშაულს, ტერორიზმს და აკონტროლებენ ადგილობრივი სამართალდამცავი ორგანოების საქმიანობას.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
          დღეს FIB ფედერალური ხელისუფლებისა და წესრიგის სიმბოლოა, რომელიც იცავს სახელმწიფოს ინტერესებს და მოქალაქეების უსაფრთხოებას.
          </p>

          {/* Motto/Slogan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 p-6 border-l-4 border-fib-gold bg-fib-gold/5 rounded-r-lg"
          >
            <div className="flex items-start space-x-3">
              <span className="text-fib-gold text-3xl font-bold opacity-50">"</span>
              <div className="flex-1">
                <p className="text-xl md:text-2xl font-heading font-semibold text-fib-gold italic leading-relaxed">
                  ჩვენ ვხედავთ იმას, რაც დაფარულია. ჩვენ ვმოქმედებთ იქ, სადაც სხვებს ეშინიათ.
                </p>
              </div>
              <span className="text-fib-gold text-3xl font-bold opacity-50 self-end">"</span>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  )
}

