import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertCircle,
  HelpCircle,
  Hash,
  Activity,
  Code,
  BrainCircuit,
  BookOpen
} from 'lucide-react';
import { Badge, Button, cn } from '../components/ui';
import { useNavigate, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export function Assessment() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setProgress(((currentStep + 1) / 5) * 100);
  }, [currentStep]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    navigate('/app/evaluation');
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      {/* Top Navigation / Progress */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
             className="h-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]"
           />
        </div>
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-slate-900">
              {currentStep + 1}
           </div>
           <div>
              <h2 className="text-lg font-bold">Python Mastery Challenge</h2>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Question 4 of 5</p>
           </div>
        </div>

        <div className="flex items-center gap-6">
           <div className={cn(
             "flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold border transition-colors",
             timeLeft < 300 ? "bg-error-red/10 text-error-red border-error-red/20" : "bg-slate-50 text-slate-900 border-slate-100"
           )}>
              <Clock size={18} />
              {formatTime(timeLeft)}
           </div>
           <Link to="/app">
             <Button variant="outline" size="sm" className="hidden md:inline-flex">Save & Exit</Button>
           </Link>
        </div>
      </header>

      {/* Main Panel */}
      <div className="flex-1 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[400px]">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                 <Badge variant="neutral" className="gap-1.5"><Hash size={12} /> Recursion</Badge>
                 <Badge variant="ready" className="gap-1.5"><Activity size={12} /> Medium Difficulty</Badge>
                 <Badge variant="warning" className="gap-1.5 font-bold">15 pts Weight</Badge>
              </div>

              <div className="prose prose-slate max-w-none mb-10">
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Analyze the following recursive function and provide the reasoning for its time complexity and potential stack overflow scenarios.</h3>
                 <div className="p-6 bg-slate-900 rounded-xl font-mono text-sm text-slate-300 relative group">
                    <div className="absolute top-4 right-4 text-slate-600 font-bold text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">Python 3.10</div>
                    <pre className="overflow-x-auto">
{`def solve(n, memo={}):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    
    memo[n] = solve(n - 1, memo) + solve(n - 2, memo)
    return memo[n]`}
                    </pre>
                 </div>
              </div>

              <div className="space-y-6">
                 <div>
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Complexity & Logic Explanation</label>
                    <textarea 
                      className="w-full min-h-[120px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                      placeholder="Explain the time complexity and base cases..."
                    ></textarea>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Expected Output for solve(10)</label>
                      <input 
                        type="text" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                        placeholder="e.g. 55"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Time Complexity Class</label>
                      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all appearance-none cursor-pointer">
                         <option>O(2^n)</option>
                         <option>O(n)</option>
                         <option>O(log n)</option>
                         <option>O(n^2)</option>
                      </select>
                    </div>
                 </div>
              </div>
           </section>

           <footer className="flex items-center justify-between pb-10">
              <Button variant="outline" size="md" className="gap-2" onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}>
                 <ChevronLeft size={20} /> Previous
              </Button>
              <div className="flex gap-4">
                 <Button variant="outline" size="md" className="gap-2" onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}>
                    Skip
                 </Button>
                 <Button variant="primary" size="md" className="gap-2" onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}>
                    Next Question <ChevronRight size={20} />
                 </Button>
                 <Button variant="gradient" size="md" className="gap-2" onClick={handleSubmit}>
                    Submit Assessment <Send size={20} />
                 </Button>
              </div>
           </footer>
        </div>

        {/* Right Sidebar - Status */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold mb-6 flex items-center gap-2">
                 <Activity size={18} className="text-primary-blue" /> Assessment Overview
              </h4>
              <div className="grid grid-cols-5 gap-3">
                 {[1, 2, 3, 4, 5].map((q) => (
                    <button 
                      key={q}
                      onClick={() => setCurrentStep(q-1)}
                      className={cn(
                        "h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all border",
                        currentStep === q-1 
                          ? "bg-primary-blue text-white border-primary-blue shadow-lg shadow-primary-blue/30 scale-110" 
                          : q < currentStep + 1 
                            ? "bg-success-emerald/10 text-success-emerald border-success-emerald/20" 
                            : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100"
                      )}
                    >
                       {q}
                    </button>
                 ))}
              </div>
              
              <div className="mt-8 space-y-4">
                 <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Attempted</span>
                    <span className="font-bold">3/5</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Marked for Review</span>
                    <span className="font-bold">0</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Flagged Logic</span>
                    <Badge variant="warning">1 Alert</Badge>
                 </div>
              </div>
           </div>

           <div className="bg-primary-blue/5 border border-primary-blue/10 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                 <BrainCircuit size={100} />
              </div>
              <h4 className="font-bold text-primary-blue mb-3 flex items-center gap-2">
                 <HelpCircle size={18} /> AI Assistant
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                 "Our AI is monitoring your problem-solving process. Take your time to explain your logic clearly to maximize your semantic score."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
