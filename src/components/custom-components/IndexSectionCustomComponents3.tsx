import React from 'react';

const IndexSectionCustomComponents3: React.FC = () => {
    return (
        <section id="hierarchy" className="py-24 lg:py-32 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-2xl mb-16">
      <span className="text-xs text-violet-400 uppercase tracking-widest">The Hierarchy</span>
      <h2 className="font-heading text-4xl lg:text-5xl text-white mt-4 tracking-tight">Nine Levels of Abstraction</h2>
      <p className="text-zinc-400 mt-4 text-lg">From the smallest design decisions to complete digital products, each layer builds upon the last.</p>
    </div>
    <div className="space-y-4">
      <div className="hierarchy-item group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all cursor-pointer">
          <div className="flex items-center gap-6 lg:w-1/3">
            <span className="text-5xl font-heading text-zinc-700 group-hover:text-violet-500 transition-colors">01</span>
            <div>
              <h3 className="font-heading text-xl text-white">Tokens</h3>
              <p className="text-sm text-zinc-500">Design decisions</p>
            </div>
          </div>
          <p className="text-zinc-400 lg:flex-1">Colors, typography, spacing, shadows, and motion values. The DNA of your design system.</p>
          <div className="flex gap-2">
            <span className="w-6 h-6 rounded bg-violet-500" />
            <span className="w-6 h-6 rounded bg-fuchsia-500" />
            <span className="w-6 h-6 rounded bg-pink-500" />
          </div>
        </div>
      </div>
      <div className="hierarchy-item group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all cursor-pointer">
          <div className="flex items-center gap-6 lg:w-1/3">
            <span className="text-5xl font-heading text-zinc-700 group-hover:text-violet-500 transition-colors">02</span>
            <div>
              <h3 className="font-heading text-xl text-white">Atoms</h3>
              <p className="text-sm text-zinc-500">Basic elements</p>
            </div>
          </div>
          <p className="text-zinc-400 lg:flex-1">Buttons, inputs, labels, icons. Indivisible UI components that can't be broken down further.</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs bg-violet-500/20 text-violet-400 rounded-full">btn</span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full">input</span>
          </div>
        </div>
      </div>
      <div className="hierarchy-item group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all cursor-pointer">
          <div className="flex items-center gap-6 lg:w-1/3">
            <span className="text-5xl font-heading text-zinc-700 group-hover:text-violet-500 transition-colors">03</span>
            <div>
              <h3 className="font-heading text-xl text-white">Molecules</h3>
              <p className="text-sm text-zinc-500">Combined atoms</p>
            </div>
          </div>
          <p className="text-zinc-400 lg:flex-1">Search bars, form fields with labels, card headers. Simple groups of atoms working together.</p>
          <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-lg">
            <div className="w-4 h-4 rounded bg-zinc-600" />
            <div className="w-16 h-2 rounded bg-zinc-600" />
          </div>
        </div>
      </div>
      <div className="hierarchy-item group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all cursor-pointer">
          <div className="flex items-center gap-6 lg:w-1/3">
            <span className="text-5xl font-heading text-zinc-700 group-hover:text-violet-500 transition-colors">04</span>
            <div>
              <h3 className="font-heading text-xl text-white">Organisms</h3>
              <p className="text-sm text-zinc-500">Complex components</p>
            </div>
          </div>
          <p className="text-zinc-400 lg:flex-1">Headers, footers, product cards, comment sections. Distinct sections of an interface.</p>
          <div className="flex flex-col gap-1 p-2 bg-zinc-800 rounded-lg">
            <div className="w-20 h-1.5 rounded bg-zinc-600" />
            <div className="w-16 h-1.5 rounded bg-zinc-700" />
            <div className="w-12 h-1.5 rounded bg-zinc-700" />
          </div>
        </div>
      </div>
      <div className="hierarchy-item group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all cursor-pointer">
          <div className="flex items-center gap-6 lg:w-1/3">
            <span className="text-5xl font-heading text-zinc-700 group-hover:text-violet-500 transition-colors">05</span>
            <div>
              <h3 className="font-heading text-xl text-white">Templates</h3>
              <p className="text-sm text-zinc-500">Page structures</p>
            </div>
          </div>
          <p className="text-zinc-400 lg:flex-1">Wireframe-level page layouts. Content-agnostic structures that define the skeleton.</p>
          <div className="grid grid-cols-3 gap-1 p-2 bg-zinc-800 rounded-lg w-24">
            <div className="col-span-3 h-2 rounded bg-zinc-600" />
            <div className="col-span-2 h-4 rounded bg-zinc-700" />
            <div className="col-span-1 h-4 rounded bg-zinc-700" />
            <div className="col-span-3 h-1 rounded bg-zinc-600" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="hierarchy-item group">
          <div className="h-full flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-fuchsia-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-zinc-700 group-hover:text-fuchsia-500 transition-colors">06</span>
              <div>
                <h3 className="font-heading text-xl text-white">Pages</h3>
                <p className="text-sm text-zinc-500">Real content</p>
              </div>
            </div>
            <p className="text-zinc-400 flex-1">Templates populated with actual content. The high-fidelity representation users see.</p>
          </div>
        </div>
        <div className="hierarchy-item group">
          <div className="h-full flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-fuchsia-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-zinc-700 group-hover:text-fuchsia-500 transition-colors">07</span>
              <div>
                <h3 className="font-heading text-xl text-white">Modules</h3>
                <p className="text-sm text-zinc-500">Feature sets</p>
              </div>
            </div>
            <p className="text-zinc-400 flex-1">Self-contained features spanning multiple pages. Authentication, checkout, onboarding flows.</p>
          </div>
        </div>
        <div className="hierarchy-item group">
          <div className="h-full flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-zinc-700 group-hover:text-pink-500 transition-colors">08</span>
              <div>
                <h3 className="font-heading text-xl text-white">Projects</h3>
                <p className="text-sm text-zinc-500">Applications</p>
              </div>
            </div>
            <p className="text-zinc-400 flex-1">Complete applications or websites. A collection of modules forming a cohesive experience.</p>
          </div>
        </div>
        <div className="hierarchy-item group">
          <div className="h-full flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 hover:border-violet-500/50 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-violet-400 group-hover:text-violet-300 transition-colors">09</span>
              <div>
                <h3 className="font-heading text-xl text-white">Products</h3>
                <p className="text-sm text-violet-300/70">Ecosystems</p>
              </div>
            </div>
            <p className="text-zinc-300 flex-1">Multi-platform product suites. Web, mobile, desktop—unified by a single design system.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents3;