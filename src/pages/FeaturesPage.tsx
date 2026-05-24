import { motion } from 'framer-motion'
import {
  Megaphone, Brain, Target, Database, Search, Link as LinkIcon,
  Bot, BarChart3, FileText, Clock, Shield, Zap, ArrowRight,
  Check, Globe, TrendingUp, Award, Layers, GitBranch
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import { features } from '../data/demoData'

const iconMap: Record<string, React.ReactNode> = {
  'Megaphone': <Megaphone className="w-6 h-6" />,
  'Brain': <Brain className="w-6 h-6" />,
  'Target': <Target className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Search': <Search className="w-6 h-6" />,
  'Link': <LinkIcon className="w-6 h-6" />,
  'Bot': <Bot className="w-6 h-6" />,
  'BarChart3': <BarChart3 className="w-6 h-6" />,
}

const detailedFeatures = [
  {
    ...features[0],
    details: [
      'Smart publisher matching based on domain authority and topical relevance',
      'Automated outreach with personalized pitching',
      'Real-time placement tracking and status updates',
      'Integration with major PR wire services',
      'Campaign scheduling and batch distribution',
    ],
    stats: { label: 'Avg Campaign Setup Time', value: '12 min' },
  },
  {
    ...features[1],
    details: [
      'GPT-4 powered content generation optimized for authority',
      'Press releases, thought leadership, and data studies',
      'SEO-optimized natural language that earns citations',
      'Brand voice training and style consistency',
      'Multi-format output: articles, summaries, social posts',
    ],
    stats: { label: 'Content Pieces Generated', value: '50K+' },
  },
  {
    ...features[2],
    details: [
      'Proprietary algorithm combining 12 authority signals',
      'Real-time score updates as placements go live',
      'Competitor benchmarking and gap analysis',
      'Historical trend tracking and forecasting',
      'Custom scoring weights for enterprise needs',
    ],
    stats: { label: 'Scores Calculated Daily', value: '2.4M' },
  },
  {
    ...features[3],
    details: [
      '50,000+ publisher database with quality scores',
      'Audience demographics and traffic analytics',
      'Historical placement performance data',
      'Contact intelligence and editor profiles',
      'Publisher relationship management tools',
    ],
    stats: { label: 'Publisher Profiles', value: '50,000+' },
  },
  {
    ...features[4],
    details: [
      'Real-time Google indexation checking',
      'Bulk URL monitoring with automated alerts',
      'Indexation velocity tracking',
      'Non-indexed URL remediation suggestions',
      'Integration with Google Search Console',
    ],
    stats: { label: 'URLs Monitored', value: '1.2M' },
  },
  {
    ...features[5],
    details: [
      'AI-powered anchor text suggestions',
      'Natural language distribution modeling',
      'Over-optimization risk detection',
      'Anchor diversity scoring and health checks',
      'Competitor anchor profile analysis',
    ],
    stats: { label: 'Anchors Analyzed', value: '8.5M' },
  },
  {
    ...features[6],
    details: [
      'Track mentions across ChatGPT, Perplexity, Claude, Gemini',
      'Citation context and sentiment analysis',
      'AI recommendation vs reference classification',
      'Real-time alerts for new citations',
      'Historical AI visibility trend reports',
    ],
    stats: { label: 'AI Mentions Tracked', value: '500K+' },
  },
  {
    ...features[7],
    details: [
      'Automatic UTM parameter generation',
      'Placement-level attribution tracking',
      'Conversion path analysis',
      'Revenue attribution by publisher',
      'Integration with Google Analytics 4',
    ],
    stats: { label: 'Attribution Accuracy', value: '97%' },
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="section-padding">
        {/* Hero */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              Features
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              The Complete Authority{' '}
              <span className="text-gradient-gold">Building Stack</span>
            </h1>
            <p className="text-lg text-helios-textMuted leading-relaxed">
              Every tool you need to build, measure, and scale digital authority — 
              from automated PR distribution to AI search mention tracking.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature Grid */}
        <div className="space-y-24 lg:space-y-32">
          {detailedFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            const isReversed = index % 2 === 1

            return (
              <AnimatedSection key={feature.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className={`inline-flex p-3 rounded-xl mb-6 ${
                      feature.color === 'gold' 
                        ? 'bg-helios-gold/10 text-helios-gold' 
                        : 'bg-helios-blue/10 text-helios-blue'
                    }`}>
                      {Icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-helios-text mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-helios-textMuted leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                            feature.color === 'gold' ? 'text-helios-gold' : 'text-helios-blue'
                          }`} />
                          <span className="text-sm text-helios-text">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="bg-helios-surface border border-helios-border rounded-xl p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${
                              feature.color === 'gold' 
                                ? 'bg-helios-gold/10 text-helios-gold' 
                                : 'bg-helios-blue/10 text-helios-blue'
                            }`}>
                              {Icon}
                            </div>
                            <span className="text-sm font-medium text-helios-text">{feature.title}</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-helios-border" />
                            <div className="w-2 h-2 rounded-full bg-helios-border" />
                          </div>
                        </div>

                        {/* Mock UI based on feature type */}
                        <div className="space-y-4">
                          {index === 0 && (
                            <>
                              <div className="flex items-center gap-3 p-3 bg-helios-bg/50 rounded-lg">
                                <Globe className="w-4 h-4 text-helios-gold" />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-helios-text">TechCrunch</div>
                                  <div className="text-xs text-helios-textMuted">DR 92 | 15.2M traffic</div>
                                </div>
                                <StatusBadge status="Live" />
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-helios-bg/50 rounded-lg">
                                <Globe className="w-4 h-4 text-helios-gold" />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-helios-text">Forbes</div>
                                  <div className="text-xs text-helios-textMuted">DR 95 | 28.4M traffic</div>
                                </div>
                                <StatusBadge status="Live" />
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-helios-bg/50 rounded-lg">
                                <Globe className="w-4 h-4 text-helios-gold" />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-helios-text">Wired</div>
                                  <div className="text-xs text-helios-textMuted">DR 91 | 12.1M traffic</div>
                                </div>
                                <StatusBadge status="Pending" />
                              </div>
                            </>
                          )}
                          {index === 1 && (
                            <div className="bg-helios-bg/50 rounded-lg p-4 font-mono text-xs text-helios-textMuted space-y-2">
                              <div className="text-helios-gold font-semibold">Generated Press Release</div>
                              <p className="text-helios-text">Helios Authority Engine Announces AI-Powered Publisher Matching...</p>
                              <div className="flex gap-4 pt-2 border-t border-helios-border">
                                <span>Words: 1,247</span>
                                <span className="text-helios-success">SEO: 94/100</span>
                              </div>
                            </div>
                          )}
                          {index === 2 && (
                            <div className="flex items-center justify-center py-8">
                              <div className="text-center">
                                <div className="text-6xl font-bold text-helios-gold mb-2">89</div>
                                <div className="text-sm text-helios-textMuted">Your Authority Score</div>
                                <div className="mt-4 space-y-2 text-left">
                                  <div className="flex items-center gap-2 text-xs">
                                    <div className="w-3 h-3 rounded-full bg-helios-success" />
                                    <span className="text-helios-text">Backlinks: 92</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs">
                                    <div className="w-3 h-3 rounded-full bg-helios-gold" />
                                    <span className="text-helios-text">Content: 85</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs">
                                    <div className="w-3 h-3 rounded-full bg-helios-blue" />
                                    <span className="text-helios-text">Brand: 88</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {index >= 3 && (
                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                                <div className="text-2xl font-bold text-helios-text">{feature.stats.value}</div>
                                <div className="text-xs text-helios-textMuted">{feature.stats.label}</div>
                              </div>
                              <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                                <div className="text-2xl font-bold text-helios-gold">99.9%</div>
                                <div className="text-xs text-helios-textMuted">Uptime</div>
                              </div>
                              <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                                <div className="text-2xl font-bold text-helios-blue">&lt;2s</div>
                                <div className="text-xs text-helios-textMuted">Response Time</div>
                              </div>
                              <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                                <div className="text-2xl font-bold text-helios-success">24/7</div>
                                <div className="text-xs text-helios-textMuted">Monitoring</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Glow */}
                      <div className={`absolute -inset-4 rounded-2xl blur-2xl -z-10 opacity-20 ${
                        feature.color === 'gold' ? 'bg-helios-gold' : 'bg-helios-blue'
                      }`} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-24 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-helios-text mb-4">
              Ready to see these features in action?
            </h2>
            <p className="text-helios-textMuted mb-8 max-w-xl mx-auto">
              Book a personalized demo and see how Helios can transform your authority building strategy.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
