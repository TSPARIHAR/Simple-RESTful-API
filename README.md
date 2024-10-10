# Simple RESTful API

## Objective
This project aims to create a RESTful API to manage a simple resource (tasks) using Node.js and Express.

## Requirements

### 1. Set Up
- **Create a new Node.js project** using npm.
- **Install Express** and necessary middleware (e.g., body-parser).

### 2. Resource Management
Implement CRUD operations for managing tasks:

- **Create**: 
  - **POST /tasks**: Add a new task.
  - **Request Body**:
    ```json
    {
      "title": "Task Title",
      "description": "Task Description",
      "completed": false
    }
    ```

- **Read**: 
  - **GET /tasks**: Retrieve all tasks.
  - **GET /tasks/:id**: Retrieve a specific task by ID.

- **Update**: 
  - **PUT /tasks/:id**: Update a task by ID.
  - **Request Body**:
    ```json
    {
      "title": "Updated Task Title",
      "description": "Updated Task Description",
      "completed": true
    }
    ```

- **Delete**: 
  - **DELETE /tasks/:id**: Remove a task by ID.

### 3. Data Storage
- Use an **in-memory array** to store tasks. 
- Each task should include the following fields:
  - **ID**: Unique identifier for the task.
  - **Title**: Title of the task.
  - **Description**: Description of the task.
  - **Completed**: Boolean status indicating completion.

### 4. Validation
- Implement basic validation for incoming requests to ensure required fields are provided.

### 5. Error Handling
- Handle errors gracefully, returning appropriate HTTP status codes and messages for invalid requests.

### 6. Documentation
Provide API documentation, including how to use each endpoint and example requests/responses.

## API Endpoints

### 1. Create a Task
- **Endpoint**: `POST /tasks`
- **Description**: Add a new task.
- **Request Body**:
  ```json
  {
    "title": "Sample Task",
    "description": "This is a sample task.",
    "completed": false
  }
