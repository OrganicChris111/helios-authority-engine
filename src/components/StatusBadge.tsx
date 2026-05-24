import { cn } from '../lib/utils'

interface StatusBadgeProps {
  status: string
  className?: string
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    'Live': 'bg-helios-success/10 text-helios-success border-helios-success/20',
    'Active': 'bg-helios-success/10 text-helios-success border-helios-success/20',
    'Pending': 'bg-helios-warning/10 text-helios-warning border-helios-warning/20',
    'Planning': 'bg-helios-blue/10 text-helios-blue border-helios-blue/20',
    'Completed': 'bg-helios-textDim/10 text-helios-textDim border-helios-textDim/20',
    'Premium': 'bg-helios-gold/10 text-helios-gold border-helios-gold/20',
    'High': 'bg-helios-blue/10 text-helios-blue border-helios-blue/20',
  }

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border',
      styles[status] || 'bg-helios-surface text-helios-textMuted border-helios-border',
      className
    )}>
      {status === 'Live' || status === 'Active' ? (
        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
      ) : null}
      {status}
    </span>
  )
}
