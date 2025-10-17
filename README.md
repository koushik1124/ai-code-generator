AI Code Generator (Frontend) – Powered by Google AI Studio
This is a React + TypeScript app that enables users to ask coding questions and get AI-powered, beginner-friendly code solutions with explanations—powered directly by Google AI Studio’s Gemini API.

Features
Submit coding questions – Python-focused by default.

Uses Google AI Studio (Gemini API) for instant answers, optimal code, and clear explanations.

Simple, modern UI for coding help.

Easy deployment via Vite (see vite.config.ts).

Tech Stack
Frontend: React.js, TypeScript, Vite

AI: Google AI Studio (Gemini API), integrated via API calls from React

Getting Started
Clone the repo & install dependencies:

bash
npm install
Configure .env.local:

Set your Google AI Studio API endpoint or proxy (if using backend middleware).

Run the app:

bash
npm run dev
Ask any coding question in the app!

How it Works
All question requests are sent from the frontend to Google AI Studio using secure API calls.

Responses include a simplified problem statement, well-commented code, and a clear explanation.

Key Files
/components: UI building blocks

/services: API utilities (handles requests to Gemini API)

App.tsx: App logic and routing

.env.local: API secrets/config

vite.config.ts: Build and deployment config

Example Usage
Q: “Write a function to check if a string is a palindrome.”

AI Studio’s Gemini returns:

Simplified explanation of the task.

Python code with comments.

Stepwise solution overview.

Customize & Extend
Update the AI Studio prompt for different coding languages or deeper explanations.

Style the app for your workflow.

Add authentication or user history features as needed.