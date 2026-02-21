import React from 'react';
import { Link } from 'react-router';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, 
  Calendar, 
  ChevronRight, 
  Lightbulb, 
  Trophy,
  Target,
  Clock,
  ArrowUpRight,
  Brain
} from 'lucide-react';
import { Badge, Button, cn } from '../components/ui';
import { motion } from 'motion/react';

const radarData = [
  { subject: 'Arrays', A: 120, fullMark: 150 },
  { subject: 'Recursion', A: 98, fullMark: 150 },
  { subject: 'Graphs', A: 86, fullMark: 150 },
  { subject: 'Strings', A: 99, fullMark: 150 },
  { subject: 'DP', A: 85, fullMark: 150 },
  { subject: 'Sorting', A: 65, fullMark: 150 },
];

export function Dashboard() {
  const strongAreas = ['Arrays', 'Strings', 'Complexity Analysis'];
  const weakAreas = ['Dynamic Programming', 'Graph Theory'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back, Alex</h1>
          <p className="text-slate-500">Here's your latest technical readiness overview.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar size={16} /> 20 Feb 2026
          </Button>
          <Link to="/app/assessment">
            <Button variant="gradient" size="sm" className="gap-2">
              <Target size={16} /> Take New Assessment
            </Button>
          </Link>
        </div>
      </header>

      {/* Top Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-success-emerald/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-success-emerald/10 transition-colors"></div>
          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Readiness Level</p>
          <div className="flex items-end gap-3">
            <h2 className="text-4xl font-black text-slate-900 leading-none">Industry Ready</h2>
            <div className="w-3 h-3 rounded-full bg-success-emerald animate-pulse mb-1"></div>
          </div>
          <div className="mt-4">
            <Badge variant="ready" className="text-xs uppercase font-bold py-1">Top 5% of Candidates</Badge>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-primary-blue/10 transition-colors"></div>
          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Overall Score</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-black text-slate-900 leading-none">88.4%</h2>
            <span className="text-success-emerald text-sm font-bold flex items-center gap-1">
              <TrendingUp size={14} /> +2.1%
            </span>
          </div>
          <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '88.4%' }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="h-full bg-primary-blue rounded-full"
             />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-bl-full -mr-4 -mt-4 group-hover:bg-accent-cyan/10 transition-colors"></div>
          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Last Attempt</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
               <Clock size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">14 Feb 2026</h2>
              <p className="text-xs text-slate-500">Python Mastery Challenge</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/app/evaluation">
              <Button variant="ghost" size="sm" className="w-full text-xs font-bold justify-between border border-slate-100">
                View Report <ChevronRight size={14} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Radar Chart Card */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <div>
                 <h3 className="text-lg font-bold">Topic Mastery</h3>
                 <p className="text-sm text-slate-500">Cross-domain skill distribution</p>
              </div>
              <div className="flex gap-2">
                 <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-primary-blue/60"></div>
                    <span className="text-xs font-medium text-slate-500">Current</span>
                 </div>
              </div>
           </div>

           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                 <PolarGrid stroke="#e2e8f0" />
                 <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                 <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                 <Radar
                   name="Score"
                   dataKey="A"
                   stroke="#1E3A8A"
                   fill="#1E3A8A"
                   fillOpacity={0.15}
                 />
               </RadarChart>
             </ResponsiveContainer>
           </div>

           <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-50">
              <div className="space-y-4">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Strong Areas</h4>
                 <div className="flex flex-wrap gap-2">
                    {strongAreas.map(area => (
                       <Badge key={area} variant="success">{area}</Badge>
                    ))}
                 </div>
              </div>
              <div className="space-y-4">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Weak Areas</h4>
                 <div className="flex flex-wrap gap-2">
                    {weakAreas.map(area => (
                       <Badge key={area} variant="warning">{area}</Badge>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Recommendations & AI Insights */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Brain size={80} />
              </div>
              <div className="relative z-10">
                 <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center text-accent-cyan mb-6">
                    <Lightbulb size={20} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 leading-tight">AI Recommendation</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    "Your logic structuring is excellent, but you struggle with edge-case handling in recursive problems. Focus on <span className="text-accent-cyan font-bold">Complexity & Graphs</span> for your next improvement cycle."
                 </p>
                 <Link to="/app/assessment">
                    <Button variant="gradient" className="w-full text-sm font-bold shadow-none">
                       Start Learning Path
                    </Button>
                 </Link>
              </div>
           </div>

           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                    <Trophy size={16} />
                 </div>
                 <h3 className="font-bold">Next Milestone</h3>
              </div>
              <div className="space-y-4">
                 <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                       <p className="text-sm font-bold">Master Graph Algorithms</p>
                       <p className="text-xs text-slate-500">Score 90%+ in Graphs</p>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400" />
                 </div>
                 <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between opacity-50">
                    <div>
                       <p className="text-sm font-bold">FAANG Readiness</p>
                       <p className="text-xs text-slate-500">Complete 5 simulations</p>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
