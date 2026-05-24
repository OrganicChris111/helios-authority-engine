import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Target, Zap, Globe, TrendingUp, ArrowRight, Award,
  Users, Lightbulb, Shield, Heart
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import { teamMembers } from '../data/demoData'

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Authority First',
    description: 'We believe authority is the foundation of sustainable digital growth. Everything we build serves this mission.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'AI Native',
    description: 'AI is not a feature — it is the core of our platform. We build for an AI-first search future.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Trust & Transparency',
    description: 'We show you exactly how your authority is built. No black boxes, no mystery metrics.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Data Driven',
    description: 'Every decision is backed by data. We measure what matters and optimize relentlessly.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="section-padding">
        {/* Hero */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              About Helios
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-helios-text tracking-tight mb-6">
              Authority Is{' '}
              <span className="text-gradient-gold">The New SEO</span>
            </h1>
            <p className="text-lg sm:text-xl text-helios-textMuted leading-relaxed max-w-3xl mx-auto">
              We built Helios because we believe the future of search belongs to brands that earn trust, 
              citations, and authority — not just those who optimize keywords.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <AnimatedSection>
            <div className="card p-8 h-full">
              <div className="p-3 rounded-xl bg-helios-gold/10 text-helios-gold inline-flex mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-helios-text mb-4">Our Mission</h2>
              <p className="text-helios-textMuted leading-relaxed mb-4">
                To democratize authority building. We believe every brand — from startups to enterprises — 
                deserves access to the tools, intelligence, and distribution networks that turn expertise 
                into recognized authority.
              </p>
              <p className="text-helios-textMuted leading-relaxed">
                In a world where AI search engines cite sources and users trust recommendations over ads, 
                authority is the single most valuable asset a brand can build. We're here to make that 
                accessible, measurable, and scalable.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="card p-8 h-full">
              <div className="p-3 rounded-xl bg-helios-blue/10 text-helios-blue inline-flex mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-helios-text mb-4">Our Vision</h2>
              <p className="text-helios-textMuted leading-relaxed mb-4">
                A future where the best ideas, products, and services rise to the top based on merit, 
                expertise, and genuine authority — not just advertising budgets or gaming algorithms.
              </p>
              <p className="text-helios-textMuted leading-relaxed">
                We envision Helios as the mission control for every brand serious about building 
                lasting digital authority. Where PR, SEO, content, and AI visibility converge into 
                one intelligent platform.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* The Authority Shift */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-helios-surface border border-helios-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-helios-gold/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-helios-text mb-6">
                  Why Authority Matters More Than Ever
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-2 rounded-lg bg-helios-gold/10 text-helios-gold h-fit">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-helios-text mb-1">AI Search Is Citation-Based</h3>
                      <p className="text-sm text-helios-textMuted leading-relaxed">
                        ChatGPT, Perplexity, and Google AI Overviews don't just rank pages — they cite sources. 
                        Brands with authority get cited. Brands without it disappear from the conversation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 rounded-lg bg-helios-blue/10 text-helios-blue h-fit">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-helios-text mb-1">Trust Is the New Currency</h3>
                      <p className="text-sm text-helios-textMuted leading-relaxed">
                        Consumers and B2B buyers increasingly rely on trusted recommendations, expert citations, 
                        and brand reputation. Authority signals build that trust at scale.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 rounded-lg bg-helios-success/10 text-helios-success h-fit">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-helios-text mb-1">Backlinks Still Rule SEO</h3>
                      <p className="text-sm text-helios-textMuted leading-relaxed">
                        Despite algorithm changes, high-quality backlinks from authoritative publishers remain 
                        the strongest ranking signal. Helios makes earning them systematic and scalable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <SectionHeader
          eyebrow="Our Values"
          title="What Drives Us Every Day"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="card-hover p-6 h-full">
                <div className="p-3 rounded-xl bg-helios-gold/10 text-helios-gold inline-flex mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-helios-text mb-2">{value.title}</h3>
                <p className="text-sm text-helios-textMuted leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team */}
        <SectionHeader
          eyebrow="Our Team"
          title="Built by Authority Experts"
          description="A team of SEO veterans, AI researchers, and product builders obsessed with building the future of digital authority."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <div className="card-hover p-6 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-helios-gold/20 flex items-center justify-center text-helios-gold font-bold text-lg group-hover:bg-helios-gold/30 transition-colors">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-helios-text">{member.name}</h3>
                    <p className="text-sm text-helios-gold">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-helios-textMuted leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-helios-text mb-4">
              Want to join the mission?
            </h2>
            <p className="text-helios-textMuted mb-8">
              We're always looking for exceptional people who care about building the future of search and authority.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#" className="btn-secondary inline-flex items-center gap-2">
                <Users className="w-4 h-4" />
                View Open Roles
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
