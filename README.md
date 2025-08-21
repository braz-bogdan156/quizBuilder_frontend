# Quiz Builder – Frontend

## 🚀 Overview
Frontend UI for the **Quiz Builder** application.  
Built with **React + TypeScript** and connected to the backend API.  

---

## 🛠 Tech Stack
- React.js + React Hook Form
- TypeScript
- Axios (API requests)
- CSS Modules (or custom CSS)

---

## ⚙️ Setup & Run

### 1. Install dependencies
```bash
cd frontend
npm install
2. Configure API base URL
Set backend API URL in frontend/services/api.ts:

export const API_URL = "http://localhost:5000";

3. Run dev server
bash

npm run dev
Frontend will start at:



http://localhost:5173
📌 Pages
1. Quiz Creation Page
/create

Add quiz title

Add dynamic questions

Supported question types:

Boolean (True/False)

Input (short text answer)

Checkbox (multiple correct answers)

Submit form → POST /quizzes

2. Quiz List Page
/quizzes

Fetches list of all quizzes from GET /quizzes

Displays:

Quiz title

Number of questions

Each item links to quiz details page

Includes delete button → DELETE /quizzes/:id

3. Quiz Detail Page
/quizzes/[id]

Fetches quiz details from GET /quizzes/:id

Displays:

Title

Questions (read-only mode)

📂 Project Structure
bash

frontend/
├── assets/              # Static icons, images
├── components/          # Reusable UI components and not only
├── pages/               # Router pages
├── services/            # API client
├── styles/              # styles
├── types/               # types   
├── tsconfig.json
└── package.json