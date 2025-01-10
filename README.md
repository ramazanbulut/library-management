# Library Management API

This is a RESTful API for managing a library system. It allows users to manage books and borrow/return functionality with user ratings.

---

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

---

### Install Dependencies

Run the following command in the project directory:

```bash
npm install
```

---

## Running the Project

### Development Mode

To run the application in development mode with hot-reloading (using `nodemon`):

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

## API Endpoints

### User Management

- **List All Users**
  ```http
  GET /users
  ```

- **Get User Details**
  ```http
  GET /users/:id
  ```

- **Create a New User**
  ```http
  POST /users
  Body:
  {
    "name": "John Doe"
  }
  ```

---

### Book Management

- **List All Books**
  ```http
  GET /books
  ```

- **Get Book Details**
  ```http
  GET /books/:id
  ```

- **Create a New Book**
  ```http
  POST /books
  Body:
  {
    "name": "1984"
  }
  ```

---

### Borrow and Return

- **Borrow a Book**
  ```http
  POST /borrow/:userId/borrow/:bookId
  ```

- **Return a Book**
  ```http
  POST /borrow/:userId/return/:bookId
  Body:
  {
    "score": 8
  }
  ```

---

## Database

This project uses **SQLite** as the database. The database file (`library.db`) is automatically created in the project directory. If you need to reset the database, set the `sequelize.sync()` configuration to `force: true`.

---

## Scripts

- **Development Mode:**
  ```bash
  npm run dev
  ```

- **Build:**
  ```bash
  npm run build
  ```

- **Production Mode:**
  ```bash
  npm run start
  ```

---

## Testing

To test the API, you can use Postman or `cURL`. A Postman collection file is provided for your convenience.

- **Postman Collection File:** `Library Case API Collection.postman_collection.json`

---
