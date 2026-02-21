import React from 'react';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   LineChart,
   Line,
   AreaChart,
   Area,
   Cell,
   PieChart,
   Pie
} from 'recharts';
import {
   TrendingUp,
   Target,
   BarChart3,
   Layers,
   Brain,
   Award,
   Zap,
   Activity
} from 'lucide-react';
import { Badge, Button, cn } from '../components/ui';
import { motion } from 'motion/react';

const performanceTrend = [
   { name: 'Jan', score: 65, avg: 72 },
   { name: 'Feb', score: 78, avg: 74 },
   { name: 'Mar', score: 82, avg: 75 },
   { name: 'Apr', score: 79, avg: 76 },
   { name: 'May', score: 88, avg: 77 },
   { name: 'Jun', score: 92, avg: 78 },
];

const topicDistribution = [
   { name: 'Python', value: 85 },
   { name: 'Java', value: 72 },
   { name: 'DSA', value: 94 },
];

const COLORS = ['#1E3A8A', '#22D3EE', '#10B981', '#F59E0B', '#EF4444'];

export function Analytics() {
   return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
         <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
               <h1 className="text-3xl font-bold tracking-tight text-slate-900">Advanced Analytics</h1>
               <p className="text-slate-500">A deep dive into your technical readiness metrics.</p>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="gap-2">Download Report</Button>
               <Button variant="gradient" size="sm" className="gap-2">Upgrade to Pro</Button>
            </div>
         </header>

         {/* Metric Cards */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
               { label: "Overall Score", val: "88.4%", change: "+2.1%", icon: Target, color: "text-primary-blue" },
               { label: "Tests Taken", val: "12", change: "+1", icon: Layers, color: "text-accent-cyan" },
               { label: "Learning Hours", val: "48.5h", change: "+12.2h", icon: Activity, color: "text-success-emerald" },
               { label: "Readiness Rank", val: "Top 5%", change: "+1%", icon: Award, color: "text-warning-amber" }
            ].map((metric, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
               >
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                     <metric.icon size={14} className={metric.color} /> {metric.label}
                  </div>
                  <div className="flex items-baseline gap-2">
                     <span className="text-2xl font-black text-slate-900">{metric.val}</span>
                     <span className="text-success-emerald text-[10px] font-bold">{metric.change}</span>
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Score Trend */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <div>
                     <h3 className="text-lg font-bold">Performance Trend</h3>
                     <p className="text-sm text-slate-500">Score vs. Community Average</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-blue"></div>
                        <span className="text-xs font-bold text-slate-500">You</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <span className="text-xs font-bold text-slate-500">Community</span>
                     </div>
                  </div>
               </div>

               <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={performanceTrend}>
                        <defs>
                           <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.1} />
                              <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                           dataKey="name"
                           axisLine={false}
                           tickLine={false}
                           tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                        />
                        <YAxis
                           axisLine={false}
                           tickLine={false}
                           tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                        />
                        <Tooltip
                           contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        />
                        <Area
                           type="monotone"
                           dataKey="score"
                           stroke="#1E3A8A"
                           strokeWidth={3}
                           fillOpacity={1}
                           fill="url(#scoreGradient)"
                        />
                        <Line
                           type="monotone"
                           dataKey="avg"
                           stroke="#e2e8f0"
                           strokeWidth={2}
                           strokeDasharray="5 5"
                           dot={false}
                        />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Topic Breakdown */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-lg font-bold mb-8">Skill Distribution</h3>
               <div className="h-[300px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={topicDistribution}
                           innerRadius={80}
                           outerRadius={100}
                           paddingAngle={8}
                           dataKey="value"
                        >
                           {topicDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                           ))}
                        </Pie>
                        <Tooltip />
                     </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <span className="text-4xl font-black text-slate-900">88</span>
                     <span className="text-xs font-bold text-slate-400 uppercase">Composite</span>
                  </div>
               </div>

               <div className="mt-8 space-y-3">
                  {topicDistribution.map((topic, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                           <span className="text-sm font-medium text-slate-600">{topic.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{topic.value}%</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-10 rounded-3xl text-white relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                  <Brain size={200} />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center text-accent-cyan mb-8">
                     <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI Predictive Insight</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                     "Based on your current trajectory in DSA and Python, you are on track to achieve a <span className="text-accent-cyan font-bold">95%+ score</span> in our next FAANG simulation. Focusing on system design will broaden your senior eligibility."
                  </p>
                  <Button variant="gradient" className="gap-2">View Learning Path <TrendingUp size={18} /></Button>
               </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <BarChart3 size={24} className="text-primary-blue" /> Competitive Benchmarking
               </h3>
               <div className="space-y-6">
                  {[
                     { label: "Logic Accuracy", val: 92, percentile: 98 },
                     { label: "Complexity Optimization", val: 84, percentile: 92 },
                     { label: "Problem Solving Velocity", val: 76, percentile: 85 },
                  ].map((item, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                           <span className="font-bold text-slate-600">{item.label}</span>
                           <span className="font-black text-slate-900">{item.val}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                           <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.val}%` }}
                              transition={{ duration: 1 }}
                              className="h-full bg-primary-blue rounded-full"
                           />
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                           Higher than {item.percentile}% of users
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
