# Todo List App

A simple todo list application built with React, Vite, and Redux Toolkit. Allows adding, completing, and removing tasks in an intuitive interface, with special highlighting for important tasks.
<br/><br/>

![Screenshot](image.png)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Add new tasks
- Mark tasks as completed
- Delete completed tasks
- Highlight important tasks (tasks ending with `!`)
- Responsive styling with Styled Components

## Technologies

- React 18
- Vite
- Redux Toolkit
- React Redux
- Styled Components
- Axios
- Express (optional backend)

## Requirements

- Node.js v14 or higher
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/dropecosta/build-modern-projects-react
cd todo-list-app

# Install dependencies
npm install
# or yarn install

# Start the development server
npm run dev
``` 

Open your browser and visit `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `npm run dev` – Starts the development server with hot-reload
- `npm run build` – Builds the app for production to the `dist/` directory
- `npm run preview` – Serves the production build locally
- `npm run lint` – Runs ESLint to check for code issues

## Project Structure

```
todo-list-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── NewTodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoListItem.jsx
│   ├── thunks.js
│   ├── todosSlice.js
│   ├── loadingSlice.js
│   ├── selectors.js
│   └── assets/
│       └── react.svg
├── index.html
├── vite.config.js
├── server.js
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.

<br/><br/>


Developed by **Pedro Reis**  | 📧 dropecosta@gmail.com  | [LinkedIn](https://www.linkedin.com/in/dropecosta/) | [GitHub](https://github.com/dropecosta)
