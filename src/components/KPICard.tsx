import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '../lib/utils'

interface KPICardProps {
  title: string
  value: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: React.ReactNode
  delay?: number
}

export default function KPICard({ title, value, change, trend = 'neutral', icon, delay = 0 }: KPICardProps) {
  const trendIcons = {
    up: <TrendingUp className="w-3.5 h-3.5" />,
    down: <TrendingDown className="w-3.5 h-3.5" />,
    neutral: <Minus className="w-3.5 h-3.5" />,
  }

  const trendColors = {
    up: 'text-helios-success',
    down: 'text-helios-danger',
    neutral: 'text-helios-textDim',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-helios-surface border border-helios-border rounded-xl p-5 hover:border-helios-borderLight transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-helios-textMuted uppercase tracking-wider">{title}</span>
        <div className="p-2 rounded-lg bg-helios-surfaceHover text-helios-gold">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl lg:text-3xl font-bold text-helios-text">{value}</span>
        {change && (
          <div className={cn('flex items-center gap-1 text-xs font-medium', trendColors[trend])}>
            {trendIcons[trend]}
            {change}
          </div>
        )}
      </div>
    </motion.div>
  )
}
