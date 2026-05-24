import { motion } from 'framer-motion'

interface AuthorityScoreGaugeProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export default function AuthorityScoreGauge({ 
  score, 
  size = 'md',
  showLabel = true 
}: AuthorityScoreGaugeProps) {
  const sizes = {
    sm: { width: 120, stroke: 8, font: 'text-lg' },
    md: { width: 160, stroke: 10, font: 'text-2xl' },
    lg: { width: 200, stroke: 12, font: 'text-3xl' },
  }

  const { width, stroke, font } = sizes[size]
  const radius = (width - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = (score / 100) * circumference

  const getColor = (s: number) => {
    if (s >= 80) return '#22c55e'
    if (s >= 60) return '#d4a853'
    if (s >= 40) return '#f59e0b'
    return '#ef4444'
  }

  const color = getColor(score)

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width, height: width }}>
        <svg width={width} height={width} className="-rotate-90">
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="rgba(42, 42, 58, 0.5)"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`font-bold ${font} text-helios-text`}
          >
            {score}
          </motion.span>
        </div>
      </div>
      {showLabel && (
        <span className="mt-2 text-sm font-medium text-helios-textMuted">Authority Score</span>
      )}
    </div>
  )
}
