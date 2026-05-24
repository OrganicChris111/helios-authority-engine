import { Link } from 'react-router-dom'
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-helios-border bg-helios-surface/50">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-helios-gold/20 rounded-lg" />
                <Zap className="w-5 h-5 text-helios-gold relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-helios-text leading-none">
                  Helios
                </span>
                <span className="text-[10px] font-medium text-helios-textMuted tracking-widest uppercase leading-none">
                  Authority Engine
                </span>
              </div>
            </Link>
            <p className="text-sm text-helios-textMuted max-w-xs mb-6">
              Building authority that AI and search engines trust. The future of digital PR and SEO intelligence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-helios-surface border border-helios-border text-helios-textMuted hover:text-helios-gold hover:border-helios-gold/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-helios-text mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-helios-textMuted hover:text-helios-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-helios-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-helios-textDim">
            &copy; {new Date().getFullYear()} Helios Authority Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-helios-textDim">Status: Operational</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-helios-success animate-pulse" />
              <span className="text-xs text-helios-success">All Systems Online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
