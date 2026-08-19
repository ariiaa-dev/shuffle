import React from 'react';

const IndexSectionCustomComponents1: React.FC = () => {
    return (
        <nav className="py-6 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <a href="#" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx={12} cy={12} r={3} /><circle cx={12} cy={4} r={2} /><circle cx={12} cy={20} r={2} /><circle cx={4} cy={12} r={2} /><circle cx={20} cy={12} r={2} /><circle cx="6.34" cy="6.34" r="1.5" /><circle cx="17.66" cy="17.66" r="1.5" /><circle cx="6.34" cy="17.66" r="1.5" /><circle cx="17.66" cy="6.34" r="1.5" /></svg>
      </div>
      <span className="font-heading text-xl text-white tracking-tight">Atomic-DS</span>
    </a>
    <div className="hidden md:flex items-center gap-8"><a href="#methodology" className="text-sm text-zinc-400 hover:text-white transition-colors">Methodology</a><a href="#hierarchy" className="text-sm text-zinc-400 hover:text-white transition-colors">Hierarchy</a><a href="#components" className="text-sm text-zinc-400 hover:text-white transition-colors">Components</a></div>
    <a href="#start" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors">
      <span>Get Started</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</nav>


    );
};

export default IndexSectionCustomComponents1;