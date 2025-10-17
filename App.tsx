
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { QuestionInput } from './components/QuestionInput';
import { ResultDisplay } from './components/ResultDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { IntroScreen } from './components/IntroScreen';
import { generateCodeSolution } from './services/geminiService';
import type { CodeSolution } from './types';
import { SUPPORTED_LANGUAGES } from './constants';

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [language, setLanguage] = useState<string>(SUPPORTED_LANGUAGES[0].id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CodeSolution | null>(null);

  const handleSubmit = useCallback(async () => {
    if (!question.trim()) {
      setError('Please enter a coding question.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const solution = await generateCodeSolution(question, language);
      setResult(solution);
    } catch (err) {
      console.error(err);
      setError('Failed to generate a solution. The model may be unavailable or the request timed out. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [question, language]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-400 mb-8">
            Select a language, describe your coding challenge, and let AI provide an optimal solution.
          </p>

          <LanguageSelector
            selectedLanguage={language}
            onSelectLanguage={setLanguage}
            disabled={isLoading}
          />
          
          <QuestionInput
            question={question}
            onQuestionChange={setQuestion}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {result && <ResultDisplay solution={result} language={language} />}
            {!isLoading && !error && !result && <IntroScreen />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
