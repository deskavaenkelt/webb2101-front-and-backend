import express from 'express'
import cors from 'cors';
import { createNewUser, deleteUserById, getAllUsers, getUserById, updateUser } from './controllers/users'
import Logger from './utils/logger'
import morganMiddleware from './config/morganMiddleware'

const app = express();
const port = 3001; // default port to listen
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
};

app.use(cors(options))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morganMiddleware)

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("API is Alive with TypeScript!");
});

// API CRUD
app.post('/users', (req, res) => {
    createNewUser(req.body)
    res.json('Successfully created a new user')
})

app.get('/users', (req, res) => {
    res.json(getAllUsers())
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const response = getUserById(id)
    res.status(response.status).json(response.text)
})

app.put('/users', (req, res) => {
    const response = updateUser(req.body)
    res.status(response.status).send(response.text)
})

app.delete('/users/:id', (req, res) => {
    const response = deleteUserById(Number(req.params.id))
    res.status(response.status).send(response.text)
});

// start the Express server
app.listen(port, () => {
    Logger.info(`server started at http://localhost:${ port }`);
});
