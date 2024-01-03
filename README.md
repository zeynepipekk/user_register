# User Registration Web App

This web application allows users to register by providing their name, surname, email, and password. The registration data is stored in a MongoDB database.

## Project Structure

- **index.js**: The main server file containing the backend code. Handles user registration, serves static files, and communicates with the MongoDB database.

- **public/register.html**: The HTML file for the user registration form. A simple form where users can input their details.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user registration data.
- **Mongoose**: MongoDB object modeling for Node.js.

## Prerequisites

Before running the application, make sure you have:

- Node.js installed.
- MongoDB installed and running.

## Project Setup and Usage

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/zeynepipekk/user_register.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd user_register/server
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    node index.js
    ```

### Usage

1. **Access the user registration form:**

    Open your web browser and go to [http://localhost:3001/register](http://localhost:3001/register).

2. **Fill in the required information:**

    - Name
    - Surname
    - Email
    - Password

3. **Submit the form:**

    Click the "Register" button to submit the form.

4. **User data storage:**

    User data will be stored in the MongoDB database.

### MongoDB Database

- **Database Name:** crud
- **Collection Name:** user_register
- **Connection URL:** mongodb://127.0.0.1:27017/crud

