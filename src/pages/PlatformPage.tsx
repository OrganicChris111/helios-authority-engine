import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, Database, Search, FileText, Link as LinkIcon,
  BarChart3, Bot, Target, TrendingUp, Globe, Zap, Filter,
  Download, RefreshCw, ChevronDown, MoreHorizontal, ArrowUpRight,
  Clock, CheckCircle2, AlertCircle, Eye
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeader from '../components/SectionHeader'
import DashboardCard from '../components/DashboardCard'
import KPICard from '../components/KPICard'
import StatusBadge from '../components/StatusBadge'
import AuthorityScoreGauge from '../components/AuthorityScoreGauge'
import {
  authorityChartData, indexationData, placementData,
  anchorDistribution, aiMentionData, campaignPipeline,
  publisherQualityScores
} from '../data/demoData'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line
} from 'recharts'

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

const tabs = [
  { id: 'overview', label: 'Authority Dashboard', icon: LayoutDashboard },
  { id: 'publishers', label: 'Publisher Repository', icon: Database },
  { id: 'indexation', label: 'Indexation Tracking', icon: Search },
  { id: 'ai-writer', label: 'AI PR Writer', icon: FileText },
  { id: 'anchors', label: 'Anchor Governance', icon: LinkIcon },
  { id: 'placement', label: 'Placement Intelligence', icon: Target },
  { id: 'ai-search', label: 'AI Search Visibility', icon: Bot },
  { id: 'reporting', label: 'Campaign Reporting', icon: BarChart3 },
]

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Authority Score" value="89" change="+12%" trend="up" icon={<Target className="w-4 h-4" />} delay={0} />
        <KPICard title="Total Placements" value="1,247" change="+28%" trend="up" icon={<Globe className="w-4 h-4" />} delay={0.1} />
        <KPICard title="Avg Domain Rating" value="76" change="+8%" trend="up" icon={<Zap className="w-4 h-4" />} delay={0.2} />
        <KPICard title="AI Mentions" value="811" change="+45%" trend="up" icon={<Bot className="w-4 h-4" />} delay={0.3} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard title="Authority Score Trend" className="lg:col-span-2" action={<RefreshCw className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={authorityChartData}>
                <defs>
                  <linearGradient id="colorScore2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4a853" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4a853" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,42,58,0.5)" />
                <XAxis dataKey="month" stroke="#5a5a6a" fontSize={12} />
                <YAxis stroke="#5a5a6a" fontSize={12} domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="score" stroke="#d4a853" strokeWidth={2} fill="url(#colorScore2)" name="Your Score" />
                <Area type="monotone" dataKey="competitors" stroke="#3b82f6" strokeWidth={2} fill="none" strokeDasharray="5 5" name="Competitors" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        <DashboardCard title="Score Breakdown">
          <div className="flex items-center justify-center py-4">
            <AuthorityScoreGauge score={89} size="md" />
          </div>
          <div className="space-y-3 mt-2">
            {[
              { label: 'Backlinks', value: 92, color: '#22c55e' },
              { label: 'Content', value: 85, color: '#d4a853' },
              { label: 'Brand', value: 88, color: '#3b82f6' },
              { label: 'Technical', value: 79, color: '#f59e0b' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xs text-helios-textMuted w-16">{item.label}</span>
                <div className="flex-1 h-2 bg-helios-bg rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                </div>
                <span className="text-xs font-medium text-helios-text w-8">{item.value}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Recent Placements */}
      <DashboardCard title="Recent Placements" action={<Filter className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-helios-border">
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">Publisher</th>
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">DR</th>
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">Traffic</th>
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">Status</th>
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">Date</th>
                <th className="text-left py-3 text-xs font-semibold text-helios-textMuted uppercase">Type</th>
              </tr>
            </thead>
            <tbody>
              {placementData.map((row) => (
                <tr key={row.domain} className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-helios-bg flex items-center justify-center text-xs font-bold text-helios-textMuted">
                        {row.publisher[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-helios-text">{row.publisher}</div>
                        <div className="text-xs text-helios-textMuted font-mono">{row.domain}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-helios-bg rounded-full overflow-hidden">
                        <div className="h-full bg-helios-gold rounded-full" style={{ width: `${row.dr}%` }} />
                      </div>
                      <span className="text-sm text-helios-text">{row.dr}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-helios-textMuted">{row.traffic}</td>
                  <td className="py-3"><StatusBadge status={row.status} /></td>
                  <td className="py-3 text-sm text-helios-textMuted">{row.date}</td>
                  <td className="py-3 text-sm text-helios-textMuted">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </div>
  )
}

function PublishersTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard title="Publisher Quality Distribution" className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={publisherQualityScores} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,42,58,0.5)" />
                <XAxis type="number" stroke="#5a5a6a" fontSize={12} domain={[0, 100]} />
                <YAxis dataKey="name" type="category" stroke="#5a5a6a" fontSize={12} width={100} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="score" fill="#d4a853" radius={[0, 4, 4, 0]} name="Quality Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        <DashboardCard title="Database Stats">
          <div className="space-y-4">
            {[
              { label: 'Total Publishers', value: '50,000+', icon: <Database className="w-4 h-4" /> },
              { label: 'Premium Tier', value: '2,400', icon: <Star className="w-4 h-4" /> },
              { label: 'Avg DR', value: '72', icon: <Zap className="w-4 h-4" /> },
              { label: 'Categories', value: '340', icon: <Filter className="w-4 h-4" /> },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between p-3 bg-helios-bg/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-helios-surfaceHover text-helios-gold">{stat.icon}</div>
                  <span className="text-sm text-helios-textMuted">{stat.label}</span>
                </div>
                <span className="text-sm font-bold text-helios-text">{stat.value}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="Publisher Repository" action={
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg hover:bg-helios-surfaceHover text-helios-textMuted"><Filter className="w-4 h-4" /></button>
          <button className="p-1.5 rounded-lg hover:bg-helios-surfaceHover text-helios-textMuted"><Download className="w-4 h-4" /></button>
        </div>
      }>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-helios-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Publisher</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Category</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Quality Score</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Reach</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Tier</th>
              </tr>
            </thead>
            <tbody>
              {publisherQualityScores.map((pub) => (
                <tr key={pub.name} className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-helios-bg flex items-center justify-center text-xs font-bold text-helios-textMuted">
                        {pub.name[0]}
                      </div>
                      <span className="text-sm font-medium text-helios-text">{pub.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{pub.category}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-helios-bg rounded-full overflow-hidden">
                        <div className="h-full bg-helios-gold rounded-full" style={{ width: `${pub.score}%` }} />
                      </div>
                      <span className="text-sm font-medium text-helios-text">{pub.score}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{pub.reach}</td>
                  <td className="py-3 px-4"><StatusBadge status={pub.quality} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </div>
  )
}

function IndexationTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard title="Indexation Status">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={indexationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
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
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {indexationData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-helios-textMuted">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Indexation Rate" className="lg:col-span-2">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={authorityChartData.slice(0, 8)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,42,58,0.5)" />
                <XAxis dataKey="month" stroke="#5a5a6a" fontSize={12} />
                <YAxis stroke="#5a5a6a" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e' }} name="Indexed %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="URL Indexation Tracker" action={<RefreshCw className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Indexed', value: '847', icon: <CheckCircle2 className="w-5 h-5 text-helios-success" />, color: 'text-helios-success' },
            { label: 'Pending', value: '123', icon: <Clock className="w-5 h-5 text-helios-warning" />, color: 'text-helios-warning' },
            { label: 'Not Indexed', value: '45', icon: <AlertCircle className="w-5 h-5 text-helios-danger" />, color: 'text-helios-danger' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-4 bg-helios-bg/50 rounded-lg">
              {stat.icon}
              <div>
                <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-helios-textMuted">{stat.label} URLs</div>
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  )
}

function AIWriterTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="AI Content Generator">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-helios-textMuted uppercase mb-2 block">Content Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['Press Release', 'Thought Leadership', 'Industry Report', 'Data Study'].map((type) => (
                  <button key={type} className="p-3 text-sm text-helios-text bg-helios-bg/50 rounded-lg border border-helios-border hover:border-helios-gold/50 transition-all text-left">
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-helios-textMuted uppercase mb-2 block">Topic / Angle</label>
              <input 
                type="text" 
                placeholder="Enter your topic or news angle..."
                className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-helios-textMuted uppercase mb-2 block">Target Keywords</label>
              <input 
                type="text" 
                placeholder="authority building, digital PR, SEO..."
                className="w-full px-4 py-3 bg-helios-bg/50 border border-helios-border rounded-lg text-sm text-helios-text placeholder-helios-textDim focus:outline-none focus:border-helios-gold/50"
              />
            </div>
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Generate Content
            </button>
          </div>
        </DashboardCard>

        <DashboardCard title="Generated Preview">
          <div className="bg-helios-bg/50 rounded-lg p-4 border border-helios-border font-mono text-xs text-helios-textMuted space-y-2">
            <div className="flex items-center gap-2 text-helios-gold mb-3">
              <FileText className="w-4 h-4" />
              <span className="font-semibold">Press Release Draft</span>
            </div>
            <p className="text-helios-text leading-relaxed">
              <span className="text-helios-gold">FOR IMMEDIATE RELEASE</span>
            </p>
            <p className="text-helios-text leading-relaxed">
              [Company Name] Announces Breakthrough in AI-Powered Authority Building Platform
            </p>
            <p className="leading-relaxed">
              [City, Date] — [Company Name], the leader in digital authority intelligence, today announced 
              the launch of Helios Authority Engine 2.0, featuring advanced AI search mention tracking and 
              automated publisher matching...
            </p>
            <div className="pt-3 border-t border-helios-border flex items-center gap-4">
              <span className="text-xs">Words: 1,247</span>
              <span className="text-xs">Readability: 8.2</span>
              <span className="text-xs text-helios-success">SEO Score: 94/100</span>
            </div>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="Content Performance" action={<Download className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Articles Generated', value: '156', change: '+24%' },
            { label: 'Avg SEO Score', value: '91', change: '+3%' },
            { label: 'Indexation Rate', value: '94%', change: '+6%' },
            { label: 'Backlinks Earned', value: '432', change: '+38%' },
          ].map((metric) => (
            <div key={metric.label} className="text-center p-4 bg-helios-bg/50 rounded-lg">
              <div className="text-2xl font-bold text-helios-text">{metric.value}</div>
              <div className="text-xs text-helios-textMuted">{metric.label}</div>
              <div className="text-xs text-helios-success mt-1">{metric.change}</div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  )
}

function AnchorsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Anchor Distribution">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={anchorDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {anchorDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        <DashboardCard title="Anchor Health Score">
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-helios-success mb-2">92</div>
              <div className="text-sm text-helios-textMuted mb-4">Optimal Distribution</div>
              <div className="space-y-2">
                {[
                  { label: 'Branded', value: 45, status: 'optimal' },
                  { label: 'Exact Match', value: 20, status: 'good' },
                  { label: 'Partial Match', value: 25, status: 'optimal' },
                  { label: 'Natural', value: 10, status: 'watch' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <span className="w-20 text-helios-textMuted">{item.label}</span>
                    <div className="flex-1 h-2 bg-helios-bg rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          item.status === 'optimal' ? 'bg-helios-success' : 
                          item.status === 'good' ? 'bg-helios-gold' : 'bg-helios-warning'
                        }`} 
                        style={{ width: `${item.value * 2}%` }}
                      />
                    </div>
                    <span className="w-8 text-helios-text">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="Anchor Text Governance" action={<Filter className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-helios-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Anchor Text</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Type</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Count</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">% of Total</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Health</th>
              </tr>
            </thead>
            <tbody>
              {[
                { anchor: 'Helios Authority Engine', type: 'Branded', count: 234, pct: 45, health: 'optimal' },
                { anchor: 'authority building platform', type: 'Partial', count: 89, pct: 17, health: 'optimal' },
                { anchor: 'digital PR software', type: 'Exact', count: 45, pct: 9, health: 'good' },
                { anchor: 'click here', type: 'Natural', count: 34, pct: 7, health: 'watch' },
                { anchor: 'Helios', type: 'Branded', count: 67, pct: 13, health: 'optimal' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-helios-text">{row.anchor}</td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{row.type}</td>
                  <td className="py-3 px-4 text-sm text-helios-text">{row.count}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-helios-bg rounded-full overflow-hidden">
                        <div className="h-full bg-helios-gold rounded-full" style={{ width: `${row.pct * 2}%` }} />
                      </div>
                      <span className="text-sm text-helios-text">{row.pct}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={row.health === 'optimal' ? 'Live' : row.health === 'good' ? 'Active' : 'Pending'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </div>
  )
}

function PlacementTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <KPICard title="Total Placements" value="1,247" change="+28%" trend="up" icon={<Globe className="w-4 h-4" />} delay={0} />
        <KPICard title="Avg DR of Placements" value="76" change="+8%" trend="up" icon={<Zap className="w-4 h-4" />} delay={0.1} />
        <KPICard title="Placement Success Rate" value="94%" change="+5%" trend="up" icon={<Target className="w-4 h-4" />} delay={0.2} />
      </div>

      <DashboardCard title="Placement Intelligence" action={<Filter className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-helios-border">
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Publisher</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Domain</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">DR</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Traffic</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Type</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-helios-textMuted uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {placementData.map((row) => (
                <tr key={row.domain} className="border-b border-helios-border/50 hover:bg-helios-surfaceHover transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-helios-text">{row.publisher}</td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted font-mono">{row.domain}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-helios-bg rounded-full overflow-hidden">
                        <div className="h-full bg-helios-gold rounded-full" style={{ width: `${row.dr}%` }} />
                      </div>
                      <span className="text-sm text-helios-text">{row.dr}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{row.traffic}</td>
                  <td className="py-3 px-4"><StatusBadge status={row.status} /></td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{row.type}</td>
                  <td className="py-3 px-4 text-sm text-helios-textMuted">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>
    </div>
  )
}

function AISearchTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="AI Platform Mentions">
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
                      {platform.mentions}
                    </span>
                  </div>
                </div>
                <div className="text-right w-16">
                  <span className="text-xs text-helios-success">{platform.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Sentiment Analysis">
          <div className="space-y-4">
            {aiMentionData.map((platform) => (
              <div key={platform.platform} className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-helios-text">{platform.platform}</div>
                <div className="flex-1">
                  <div className="h-6 bg-helios-bg rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${platform.sentiment}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-helios-success to-helios-gold rounded-full"
                    />
                  </div>
                </div>
                <div className="text-sm font-bold text-helios-text w-10">{platform.sentiment}%</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-helios-border text-center">
            <span className="text-xs text-helios-textMuted">Average Sentiment: </span>
            <span className="text-sm font-bold text-helios-gold">88.4%</span>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="Recent AI Citations" action={<Eye className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="space-y-3">
          {[
            { platform: 'ChatGPT', context: 'Helios Authority Engine is mentioned as a leading platform for building digital authority through automated PR distribution.', date: '2 hours ago', sentiment: 'positive' },
            { platform: 'Perplexity', context: 'According to industry analysis, Helios provides comprehensive publisher intelligence and AI-assisted content generation for authority building.', date: '5 hours ago', sentiment: 'positive' },
            { platform: 'Claude', context: 'Helios offers an integrated approach to SEO authority, combining backlink acquisition with AI search visibility tracking.', date: '1 day ago', sentiment: 'positive' },
          ].map((citation, i) => (
            <div key={i} className="p-4 bg-helios-bg/50 rounded-lg border border-helios-border/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-helios-blue" />
                  <span className="text-sm font-medium text-helios-text">{citation.platform}</span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status="Live" />
                  <span className="text-xs text-helios-textMuted">{citation.date}</span>
                </div>
              </div>
              <p className="text-sm text-helios-textMuted leading-relaxed">{citation.context}</p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  )
}

function ReportingTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Campaign Pipeline">
          <div className="space-y-4">
            {campaignPipeline.map((campaign) => (
              <div key={campaign.id} className="p-4 bg-helios-bg/50 rounded-lg border border-helios-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm font-medium text-helios-text">{campaign.name}</div>
                    <div className="text-xs text-helios-textMuted">{campaign.id}</div>
                  </div>
                  <StatusBadge status={campaign.status} />
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-1">
                    <div className="h-2 bg-helios-bg rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-helios-gold rounded-full transition-all" 
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-helios-text">{campaign.progress}%</span>
                </div>
                <div className="flex items-center justify-between text-xs text-helios-textMuted">
                  <span>{campaign.placements} of {campaign.target} placements</span>
                  <span>{campaign.target - campaign.placements} remaining</span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Monthly Performance">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={authorityChartData.slice(6)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,42,58,0.5)" />
                <XAxis dataKey="month" stroke="#5a5a6a" fontSize={12} />
                <YAxis stroke="#5a5a6a" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="score" fill="#d4a853" radius={[4, 4, 0, 0]} name="Placements" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard title="Campaign Report Summary" action={<Download className="w-4 h-4 text-helios-textMuted cursor-pointer hover:text-helios-text" />}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Campaigns Active', value: '4' },
            { label: 'Total Placements', value: '1,247' },
            { label: 'Avg DR', value: '76' },
            { label: 'Success Rate', value: '94%' },
            { label: 'Indexed URLs', value: '847' },
            { label: 'AI Mentions', value: '811' },
            { label: 'Backlinks Gained', value: '2,134' },
            { label: 'Est. Value', value: '$1.2M' },
          ].map((metric) => (
            <div key={metric.label} className="text-center p-4 bg-helios-bg/50 rounded-lg">
              <div className="text-xl font-bold text-helios-text">{metric.value}</div>
              <div className="text-xs text-helios-textMuted">{metric.label}</div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  )
}

const tabComponents: Record<string, React.FC> = {
  overview: OverviewTab,
  publishers: PublishersTab,
  indexation: IndexationTab,
  'ai-writer': AIWriterTab,
  anchors: AnchorsTab,
  placement: PlacementTab,
  'ai-search': AISearchTab,
  reporting: ReportingTab,
}

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const ActiveComponent = tabComponents[activeTab] || OverviewTab

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="section-padding">
        <AnimatedSection>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-helios-gold bg-helios-gold/10 rounded-full mb-4">
              Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-helios-text tracking-tight mb-4">
              Mission Control for{' '}
              <span className="text-gradient-gold">Authority Building</span>
            </h1>
            <p className="text-lg text-helios-textMuted max-w-2xl">
              Your centralized dashboard for tracking, optimizing, and scaling your brand's digital authority across every channel.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-helios-gold/10 text-helios-gold border border-helios-gold/20'
                        : 'bg-helios-surface text-helios-textMuted border border-helios-border hover:border-helios-borderLight hover:text-helios-text'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveComponent />
        </motion.div>
      </div>
    </div>
  )
}
