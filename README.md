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

2️⃣ Install Dependencies

3️⃣ Set Up Environment Variables

	Create a .env file inside the server directory and add:

 4️⃣ Start the Server & Client

 	npm run start:dev

  🌍 Deployment

🔵 Backend (Server)

The server is deployed on Render, and the PostgreSQL database is hosted on Render as well.

🟢 Frontend (Client)

The frontend is deployed on Netlify, making it accessible via a live URL.

📌 Future Enhancements

🔹 Add sorting & filtering to organize tickets by priority or due date
🔹 Implement drag-and-drop for a smoother Kanban experience
🔹 Add user roles (e.g., Admin, Developer) for better permissions control
🔹 Improve error handling & UI feedback

📜 License

This project is open-source and free to use. Feel free to fork and contribute!
