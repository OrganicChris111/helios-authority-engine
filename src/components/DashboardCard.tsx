import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

interface DashboardCardProps {
  title: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
  delay?: number
}

export default function DashboardCard({ title, children, className, action, delay = 0 }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'bg-helios-surface border border-helios-border rounded-xl overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-helios-border">
        <h3 className="text-sm font-semibold text-helios-text">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  )
}
