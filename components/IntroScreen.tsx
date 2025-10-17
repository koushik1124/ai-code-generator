// FIX: Add React import to make JSX types available.
import React from 'react';

const FeatureCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-900/50 text-cyan-400 mb-4">
      {icon}
    </div>
    <h3 className="text-md font-semibold text-white">{title}</h3>
    <p className="mt-1 text-sm text-gray-400">{description}</p>
  </div>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const IntroScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-2">Welcome to Your AI Coding Partner</h2>
      <p className="text-gray-400 mb-8">Get instant, intelligent answers to your toughest coding problems.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard 
          icon={<CodeIcon />} 
          title="Code Generation" 
          description="Receive clean, commented, and ready-to-use code in your chosen language."
        />
        <FeatureCard 
          icon={<BookIcon />} 
          title="Simple Explanations" 
          description="Understand the 'how' and 'why' with step-by-step breakdowns of the solution."
        />
        <FeatureCard 
          icon={<BoltIcon />} 
          title="Performance Analysis" 
          description="Learn about the time and space complexity to ensure your solution is optimal."
        />
      </div>
    </div>
  );
};
