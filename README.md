# React Todo List with Context API and Tailwind CSS

This is a simple todo list application built with React.js utilizing the Context API for state management and styled with Tailwind CSS. It allows users to add, delete, and mark tasks as completed.

## Features

- Add tasks with a title and optional description.
- Mark tasks as completed.
- Delete tasks individually.
- Clear all completed tasks at once.

## Demo

_Insert a link to a live demo of your application here, if available._

## Screenshots

_Insert screenshots of your application here, showcasing its functionality and design._

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/Varadpatil04/To-Do-UsingReact
```

2. Navigate to the project directory:

```
cd Todo-Context-Local
```

3. Install dependencies using npm:

```
npm install
```

## Usage

1. Start the development server:

```
npm run dev
```


## Technologies Used

- React.js
- Context API
- Tailwind CSS

## Project Structure

```
react-todo-list-context-tailwind/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   │
│   ├── contexts/
│   │   └── TodoContext.js
│   │
│   ├── styles/
│   │   └── tailwind.css
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
└── ...
```

## How It Works

The application uses React Context API to manage the state of the todo list. The `TodoContext` provides state and functions to add, delete, and mark tasks as completed. Each component that needs access to this state or functions consumes the `TodoContext` using the `useContext` hook.

Tailwind CSS is used for styling the components. The `tailwind.css` file contains the custom styles used throughout the application.



