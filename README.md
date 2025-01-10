# 📚 Library Management API

A RESTful API for managing a library system. This application allows users to manage books, handle borrowing/returning functionality, and rate books.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (bundled with Node.js)

---

### Installation

To install dependencies, run the following command in the project directory:

```bash
npm install
```

---

## 🛠 Running the Application

### Development Mode (Hot-Reloading)

Start the application in development mode using `nodemon`:

The application will start on port 3000 by default or use the value specified in the .env file 
under the PORT variable. You can access the API at:

```bash
npm run dev
```

### Production Mode

1. **Build the TypeScript files:**

   ```bash
   npm run build
   ```

2. **Run the compiled JavaScript files:**

   ```bash
   npm run start
   ```

---

## 📖 API Endpoints

### 🧑‍🤝‍🧑 User Management

- **List All Users:** `GET /users`
- **Get User Details:** `GET /users/:id`
- **Create a New User:** `POST /users`

---

### 📚 Book Management

- **List All Books:** `GET /books`
- **Get Book Details:** `GET /books/:id`
- **Create a New Book:** `POST /books`

---

### 🔄 Borrow and Return Management

- **Borrow a Book:** `POST /borrow/:userId/borrow/:bookId`
- **Return a Book:** `POST /borrow/:userId/return/:bookId`

---

## 🗂 Database Schema Initialization

This project uses **Sequelize ORM** for database management but relies on a pre-defined **DDL script** for precise schema control.

### Key Details

- **Script Location:**  
  `library-management/src/database/schema.sql`
  
- **Initialization Logic:**  
  Implemented in `initializeDatabase` function inside:  
  `library-management/src/database/database.ts`

### How It Works

The DDL script is executed line-by-line during the application's startup to ensure the database schema is consistently initialized and easy to update.

---

## 📜 Scripts

- **Start Development Mode:**  
  ```bash
  npm run dev
  ```

- **Build the Project:**  
  ```bash
  npm run build
  ```

- **Run in Production Mode:**  
  ```bash
  npm run start
  ```

---

## 🧪 Testing

To test the API, use **Postman** or `cURL`.  
A **Postman collection** is provided for quick setup and testing.

---

### 📬 Feedback

If you have any feedback or suggestions, feel free to reach out or create an issue in the repository.
