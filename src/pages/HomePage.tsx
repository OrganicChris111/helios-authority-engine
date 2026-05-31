import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Sparkles, Shield, Globe, Zap, BarChart3,
  Target, TrendingUp, Users, Check, ChevronRight, Star,
  Play, Pause, MousePointerClick, Brain, Search, Link as LinkIcon,
  Megaphone, Bot, Database, FileText, Clock, Award
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import AuthorityScoreGauge from '../components/AuthorityScoreGauge'
import KPICard from '../components/KPICard'
import StatusBadge from '../components/StatusBadge'
import {
  publisherLogos, testimonials, features, pricingPlans,
  authorityChartData, indexationData, placementData,
  anchorDistribution, aiMentionData, campaignPipeline
} from '../data/demoData'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-helios-surface border border-helios-border rounded-lg p-3 shadow-xl">
        <p className="text-xs text-helios-textMuted mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-medium" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Hero Section
function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-helios-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-helios-blue/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.03),transparent_50%)]" />
      </div>

      <div className="section-padding relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-helios-gold/10 border border-helios-gold/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-helios-gold" />
              <span className="text-sm font-medium text-helios-gold">AI-Powered Authority Platform</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-helios-text tracking-tight mb-6 leading-tight">
              “Outrank Competitors. Build Trust.”{' '}
              <span className="text-gradient-gold">Get Found Online.</span>
              <br className="hidden sm:block" />
            </h1>

            <p className="text-lg sm:text-xl text-helios-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
              Increase visibility, build authority and stand out across Google, AI search and trusted websites.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base w-full sm:w-auto flex items-center justify-center gap-2">
                Book Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/platform" className="btn-secondary text-base w-full sm:w-auto flex items-center justify-center gap-2">
                See Platform
                <Play className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-helios-border bg-helios-surface/80 backdrop-blur-sm shadow-2xl shadow-black/40">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-helios-border bg-helios-surface/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-helios-danger/60" />
                  <div className="w-3 h-3 rounded-full bg-helios-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-helios-success/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-helios-bg rounded-md px-3 py-1.5 text-xs text-helios-textDim font-mono text-center">
                    app.helios.engine/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* KPI Cards */}
                <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { title: 'Authority Score', value: '89', change: '+12%', trend: 'up' as const, icon: <Target className="w-4 h-4" /> },
                    { title: 'Total Placements', value: '1,247', change: '+28%', trend: 'up' as const, icon: <Globe className="w-4 h-4" /> },
                    { title: 'Indexed URLs', value: '847', change: '+5%', trend: 'up' as const, icon: <Search className="w-4 h-4" /> },
                    { title: 'AI Mentions', value: '811', change: '+45%', trend: 'up' as const, icon: <Bot className="w-4 h-4" /> },
                  ].map((kpi, i) => (
                    <KPICard key={i} {...kpi} delay={i * 0.1} />
                  ))}
                </div>

                {/* Chart */}
                <div className="md:col-span-2 bg-helios-bg/50 rounded-xl p-4 border border-helios-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-helios-text">Authority Growth</h4>
                    <span className="text-xs text-helios-textMuted">Last 12 months</span>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={authorityChartData}>
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d4a853" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#d4a853" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,42,58,0.5)" />
                        <XAxis dataKey="month" stroke="#5a5a6a" fontSize={12} />
                        <YAxis stroke="#5a5a6a" fontSize={12} domain={[0, 100]} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="score" stroke="#d4a853" strokeWidth={2} fill="url(#colorScore)" name="Your Score" />
                        <Area type="monotone" dataKey="competitors" stroke="#3b82f6" strokeWidth={2} fill="none" strokeDasharray="5 5" name="Competitors" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Indexation Pie */}
                <div className="bg-helios-bg/50 rounded-xl p-4 border border-helios-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-helios-text">Indexation</h4>
                  </div>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={indexationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={70}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {indexationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {indexationData.map((item) => (
                      <div key={item.name} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs text-helios-textMuted">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect behind dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-r from-helios-gold/5 via-transparent to-helios-blue/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Trusted By Section
function TrustedBySection() {
  return (
    <section className="py-16 border-y border-helios-border/50">
      <div className="section-padding">
        <AnimatedSection>
          <p className="text-center text-sm text-helios-textMuted mb-8 uppercase tracking-widest">
            Trusted by brands building authority across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {publisherLogos.slice(0, 8).map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold text-helios-textDim/40 hover:text-helios-textDim/60 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Strategise',
      description: 'Define your authority goals, target audiences, and competitive landscape. Our AI analyzes your current position and identifies high-impact opportunities.',
      icon: <Target className="w-6 h-6" />,
      color: 'helios-gold'
    },
    {
      number: '02',
      title: 'Create',
      description: 'Generate authority-building content with our AI writer. Press releases, thought leadership, data studies — all optimized for citations and backlinks.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'helios-blue'
    },
    {
      number: '03',
      title: 'Distribute',
      description: 'Auto-distribute to matched publishers from our 50,000+ database. AI ensures every placement reaches the right audience with maximum authority impact.',
      icon: <Globe className="w-6 h-6" />,
      color: 'helios-gold'
    },
    {
      number: '04',
      title: 'Measure',
      description: 'Track authority score growth, indexation rates, AI search mentions, and backlink quality in real-time. Optimize continuously with data-driven insights.',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'helios-blue'
    },
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="section-padding">
        <SectionHeader
          eyebrow="How Helios Works"
          title="From Strategy to Authority in Four Steps"
          description="A streamlined workflow that turns your authority goals into measurable search and AI visibility gains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="relative group">
                <div className="card-hover p-6 lg:p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-${step.color}/10 text-${step.color}`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-helios-textDim/20">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-helios-text mb-3">{step.title}</h3>
                  <p className="text-sm text-helios-textMuted leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-helios-border">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-helios-border" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Grid Section
function FeaturesGridSection() {
  const iconMap: Record<string, React.ReactNode> = {
    'Megaphone': <Megaphone className="w-5 h-5" />,
    'Brain': <Brain className="w-5 h-5" />,
    'Target': <Target className="w-5 h-5" />,
    'Database': <Database className="w-5 h-5" />,
    'Search': <Search className="w-5 h-5" />,
    'Link': <LinkIcon className="w-5 h-5" />,
    'Bot': <Bot className="w-5 h-5" />,
    'BarChart3': <BarChart3 className="w-5 h-5" />,
  }

  return (
    <section className="py-24 lg:py-32 bg-helios-surface/30">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Features"
          title="Everything You Need to Build Authority"
          description="A complete suite of AI-powered tools designed to maximize your brand's digital authority and search visibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="card-hover p-6 h-full group">
                <div className={`p-3 rounded-xl mb-4 inline-flex ${
                  feature.color === 'gold' 
                    ? 'bg-helios-gold/10 text-helios-gold' 
                    : 'bg-helios-blue/10 text-helios-blue'
                } group-hover:scale-110 transition-transform`}>
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold text-helios-text mb-2">{feature.title}</h3>
                <p className="text-sm text-helios-textMuted leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Authority Visual Section
function AuthorityVisualSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              Authority Scoring
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              Know Your Authority.{' '}
              <span className="text-gradient-gold">Grow It.</span>
            </h2>
            <p className="text-lg text-helios-textMuted leading-relaxed mb-8">
              Our proprietary Authority Score combines domain rating, citation velocity, brand sentiment, 
              AI search visibility, and indexation health into a single powerful metric. Track your progress 
              against competitors and watch your authority compound over time.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Domain Rating', value: 78, color: 'bg-helios-gold' },
                { label: 'Citation Velocity', value: 92, color: 'bg-helios-blue' },
                { label: 'Brand Sentiment', value: 88, color: 'bg-helios-success' },
                { label: 'AI Visibility', value: 71, color: 'bg-helios-warning' },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-helios-text">{metric.label}</span>
                    <span className="text-sm font-bold text-helios-text">{metric.value}/100</span>
                  </div>
                  <div className="h-2 bg-helios-bg rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className={`h-full ${metric.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-helios-gold/10 via-transparent to-transparent rounded-full blur-3xl" />
              <AuthorityScoreGauge score={89} size="lg" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// AI Visibility Section
function AIVisibilitySection() {
  return (
    <section className="py-24 lg:py-32 bg-helios-surface/30">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="bg-helios-surface border border-helios-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-helios-text">AI Search Mentions</h3>
                <StatusBadge status="Live" />
              </div>

              <div className="space-y-4">
                {aiMentionData.map((platform) => (
                  <div key={platform.platform} className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-helios-text">{platform.platform}</div>
                    <div className="flex-1">
                      <div className="h-8 bg-helios-bg rounded-lg overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(platform.mentions / 250) * 100}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-helios-blue to-helios-blueLight rounded-lg"
                        />
                        <span className="absolute inset-0 flex items-center px-3 text-xs font-medium text-helios-text">
                          {platform.mentions} mentions
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-helios-success">{platform.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-helios-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-helios-text">811</div>
                  <div className="text-xs text-helios-textMuted">Total Mentions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-helios-gold">89%</div>
                  <div className="text-xs text-helios-textMuted">Avg Sentiment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-helios-success">+22%</div>
                  <div className="text-xs text-helios-textMuted">MoM Growth</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-blue bg-helios-blue/10 rounded-full mb-4">
              AI Search Visibility
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              Be Cited By{' '}
              <span className="text-gradient-blue">AI Search Engines.</span>
            </h2>
            <p className="text-lg text-helios-textMuted leading-relaxed mb-8">
              The future of search is AI-powered. ChatGPT, Perplexity, Claude, and Google AI Overviews 
              are becoming primary information sources. Helios tracks how often your brand is cited, 
              the context of mentions, and whether you're recommended or referenced.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ChatGPT Citations', value: '234' },
                { label: 'Perplexity Mentions', value: '189' },
                { label: 'Claude References', value: '156' },
                { label: 'Gemini Citations', value: '134' },
              ].map((stat) => (
                <div key={stat.label} className="bg-helios-surface border border-helios-border rounded-lg p-4">
                  <div className="text-xl font-bold text-helios-text">{stat.value}</div>
                  <div className="text-xs text-helios-textMuted">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// PR Distribution Section
function PRDistributionSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Publisher Network"
          title="50,000+ Publishers At Your Fingertips"
          description="From niche industry blogs to global media giants. Our AI matches your content with publishers that maximize authority impact."
        />

        <AnimatedSection>
          <div className="bg-helios-surface border border-helios-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-helios-border bg-helios-bg/50">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">Publisher</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">Domain</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">DR</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">Traffic</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-helios-textMuted uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.slice(0, 6).map((row, index) => (
                    <motion.tr
                      key={row.domain}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-helios-text">{row.publisher}</td>
                      <td className="px-6 py-4 text-sm text-helios-textMuted font-mono">{row.domain}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-helios-bg rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-helios-gold rounded-full" 
                              style={{ width: `${row.dr}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-helios-text">{row.dr}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-helios-textMuted">{row.traffic}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-helios-textMuted">{row.type}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-helios-surface/30">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Authority Builders"
          description="See how leading brands are using Helios to dominate search and AI visibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.15}>
              <div className="card-hover p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-helios-gold fill-helios-gold" />
                  ))}
                </div>
                <p className="text-helios-text leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-helios-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-helios-gold/20 flex items-center justify-center text-helios-gold font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-helios-text">{testimonial.name}</div>
                      <div className="text-xs text-helios-textMuted">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-helios-gold">{testimonial.metric}</div>
                    <div className="text-xs text-helios-textMuted">{testimonial.metricLabel}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Preview Section
function PricingPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Pricing"
          title="Invest in Authority That Compounds"
          description="Choose the plan that matches your authority ambitions. Scale as you grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.15}>
              <div className={`relative rounded-2xl p-8 h-full flex flex-col ${
                plan.popular 
                  ? 'bg-helios-surface border-2 border-helios-gold/50 shadow-xl shadow-helios-gold/5' 
                  : 'bg-helios-surface border border-helios-border'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-helios-gold text-helios-bg text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-helios-text mb-2">{plan.name}</h3>
                  <p className="text-sm text-helios-textMuted">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-helios-text">${plan.price}</span>
                  <span className="text-helios-textMuted">/month</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-helios-textMuted">
                      <Check className="w-4 h-4 text-helios-success shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-helios-gold text-helios-bg hover:bg-helios-goldLight'
                      : 'bg-helios-surfaceHover text-helios-text border border-helios-border hover:border-helios-gold/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-helios-textMuted mb-4">
              Need a custom solution for your enterprise?
            </p>
            <Link to="/contact" className="text-helios-gold font-medium hover:underline inline-flex items-center gap-1">
              Contact our sales team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-helios-gold/5 via-transparent to-helios-blue/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-helios-gold/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              Ready to Build{' '}
              <span className="text-gradient-gold">Unstoppable Authority?</span>
            </h2>
            <p className="text-lg text-helios-textMuted mb-10 leading-relaxed">
              Join hundreds of brands using Helios to dominate AI search citations, 
              earn premium backlinks, and become the trusted authority in their industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base w-full sm:w-auto flex items-center justify-center gap-2">
                Book Your Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/platform" className="btn-secondary text-base w-full sm:w-auto">
                Explore the Platform
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main HomePage
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <AuthorityVisualSection />
      <AIVisibilitySection />
      <PRDistributionSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FinalCTASection />
    </>
  )
}
