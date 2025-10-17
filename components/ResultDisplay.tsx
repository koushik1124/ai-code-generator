
import React, { useState } from 'react';
import type { CodeSolution } from '../types';

interface ResultDisplayProps {
  solution: CodeSolution;
  language: string;
}

const ResultCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-800/50 rounded-lg border border-gray-700 shadow-lg mb-6 overflow-hidden">
    <h3 className="text-lg font-semibold text-cyan-400 bg-gray-800 px-6 py-3 border-b border-gray-700">{title}</h3>
    <div className="p-6">
      {children}
    </div>
  </div>
);

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-gray-300 font-mono text-xs px-3 py-1 rounded-md transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ solution, language }) => {
  return (
    <div className="space-y-8">
      <ResultCard title="Code Solution">
        <div className="relative bg-gray-900 rounded-md overflow-hidden">
          <CopyButton textToCopy={solution.code} />
          <div className="absolute top-3 left-4 text-gray-400 font-mono text-xs capitalize">{language}</div>
          <pre className="p-4 pt-10 text-sm overflow-x-auto">
            <code className={`language-${language}`}>
              {solution.code}
            </code>
          </pre>
        </div>
      </ResultCard>

      <ResultCard title="Explanation">
        <div className="prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-wrap">
          <p>{solution.explanation}</p>
        </div>
      </ResultCard>

      <ResultCard title="Optimal Solution Analysis">
        <div className="prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-wrap">
          <p>{solution.optimalSolutionAnalysis}</p>
        </div>
      </ResultCard>
    </div>
  );
};
