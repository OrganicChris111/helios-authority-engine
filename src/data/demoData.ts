export const publisherLogos = [
  'Forbes', 'TechCrunch', 'Wired', 'Bloomberg', 'Reuters',
  'The Guardian', 'Entrepreneur', 'Inc.', 'Fast Company', 'Mashable',
  'Business Insider', 'CNBC', 'The Verge', 'Gizmodo', 'Ars Technica'
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CMO',
    company: 'Nexus Digital',
    quote: 'Helios transformed our authority strategy. We saw a 340% increase in high-quality backlinks within 6 months, and our AI search visibility jumped dramatically.',
    metric: '340%',
    metricLabel: 'Backlink Growth',
    avatar: 'SC'
  },
  {
    name: 'Marcus Williams',
    role: 'Head of SEO',
    company: 'Velocity Media',
    quote: 'The publisher intelligence alone is worth the investment. We went from guessing which outlets matter to having data-driven placement strategies that actually move the needle.',
    metric: '12x',
    metricLabel: 'ROI Increase',
    avatar: 'MW'
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP Marketing',
    company: 'Quantum Labs',
    quote: 'In the age of AI search, citations are everything. Helios helped us become the cited source in our industry. Our brand authority score went from 42 to 89 in under a year.',
    metric: '89',
    metricLabel: 'Authority Score',
    avatar: 'ER'
  },
  {
    name: 'David Park',
    role: 'Founder',
    company: 'Atlas Ventures',
    quote: 'We used to spend weeks on manual PR outreach. With Helios, our team distributes to targeted publishers in hours, not weeks. The automation is genuinely intelligent.',
    metric: '85%',
    metricLabel: 'Time Saved',
    avatar: 'DP'
  }
]

export const features = [
  {
    title: 'Automated PR Campaigns',
    description: 'Launch intelligent PR campaigns that auto-distribute to matched publishers based on domain authority, relevance scoring, and audience alignment.',
    icon: 'Megaphone',
    color: 'gold'
  },
  {
    title: 'AI Content Generation',
    description: 'Generate authority-building content optimized for both human readers and AI search engines. Natural language that earns citations and backlinks.',
    icon: 'Brain',
    color: 'blue'
  },
  {
    title: 'Authority Scoring Engine',
    description: 'Real-time authority metrics combining domain rating, citation velocity, brand mention sentiment, and AI search visibility into a single powerful score.',
    icon: 'Target',
    color: 'gold'
  },
  {
    title: 'Publisher Intelligence',
    description: 'Access a database of 50,000+ publishers with quality scores, audience demographics, topical relevance, and historical placement performance.',
    icon: 'Database',
    color: 'blue'
  },
  {
    title: 'Indexation Monitoring',
    description: 'Track which of your placements get indexed by Google and AI search engines. Know what content is working and what needs a boost.',
    icon: 'Search',
    color: 'gold'
  },
  {
    title: 'Anchor Text Optimization',
    description: 'AI-powered anchor text suggestions that balance branded, exact-match, and natural language anchors for optimal link profile health.',
    icon: 'Link',
    color: 'blue'
  },
  {
    title: 'AI Search Mention Tracking',
    description: 'Monitor how often your brand is cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Track citation quality and context.',
    icon: 'Bot',
    color: 'gold'
  },
  {
    title: 'UTM Tracking & Attribution',
    description: 'Built-in UTM parameter management tied to every placement. See exactly which publishers drive traffic, conversions, and revenue.',
    icon: 'BarChart3',
    color: 'blue'
  }
]

export const pricingPlans = [
  {
    name: 'Foundation',
    price: 299,
    description: 'For startups and small teams beginning their authority journey.',
    features: [
      '5 PR campaigns / month',
      '1,000 publisher database access',
      'Basic authority scoring',
      'Indexation tracking (50 URLs)',
      'AI content assistant (10 articles)',
      'Standard reporting',
      'Email support',
    ],
    cta: 'Start Building',
    popular: false,
  },
  {
    name: 'Growth',
    price: 799,
    description: 'For growing brands ready to scale their authority and visibility.',
    features: [
      '25 PR campaigns / month',
      '10,000 publisher database access',
      'Advanced authority scoring',
      'Indexation tracking (500 URLs)',
      'AI content assistant (50 articles)',
      'AI search mention tracking',
      'Anchor text optimization',
      'UTM tracking & attribution',
      'Priority support',
    ],
    cta: 'Scale Authority',
    popular: true,
  },
  {
    name: 'Authority',
    price: 2499,
    description: 'For enterprises and agencies managing multiple brands at scale.',
    features: [
      'Unlimited PR campaigns',
      'Full 50,000+ publisher database',
      'Enterprise authority scoring',
      'Unlimited indexation tracking',
      'Unlimited AI content generation',
      'Real-time AI mention alerts',
      'Advanced anchor governance',
      'Full attribution suite',
      'White-label reporting',
      'Dedicated success manager',
      'API access',
      'SSO & team management',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export const authorityChartData = [
  { month: 'Jan', score: 42, competitors: 38 },
  { month: 'Feb', score: 45, competitors: 39 },
  { month: 'Mar', score: 51, competitors: 40 },
  { month: 'Apr', score: 58, competitors: 41 },
  { month: 'May', score: 64, competitors: 42 },
  { month: 'Jun', score: 71, competitors: 43 },
  { month: 'Jul', score: 78, competitors: 44 },
  { month: 'Aug', score: 83, competitors: 45 },
  { month: 'Sep', score: 87, competitors: 46 },
  { month: 'Oct', score: 91, competitors: 47 },
  { month: 'Nov', score: 94, competitors: 48 },
  { month: 'Dec', score: 97, competitors: 49 },
]

export const indexationData = [
  { name: 'Indexed', value: 847, color: '#22c55e' },
  { name: 'Pending', value: 123, color: '#f59e0b' },
  { name: 'Not Indexed', value: 45, color: '#ef4444' },
]

export const placementData = [
  { publisher: 'TechCrunch', domain: 'techcrunch.com', dr: 92, traffic: '15.2M', status: 'Live', date: '2024-01-15', type: 'Feature' },
  { publisher: 'Forbes', domain: 'forbes.com', dr: 95, traffic: '28.4M', status: 'Live', date: '2024-01-12', type: 'Mention' },
  { publisher: 'Wired', domain: 'wired.com', dr: 91, traffic: '12.1M', status: 'Live', date: '2024-01-10', type: 'Feature' },
  { publisher: 'The Verge', domain: 'theverge.com', dr: 89, traffic: '18.7M', status: 'Pending', date: '2024-01-08', type: 'Review' },
  { publisher: 'Business Insider', domain: 'businessinsider.com', dr: 90, traffic: '22.3M', status: 'Live', date: '2024-01-05', type: 'Mention' },
  { publisher: 'Fast Company', domain: 'fastcompany.com', dr: 87, traffic: '8.9M', status: 'Live', date: '2024-01-03', type: 'Feature' },
  { publisher: 'Inc.', domain: 'inc.com', dr: 88, traffic: '11.2M', status: 'Pending', date: '2024-01-01', type: 'Mention' },
  { publisher: 'Entrepreneur', domain: 'entrepreneur.com', dr: 86, traffic: '9.5M', status: 'Live', date: '2023-12-28', type: 'Feature' },
]

export const anchorDistribution = [
  { name: 'Branded', value: 45, color: '#d4a853' },
  { name: 'Exact Match', value: 20, color: '#3b82f6' },
  { name: 'Partial Match', value: 25, color: '#60a5fa' },
  { name: 'Natural', value: 10, color: '#8a8a9a' },
]

export const aiMentionData = [
  { platform: 'ChatGPT', mentions: 234, sentiment: 92, trend: '+12%' },
  { platform: 'Perplexity', mentions: 189, sentiment: 88, trend: '+28%' },
  { platform: 'Claude', mentions: 156, sentiment: 90, trend: '+45%' },
  { platform: 'Gemini', mentions: 134, sentiment: 85, trend: '+18%' },
  { platform: 'Bing AI', mentions: 98, sentiment: 87, trend: '+8%' },
]

export const campaignPipeline = [
  { id: 'CP-001', name: 'Q1 Product Launch', status: 'Active', progress: 78, placements: 12, target: 15 },
  { id: 'CP-002', name: 'Authority Building Q1', status: 'Active', progress: 45, placements: 8, target: 20 },
  { id: 'CP-003', name: 'Industry Report 2024', status: 'Planning', progress: 15, placements: 2, target: 10 },
  { id: 'CP-004', name: 'Executive Thought Leadership', status: 'Active', progress: 62, placements: 5, target: 8 },
]

export const publisherQualityScores = [
  { name: 'TechCrunch', score: 96, category: 'Technology', reach: '15.2M', quality: 'Premium' },
  { name: 'Forbes', score: 98, category: 'Business', reach: '28.4M', quality: 'Premium' },
  { name: 'Wired', score: 94, category: 'Technology', reach: '12.1M', quality: 'Premium' },
  { name: 'The Guardian', score: 95, category: 'News', reach: '35.6M', quality: 'Premium' },
  { name: 'Bloomberg', score: 97, category: 'Finance', reach: '42.1M', quality: 'Premium' },
  { name: 'Mashable', score: 88, category: 'Technology', reach: '9.8M', quality: 'High' },
]

export const faqData = [
  {
    question: 'How does Helios differ from traditional PR distribution services?',
    answer: 'Unlike traditional PR wires that blast content indiscriminately, Helios uses AI to match your content with publishers based on domain authority, topical relevance, audience alignment, and historical placement performance. We focus on quality placements that actually build authority, not just volume.',
  },
  {
    question: 'What is the Authority Score and how is it calculated?',
    answer: 'Our Authority Score is a proprietary metric (0-100) that combines domain rating, backlink velocity, citation quality, brand mention sentiment, AI search visibility, and content indexation rates. It gives you a holistic view of your digital authority in real-time.',
  },
  {
    question: 'How does AI search mention tracking work?',
    answer: 'We monitor how often your brand is cited by AI platforms like ChatGPT, Perplexity, Claude, and Google AI Overviews. We track the context of mentions, sentiment, and whether your brand is recommended or merely referenced. This helps you optimize for the future of search.',
  },
  {
    question: 'Can I integrate Helios with my existing SEO tools?',
    answer: 'Yes. Helios integrates with Ahrefs, Semrush, Moz, Google Search Console, Google Analytics, and major CRM platforms. We also offer a full REST API for custom integrations.',
  },
  {
    question: 'What kind of content does the AI generate?',
    answer: 'Our AI generates authority-building content including press releases, thought leadership articles, industry reports, data studies, and expert commentary. All content is optimized for both human readers and AI search engine citation patterns.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial of our Growth plan with full access to all features. No credit card required. You can also request a personalized demo with our team.',
  },
]

export const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Head of SEO at Fortune 500. Built authority strategies for brands generating $2B+ in organic revenue.',
    initials: 'AC'
  },
  {
    name: 'James Morrison',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer. Specialized in information retrieval, natural language processing, and search algorithm optimization.',
    initials: 'JM'
  },
  {
    name: 'Sofia Reyes',
    role: 'Chief Product Officer',
    bio: 'Previously led product at Moz. Obsessed with building tools that make complex SEO data actionable.',
    initials: 'SR'
  },
  {
    name: 'Daniel Okonkwo',
    role: 'VP of Engineering',
    bio: 'Scaled systems at Stripe and Airbnb. Architecting the infrastructure that processes billions of authority signals daily.',
    initials: 'DO'
  },
  {
    name: 'Mia Tanaka',
    role: 'Head of AI Research',
    bio: 'PhD in Computational Linguistics from MIT. Leading our AI content generation and search mention tracking models.',
    initials: 'MT'
  },
  {
    name: 'Lucas Bergmann',
    role: 'VP of Customer Success',
    bio: 'Built customer success teams at HubSpot and Drift. Ensuring every Helios customer achieves authority breakthroughs.',
    initials: 'LB'
  },
]
