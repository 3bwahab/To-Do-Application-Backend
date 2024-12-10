# **To-Do Application Backend**

A simple and efficient backend server for managing to-do tasks, built with **Node.js** and **Express.js**. This project provides RESTful APIs to create, read, update, and delete tasks, with features designed for scalability and usability.

---

## **Features**
- User-friendly RESTful APIs for managing tasks.
- CRUD operations: Create, Read, Update, and Delete tasks.
- Secure user authentication with **JWT**.
- Persistent task storage with **MongoDB**.
- Input validation and error handling for robust API usage.
- Lightweight and scalable architecture.

---

## **Technologies Used**
- **Node.js**: Server-side runtime for building scalable applications.
- **Express.js**: Framework for simplified routing and middleware management.
- **MongoDB**: NoSQL database for task persistence.
- **Mongoose**: ODM for MongoDB to structure and validate task data.
- **JWT**: Authentication for secure API access.
- **dotenv**: For managing environment variables.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-backend.git
   cd todo-app-backend
## **Install dependencies:**

    ```bash
    npm install

### **Set up environment variables:**
Create a .env file in the root directory and define the following variables:

    ```env
    Copy code
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

### Start the server:

```bash
    npm start
