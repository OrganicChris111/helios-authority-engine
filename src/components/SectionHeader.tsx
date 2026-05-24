import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cn } from '../lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = 'center',
  className 
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'max-w-3xl mb-12 lg:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-helios-textMuted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
