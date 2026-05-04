# SmartBreak Project Overview

SmartBreak is a minimalist focus and break timer app designed to enhance workflow efficiency with smart suggestions and session tracking. It is a web application built with React and Vite, utilizing Tailwind CSS for styling. The application integrates with the Gemini API.

## Technologies Used

*   **Frontend:** React, Vite
*   **Styling:** Tailwind CSS
*   **API Integration:** Gemini API (`@google/genai`)
*   **Backend (likely):** Express (indicated by `package.json` dependency)
*   **Language:** TypeScript
*   **Package Manager:** npm

## Building and Running

### Prerequisites

*   Node.js installed.
*   A Gemini API Key.

### Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and set your `GEMINI_API_KEY`.
    ```
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    ```
    (Note: `APP_URL` is automatically injected by AI Studio at runtime.)
3.  **Run the Application:**
    ```bash
    npm run dev
    ```
    The application will typically run on `http://localhost:3000`.

### Other Commands

*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Preview Production Build:**
    ```bash
    npm run preview
    ```
*   **Clean Build Artifacts:**
    ```bash
    npm run clean
    ```
*   **Lint (TypeScript type checking):**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** Uses Tailwind CSS.
*   **Aliases:** The project uses path aliases, with `@/*` resolving to the project root directory.
*   **TypeScript:** The project is configured with TypeScript for type safety.

