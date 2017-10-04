# Todo-App
This app is part of the following course:  
[React + Redux: Fundamentos e Duas Apps do ABSOLUTO ZERO!](https://www.udemy.com/react-redux-pt/)

## How To
To execute this project, you will need:  
[MongoDB](https://www.mongodb.com/)  
[NodeJS](https://nodejs.org/en/)  

*Read the documentation to install correctly according your OS*

### 1 - Installing Dependencies
First of all you need to install the dependencies, both: `frontend` and `backend`.  
Access the directory `todo-app\frontend` and execute the following command:  
`npm install`

Do the same to the backend directory: `todo-app\backend`

### 2 - Starting MongoDB
The back-end need the `mongodb` running, to start it, execute the following command in any folder:  
`mongod`

### 3 - Starting Back-End
Access the directory `todo-app\backend` and execute the following command:  
`npm run production`  
This command will start the backend application using `pm2`.  
To monitore the application you can execute the following command:  
`node_modules\.bin\pm2 monit`

### 4 - Starting Front-End
Access the directory `todo-app\frontend` and execute the following command:  
`npm run dev`  
The application will run on the port `8080`, you can access on the following address:  
`http://localhost:8080` 