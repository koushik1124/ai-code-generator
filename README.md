🧠 AI Code Generator (Frontend) – Powered by Google AI Studio

An interactive React + TypeScript web application that allows users to ask coding questions and receive AI-generated, beginner-friendly code solutions with step-by-step explanations. The app leverages Google AI Studio’s Gemini API to provide accurate, educational, and context-aware coding assistance.

🚀 Features

💬 Ask Coding Questions – Supports Python by default (can be extended to other languages).

⚡ AI-Powered Answers – Uses Google AI Studio (Gemini API) to generate optimal solutions with clear explanations.

🎨 Modern UI – Clean and responsive interface for smooth user interaction.

🔧 Easy Deployment – Built with Vite for fast builds and simple configuration.

🛠 Tech Stack

Frontend: React.js, TypeScript, Vite

AI Integration: Google AI Studio (Gemini API) via REST API calls

Environment Management: .env.local for API configuration

⚙️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/ai-code-generator.git
cd ai-code-generator

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env.local file in the root directory and add your Google AI Studio API endpoint or proxy:

VITE_GEMINI_API_KEY=your_api_key_here

4️⃣ Run the App
npm run dev


Then open your browser at http://localhost:5173/
 and start exploring!

🧩 Project Structure
src/
 ├── components/       # UI components and layout
 ├── services/         # API utility functions (Gemini API integration)
 ├── App.tsx           # Main app logic and routing
 ├── vite.config.ts    # Build configuration
 └── .env.local        # API keys and environment variables

💡 How It Works

Users submit coding-related questions through the UI.

The app securely sends the prompt to Google AI Studio (Gemini API).

Gemini returns:

A simplified explanation of the task.

Well-documented Python code.

A step-by-step reasoning summary.

🧠 Example Query

Q: “Write a function to check if a string is a palindrome.”

Response from Gemini:

Task explanation in plain language.

Clean, commented Python code.

Logical breakdown of each step.

🧩 Customization Ideas

Add multi-language support (e.g., JavaScript, C++, Java).

Integrate user authentication for personalized sessions.

Implement prompt history and AI response saving.

Enhance styling and add syntax highlighting for better readability.