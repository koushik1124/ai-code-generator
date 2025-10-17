
import React from 'react';

const BrainIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2.5 2.5 0 01-5 0 2.5 2.5 0 015 0zM15 7a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zM9 10h6" />
  </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-3">
          <BrainIcon />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            AI Code Generator
          </h1>
        </div>
      </div>
    </header>
  );
};
