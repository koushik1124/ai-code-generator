
import React from 'react';

interface QuestionInputProps {
  question: string;
  onQuestionChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ question, onQuestionChange, onSubmit, isLoading }) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-1 border border-gray-700 focus-within:ring-2 focus-within:ring-cyan-500 transition-all">
      <textarea
        value={question}
        onChange={(e) => onQuestionChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., 'Implement a binary search algorithm in an optimized way.'"
        className="w-full h-32 p-4 bg-transparent text-gray-200 placeholder-gray-500 resize-none focus:outline-none"
        disabled={isLoading}
      />
      <div className="flex justify-end p-2 border-t border-gray-700">
         <span className="text-xs text-gray-500 mr-4 self-center">
            Ctrl/Cmd + Enter to submit
          </span>
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="px-6 py-2 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center"
        >
          {isLoading ? 'Generating...' : 'Generate Solution'}
          {!isLoading && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
