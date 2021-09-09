import './App.css';
import { useState } from "react";
import http from './utils/api/UsersApi'

function App() {
    const [text, setText] = useState('paragraph')

    function alive() {
        http.get('/')
            .then(function (response) {
                console.log(response.data)
                setText(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
                return 'Error'
            })
            .then(function () {
                // always executed
            })
    }

    function getUsers() {
        http.get('/users')
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function getUserById(id) {
        http.get(`/users/${ id }`)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function createUser(name, age, gender) {
        const payload = {
            "name": name,
            "age": age,
            "gender": gender
        }
        http.post('/users', payload)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function updateUser(id, name, age, gender) {
        const payload = {
            "id": id,
            "name": name,
            "age": age,
            "gender": gender
        }
        http.put('/users', payload)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function deleteUserById(id) {
        http.delete(`/users/${ id }`)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Users API with Axios</h1>
            <h3>'npm install axios'</h3>
            <p>{ text }</p>

            <button onClick={ () => {
                setText('New Text')
            } }>New text
            </button>
            <button onClick={ alive }>alive</button>
            <button onClick={ getUsers }>getUsers</button>
            <button onClick={ function () {
                getUserById(14)
            } }>getUserById
            </button>
            <button onClick={ function () {
                createUser('Ada', 18, 'Female')
            } }>createUser
            </button>
            <button onClick={ function () {
                updateUser(14,'Ada', 19, 'Female')
            } }>updateUser
            </button>
            <button onClick={ function () {
                deleteUserById(14)
            } }>deleteById
            </button>
        </div>
    );
}

export default App;
