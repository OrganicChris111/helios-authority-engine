import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin, Clock, Send, ChevronDown, ChevronUp,
  Calendar, MessageSquare, ArrowRight, CheckCircle2, Zap
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import { faqData } from '../data/demoData'

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-helios-border last:border-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-sm font-medium text-helios-text pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-helios-textMuted shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-helios-textMuted leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    plan: 'growth',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="section-padding">
        {/* Hero */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              Let's Build{' '}
              <span className="text-gradient-gold">Authority Together</span>
            </h1>
            <p className="text-lg text-helios-textMuted leading-relaxed">
              Ready to transform your digital authority? Book a demo, ask a question, 
              or just say hello. Our team is here to help.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="bg-helios-surface border border-helios-border rounded-xl p-6 lg:p-8">
                <h2 className="text-xl font-bold text-helios-text mb-6">Send us a message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="p-4 rounded-full bg-helios-success/10 mb-4">
                      <CheckCircle2 className="w-8 h-8 text-helios-success" />
                    </div>
                    <h3 className="text-lg font-semibold text-helios-text mb-2">Message Sent!</h3>
                    <p className="text-sm text-helios-textMuted">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Company</label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Website</label>
                        <input
                          type="url"
                          value={formState.website}
                          onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                          className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50 transition-colors"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Interested In</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['foundation', 'growth', 'authority'].map((plan) => (
                          <button
                            key={plan}
                            type="button"
                            onClick={() => setFormState({ ...formState, plan })}
                            className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-all ${
                              formState.plan === plan
                                ? 'bg-helios-gold/10 border-helios-gold/50 text-helios-gold'
                                : 'bg-helios-bg/50 border-helios-border text-helios-textMuted hover:text-helios-text'
                            }`}
                          >
                            {plan.charAt(0).toUpperCase() + plan.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-helios-textMuted uppercase mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50 transition-colors resize-none"
                        placeholder="Tell us about your authority goals..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-helios-surface border border-helios-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-helios-text mb-4">Book a Demo</h3>
                <p className="text-sm text-helios-textMuted mb-6">
                  See Helios in action with a personalized walkthrough tailored to your authority goals.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-helios-text">
                    <Clock className="w-4 h-4 text-helios-gold" />
                    <span>30-minute call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-helios-text">
                    <MessageSquare className="w-4 h-4 text-helios-gold" />
                    <span>Live platform demo</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-helios-text">
                    <Zap className="w-4 h-4 text-helios-gold" />
                    <span>Custom strategy review</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Demo
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-helios-surface border border-helios-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-helios-text mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-helios-gold mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-helios-text">Email</div>
                      <a href="mailto:hello@helios.engine" className="text-sm text-helios-textMuted hover:text-helios-gold transition-colors">
                        hello@helios.engine
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-helios-gold mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-helios-text">Phone</div>
                      <a href="tel:+1-555-HELIOS" className="text-sm text-helios-textMuted hover:text-helios-gold transition-colors">
                        +1 (555) 435-4467
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-helios-gold mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-helios-text">Location</div>
                      <span className="text-sm text-helios-textMuted">
                        San Francisco, CA<br />
                        London, UK
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about Helios and how it works."
          />

          <AnimatedSection>
            <div className="bg-helios-surface border border-helios-border rounded-xl px-6">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Final CTA */}
        <AnimatedSection>
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold text-helios-text mb-4">
              Still have questions?
            </h2>
            <p className="text-helios-textMuted mb-6">
              Our team is ready to help you understand how Helios can transform your authority strategy.
            </p>
            <a href="mailto:hello@helios.engine" className="btn-primary inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Us Directly
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
