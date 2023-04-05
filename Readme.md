# Todo App Readme

This is a Todo application built with the MERN stack (MongoDB, Express, React, and Node.js) and Redux. The application allows users to create, edit, and delete todos. Users can also mark todos as completed or not completed. 

## Installation

To install the Todo app, follow these steps:

1. Clone the repository: 

`git clone https://github.com/{your-username}/To-Do-Web-App.git`


2. Navigate to the root directory of the project and install the dependencies:

- `cd Client` for Front-end
- `cd server` for Back-end
- `npm install` to install all the dependecies

3. Create a `.env` file and copy the configuration from `.env.sample` to `.env` and replace the configs by your configs

4. Start the application:

- `npm start` in the client folder
- `npm start` in the server folder

5. Open your web browser and go to `http://localhost:3000` to view the application.


## Usage

### Adding a Todo

To add a new Todo, click the "Add Todo" button in the header. Type in the name of the Todo in the input field and press "Enter" or click the "Add" button. The new Todo will be added to the list.

### Editing a Todo

To edit a Todo, click the "Pen" button next to the Todo you want to edit. The Todo will be displayed in an input field. Make your changes and press "Enter".

### Deleting a Todo

To delete a Todo, click the "Trash" button next to the Todo you want to delete. The Todo will be removed from the list.

### Completing a Todo

To mark a Todo as completed, click the on Todo. The Todo will be crossed out to indicate that it has been completed.

### Filtering Todos

To filter the list of Todos, click the "All todo", "Active todo", or "Done todo" buttons in the header. The list will show only the Todos that match the selected filter.

## Dependencies

The Todo app uses the following dependencies:

- `axios`: for making HTTP requests to the backend API
- `react`: for building the user interface
- `react-dom`: for rendering the user interface
- `react-redux`: for managing application state with Redux
- `react-router-dom`: for client-side routing
- `redux`: for managing application state
- `redux-thunk`: for handling asynchronous actions in Redux
- `redux-devtools-extensions`: for effective use of redux
- `font-awesome`: for fonts that are used in the web-app
- `express`: for creating routes
- `dotenv`: to use the .env file in react
- `mongoose`: to connect the database  

## License

The Todo app is licensed under the MIT License. See the `LICENSE` file for more information.
