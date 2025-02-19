Kanban Board with JWT Authentication

📌 Project Overview

This Kanban Board is a full-stack application designed for agile teams to securely manage tasks. It allows users to log in with authentication, create and manage tickets, and organize tasks into different workflow stages (e.g., To Do, In Progress, Done).

The application is built with:
	•	Frontend: React + TypeScript + Vite
	•	Backend: Express.js + PostgreSQL + Sequelize
	•	Authentication: JSON Web Tokens (JWT)

🚀 Features

🔐 Authentication

✅ Users can log in securely with a username and password
✅ Authentication is handled using JWTs, ensuring security
✅ Invalid credentials return an error message
✅ Users stay logged in until they log out or their session expires
✅ If inactive, session expires automatically and redirects to login

📌 Kanban Board

✅ Users can view, create, edit, and delete tickets
✅ Tickets can be moved between To Do, In Progress, and Done
✅ Only authenticated users can access the board

🖥️ Full-Stack Architecture

✅ Backend API manages authentication, users, and ticket data
✅ Frontend UI dynamically displays tasks and swimlanes
✅ Database persistence ensures data is stored securely in PostgreSQL
✅ LocalStorage is used for storing JWTs on the client side

🛠️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/YOUR_GITHUB_USERNAME/Kanban-Board.git
cd Kanban-Board

2️⃣ Install Dependencies

Run this command in the project root:

3️⃣ Set Up Environment Variables

Create a .env file inside the server directory and add:
