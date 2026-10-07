import React from 'react';

export const SectionSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-6 py-24 animate-pulse">
    <div className="h-6 bg-slate-200 rounded-full w-48 mb-4"></div>
    <div className="h-10 bg-slate-200 rounded-xl w-3/4 mb-12"></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-slate-100 rounded-3xl"></div>
      ))}
    </div>
  </div>
);
