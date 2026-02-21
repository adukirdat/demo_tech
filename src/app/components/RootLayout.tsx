import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  BookOpen, 
  History, 
  BarChart3, 
  User, 
  Users, 
  LogOut,
  BrainCircuit,
  Settings
} from 'lucide-react';
import { cn } from './ui';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/app', icon: LayoutDashboard },
  { label: 'Take Assessment', path: '/app/assessment', icon: BookOpen },
  { label: 'My Attempts', path: '/app/attempts', icon: History },
  { label: 'Analytics', path: '/app/analytics', icon: BarChart3 },
  { label: 'Profile', path: '/app/profile', icon: User },
];

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-bg-light overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-blue/30">
            <BrainCircuit size={24} />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">SkillGate <span className="text-accent-cyan italic">AI</span></span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary-blue/10 text-primary-blue" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <NavLink
            to="/app/profile"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1",
              isActive 
                ? "bg-primary-blue/10 text-primary-blue" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <Settings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-error-red/5 text-slate-600 hover:text-error-red transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Log out</span>
          </NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative bg-bg-light">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
