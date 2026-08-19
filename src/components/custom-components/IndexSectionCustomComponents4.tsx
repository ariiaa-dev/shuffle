import React from 'react';

const IndexSectionCustomComponents4: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 lg:p-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-heading text-4xl lg:text-5xl text-white tracking-tight">Start Building Your Design System</h2>
          <p className="text-white/80 text-lg">Download our comprehensive guide and component library to implement atomic design in your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 font-medium rounded-full hover:bg-zinc-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Guide</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              <span>View Documentation</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-end">
          <div className="relative w-80">
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx={12} cy={12} r={3} />
                      <circle cx={12} cy={4} r={2} />
                      <circle cx={12} cy={20} r={2} />
                      <circle cx={4} cy={12} r={2} />
                      <circle cx={20} cy={12} r={2} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Atomic-DS</p>
                    <p className="text-white/60 text-sm">v2.0.0</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Tokens</span>
                    <span className="text-white">248</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Components</span>
                    <span className="text-white">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Templates</span>
                    <span className="text-white">24</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-white/40">Last updated: Jan 2026</p>
                </div>
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

export default IndexSectionCustomComponents4;