import React from 'react';

const IndexSectionCustomComponents2: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <div className="lg:col-span-6 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-zinc-400 uppercase tracking-wider">Design System Framework</span>
        </div>
        <h1 className="font-heading text-5xl lg:text-7xl text-white leading-none tracking-tight">
          <span className="block">Build with</span>
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Atomic Precision</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
          A comprehensive methodology for creating scalable, maintainable design systems. From tokens to products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-full hover:from-violet-500 hover:to-fuchsia-500 transition-all">
            <span>Explore System</span>
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Watch Demo</span>
          </a>
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-3 gap-3">
            <div className="col-span-1 space-y-3">
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-violet-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-fuchsia-500" />
              </div>
            </div>
            <div className="col-span-1 space-y-3 pt-6">
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                </div>
              </div>
              <div className="aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-center">
                <div className="w-full h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-4 h-4 rounded bg-emerald-500" />
                  <div className="w-4 h-4 rounded bg-amber-500" />
                  <div className="w-4 h-4 rounded bg-rose-500" />
                  <div className="w-4 h-4 rounded bg-sky-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-3 pt-12">
              <div className="aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-zinc-800" />
                  <div className="h-2 w-3/4 rounded-full bg-zinc-800" />
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx={12} cy={12} r={3} />
                  <circle cx={12} cy={4} r={2} />
                  <circle cx={12} cy={20} r={2} />
                  <circle cx={4} cy={12} r={2} />
                  <circle cx={20} cy={12} r={2} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;