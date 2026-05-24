import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap, Building2, HelpCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import { pricingPlans } from '../data/demoData'

const comparisonFeatures = [
  { feature: 'PR Campaigns / Month', foundation: '5', growth: '25', authority: 'Unlimited' },
  { feature: 'Publisher Database', foundation: '1,000', growth: '10,000', authority: '50,000+' },
  { feature: 'Authority Scoring', foundation: 'Basic', growth: 'Advanced', authority: 'Enterprise' },
  { feature: 'Indexation Tracking', foundation: '50 URLs', growth: '500 URLs', authority: 'Unlimited' },
  { feature: 'AI Content Assistant', foundation: '10 articles', growth: '50 articles', authority: 'Unlimited' },
  { feature: 'AI Search Mentions', foundation: false, growth: true, authority: true },
  { feature: 'Anchor Optimization', foundation: false, growth: true, authority: true },
  { feature: 'UTM Tracking', foundation: false, growth: true, authority: true },
  { feature: 'White-label Reports', foundation: false, growth: false, authority: true },
  { feature: 'API Access', foundation: false, growth: false, authority: true },
  { feature: 'SSO & Team Mgmt', foundation: false, growth: false, authority: true },
  { feature: 'Dedicated Manager', foundation: false, growth: false, authority: true },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const getPrice = (base: number) => isAnnual ? Math.round(base * 0.8) : base

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="section-padding">
        {/* Hero */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              Pricing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-6">
              Invest in Authority{' '}
              <span className="text-gradient-gold">That Compounds</span>
            </h1>
            <p className="text-lg text-helios-textMuted leading-relaxed mb-8">
              Choose the plan that matches your authority ambitions. All plans include core features. 
              Scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1 bg-helios-surface border border-helios-border rounded-lg">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  !isAnnual ? 'bg-helios-gold text-helios-bg' : 'text-helios-textMuted hover:text-helios-text'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isAnnual ? 'bg-helios-gold text-helios-bg' : 'text-helios-textMuted hover:text-helios-text'
                }`}
              >
                Annual <span className="text-xs opacity-80">(Save 20%)</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
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
                  <span className="text-4xl font-bold text-helios-text">${getPrice(plan.price)}</span>
                  <span className="text-helios-textMuted">/month</span>
                  {isAnnual && (
                    <div className="text-xs text-helios-success mt-1">
                      Billed annually (${getPrice(plan.price) * 12}/year)
                    </div>
                  )}
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

        {/* Comparison Table */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-helios-text text-center mb-8">Feature Comparison</h2>
            <div className="bg-helios-surface border border-helios-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-helios-border bg-helios-bg/50">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-helios-text">Feature</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-helios-text">Foundation</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-helios-gold">Growth</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-helios-text">Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={row.feature} className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors">
                        <td className="px-6 py-4 text-sm text-helios-text">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.foundation === 'boolean' ? (
                            row.foundation ? (
                              <Check className="w-5 h-5 text-helios-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-helios-textDim mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-helios-text">{row.foundation}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center bg-helios-gold/5">
                          {typeof row.growth === 'boolean' ? (
                            row.growth ? (
                              <Check className="w-5 h-5 text-helios-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-helios-textDim mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-helios-text font-medium">{row.growth}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.authority === 'boolean' ? (
                            row.authority ? (
                              <Check className="w-5 h-5 text-helios-success mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-helios-textDim mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-helios-text">{row.authority}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enterprise */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="bg-helios-surface border border-helios-border rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-helios-gold/10">
                      <Building2 className="w-6 h-6 text-helios-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-helios-text">Enterprise</h2>
                  </div>
                  <p className="text-helios-textMuted mb-6 leading-relaxed">
                    Custom solutions for large organizations and agencies managing multiple brands. 
                    Includes dedicated infrastructure, custom integrations, and white-glove onboarding.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Custom SLA and support',
                      'Dedicated account team',
                      'Custom AI model training',
                      'Private cloud deployment',
                      'Advanced security & compliance',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-helios-text">
                        <Check className="w-4 h-4 text-helios-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Contact Sales <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-helios-text">Custom</div>
                    <div className="text-xs text-helios-textMuted">Pricing</div>
                  </div>
                  <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-helios-text">99.99%</div>
                    <div className="text-xs text-helios-textMuted">SLA Uptime</div>
                  </div>
                  <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-helios-text">&lt;1hr</div>
                    <div className="text-xs text-helios-textMuted">Support Response</div>
                  </div>
                  <div className="p-4 bg-helios-bg/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-helios-text">SOC2</div>
                    <div className="text-xs text-helios-textMuted">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold text-helios-text mb-4">Frequently Asked Questions</h2>
            <p className="text-helios-textMuted mb-8">
              Have questions? We're here to help.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
