import React, { useState } from 'react';
import { 
  Trophy, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Brain,
  Award,
  Share2,
  FileText,
  BarChart4,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { Badge, Button, cn } from '../components/ui';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export function Evaluation() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      title: "Data Structures - Linked Lists",
      userAnswer: "The logic for the reverse operation uses a three-pointer approach...",
      aiScore: 92,
      aiFeedback: "Excellent understanding of pointer manipulation. Edge case (single node list) handled correctly. Slight room for improvement in descriptive naming.",
      signals: ["Logic: High", "Complexity: Optimal", "Edge Cases: Handled"]
    },
    {
      id: 2,
      title: "Algorithm Efficiency - Sorting",
      userAnswer: "Using Merge Sort ensures O(n log n) even in the worst case...",
      aiScore: 85,
      aiFeedback: "Solid grasp of stable sorting. AI detected a slight inefficiency in the merge logic for small arrays.",
      signals: ["Logic: Strong", "Complexity: Near Optimal", "Edge Cases: Partial"]
    },
    {
      id: 3,
      title: "Recursion & Dynamic Programming",
      userAnswer: "The memoization technique reduces the exponential time complexity...",
      aiScore: 78,
      aiFeedback: "Conceptual understanding is clear. However, you missed the space complexity tradeoff with large memo tables.",
      signals: ["Logic: Fair", "Complexity: Sub-optimal", "Edge Cases: Missing Large Inputs"]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <Link to="/app" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-blue text-sm font-bold mb-4 transition-colors group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
           </Link>
           <h1 className="text-3xl font-bold tracking-tight text-slate-900">Assessment Evaluation</h1>
           <p className="text-slate-500">Python Mastery Challenge completed on Feb 20, 2026</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 size={16} /> Share
          </Button>
          <Button variant="gradient" size="sm" className="gap-2">
            <FileText size={16} /> Download PDF
          </Button>
        </div>
      </header>

      {/* Main Score Card */}
      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 bg-white p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/5 via-transparent to-accent-cyan/5"></div>
          
          <div className="relative mb-8">
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[12px] border-slate-50 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                   <circle 
                     cx="50%" cy="50%" r="44%" 
                     className="fill-none stroke-primary-blue stroke-[12px] [stroke-dasharray:350] [stroke-dashoffset:40]"
                   />
                </svg>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">88</span>
                   <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">% Total</span>
                </div>
             </div>
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute -top-4 -right-4 w-12 h-12 bg-accent-cyan/20 blur-xl rounded-full"
             />
          </div>

          <div className="relative">
             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-success-emerald text-white font-bold text-lg shadow-lg shadow-success-emerald/20 mb-4 group cursor-default">
                <Award size={20} className="group-hover:rotate-12 transition-transform" />
                Industry Ready
                <div className="absolute inset-0 rounded-2xl ring-4 ring-success-emerald/30 animate-pulse"></div>
             </div>
             <p className="text-slate-500 text-sm font-medium">Ranked in the top <span className="text-primary-blue font-bold">5%</span> worldwide</p>
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-8 flex flex-col justify-center">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-2">
                 <Brain size={24} className="text-primary-blue" />
                 <h3 className="text-xl font-bold">AI Summary</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                 Alex demonstrated a <span className="text-primary-blue font-bold">strong logical structuring</span> capability, particularly in the Python Mastery segment. AI analysis indicates that while core logic is optimal, there is a minor tendency to overlook edge-cases in highly recursive problems. Your <span className="text-accent-cyan font-bold">problem-solving velocity</span> is above average, placing you in the "Industry Ready" category.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                 {[
                   { label: "Logic", val: "A+", icon: CheckCircle2, color: "text-success-emerald" },
                   { label: "Complexity", val: "A", icon: Zap, color: "text-accent-cyan" },
                   { label: "Security", val: "B+", icon: Award, color: "text-primary-blue" },
                   { label: "Flow", val: "A-", icon: Brain, color: "text-slate-400" }
                 ].map((stat, i) => (
                    <div key={i} className="text-center md:text-left">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                       <div className="flex items-center justify-center md:justify-start gap-1.5">
                          <stat.icon size={14} className={stat.color} />
                          <span className="font-black text-slate-900">{stat.val}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded-3xl text-white">
                 <h4 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-4">Top Skills Detected</h4>
                 <div className="flex flex-wrap gap-2">
                    <Badge className="bg-white/10 text-white border-white/20">Memory Management</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">Pointer Logic</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">DRY Principles</Badge>
                 </div>
              </div>
              <div className="bg-accent-cyan p-6 rounded-3xl text-primary-blue">
                 <h4 className="font-bold text-sm text-primary-blue/50 uppercase tracking-widest mb-4 italic">Next Step Recommendation</h4>
                 <p className="text-sm font-bold leading-tight flex items-center gap-2">
                    Focus on Graph traversal algorithms <ArrowRight size={14} />
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Detailed Question Breakdown */}
      <section className="space-y-6">
         <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold flex items-center gap-3">
               <BarChart4 size={24} className="text-primary-blue" /> 
               Logic Performance Breakdown
            </h3>
            <span className="text-slate-400 text-sm font-medium">3 Questions Analyzed</span>
         </div>

         <div className="space-y-4">
            {questions.map((q, idx) => (
               <div key={q.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm">
                  <button 
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                     <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center font-bold border",
                          q.aiScore > 80 ? "bg-success-emerald/10 text-success-emerald border-success-emerald/20" : "bg-warning-amber/10 text-warning-amber border-warning-amber/20"
                        )}>
                           {q.aiScore}%
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">{q.title}</h4>
                           <p className="text-xs text-slate-500 font-medium italic">AI Semantic Verified</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-2">
                           {q.signals.map((sig, i) => (
                              <Badge key={i} variant="neutral" className="text-[10px] uppercase font-bold px-2">{sig}</Badge>
                           ))}
                        </div>
                        {expanded === idx ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                     </div>
                  </button>

                  <AnimatePresence>
                     {expanded === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <div className="p-8 border-t border-slate-100 bg-slate-50 grid lg:grid-cols-2 gap-10">
                              <div className="space-y-4">
                                 <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Explanation</h5>
                                 <div className="p-5 bg-white rounded-xl border border-slate-200 text-sm text-slate-600 leading-relaxed italic relative">
                                    <div className="absolute -left-1 -top-1 w-2 h-2 bg-primary-blue rounded-full"></div>
                                    "{q.userAnswer}"
                                 </div>
                              </div>
                              <div className="space-y-4">
                                 <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Brain size={12} className="text-primary-blue" /> AI Analysis & Feedback
                                 </h5>
                                 <div className="p-5 bg-primary-blue/5 rounded-xl border border-primary-blue/10 text-sm text-slate-700 leading-relaxed">
                                    {q.aiFeedback}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </section>

      <footer className="pt-10 flex justify-center">
         <Link to="/app">
            <Button variant="outline" size="lg" className="px-10 font-bold border-2">Return to Dashboard</Button>
         </Link>
      </footer>
    </div>
  );
}
