import './App.css';
import { useState } from "react";
import http from './utils/api/UsersApi'
import { JsonToTable} from "react-json-to-table";

function App() {
    const [text, setText] = useState('paragraph')
    const [allUsers, setAllUsers] = useState()
    const [oneUser, setOneUser] = useState()
    const [id, setId] = useState(14)
    const [name, setName] = useState('Ada')
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState('Female')


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
                setAllUsers(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function getUserById(userId) {
        http.get(`/users/${ userId }`)
            .then(function (response) {
                console.log(response.data)
                setOneUser(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function createUser(userName, userAge, userGender) {
        const payload = {
            "name": userName,
            "age": userAge,
            "gender": userGender
        }
        http.post('/users', payload)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function updateUser(userId, userName, userAge, userGender) {
        console.log(userId, userName, userAge, userGender)
        const payload = {
            "id": userId,
            "name": userName,
            "age": userAge,
            "gender": userGender
        }
        console.log(payload)
        http.put('/users', payload)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function deleteUserById(userId) {
        http.delete(`/users/${ userId }`)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div>
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
                    updateUser(14, 'Ada', 19, 'Female')
                } }>updateUser
                </button>
                <button onClick={ function () {
                    deleteUserById(14)
                } }>deleteById
                </button>
            </div>
            <div>
                <section>
                    <h1>Hämta alla användare</h1>
                    <button onClick={ getUsers }>getUsers</button>
                    <br/>
                    <JsonToTable json={allUsers}/>
                </section>

                <section>
                    <h1>Hämta en användare</h1>
                    Id: <input type='number'
                               id='id'
                               value={ id }
                               onChange={ event => setId(event.target.value) }/>
                    <button onClick={ function () {
                        getUserById(id)
                    } }>getUser</button>
                    <br/>
                    <JsonToTable json={oneUser}/>
                </section>

                <section>
                    <h1>Skapa en användare</h1>

                    Name: <input type='text'
                                 id='name'
                                 value={ name }
                                 onChange={ event => setName(event.target.value) }/>
                    <br/>

                    Age: <input type='number'
                                id='age'
                                value={ age }
                                onChange={ event => setAge(Number(event.target.value)) }/>
                    <br/>

                    Gender: <input type='text'
                                   id='gender'
                                   value={ gender }
                                   onChange={ event => setGender(event.target.value) }/>
                    <br/>

                    <button onClick={ function () {
                        createUser(name, age, gender)
                    } }>Create user
                    </button>
                </section>

                <section>
                    <h1>Uppdatera en användare</h1>

                    Id: <input type='number'
                               id='id'
                               value={ id }
                               onChange={ event => setId(event.target.value) }/>
                    <br/>

                    Name: <input type='text'
                                 id='name'
                                 value={ name }
                                 onChange={ event => setName(event.target.value) }/>
                    <br/>

                    Age: <input type='number'
                                id='age'
                                value={ age }
                                onChange={ event => setAge(event.target.value) }/>
                    <br/>

                    Gender: <input type='text'
                                   id='gender'
                                   value={ gender }
                                   onChange={ event => setGender(event.target.value) }/>
                    <br/>

                    <button onClick={ function () {
                        updateUser(id, name, age, gender)
                    } }>Update user
                    </button>
                </section>

                <section>
                    <h1>Radera en användare</h1>

                    Id: <input type='number'
                               id='id'
                               value={ id }
                               onChange={ event => setId(event.target.value) }/>
                    <br/>

                    <button onClick={ function () {
                        deleteUserById(id)
                    } }>Delete user
                    </button>
                </section>

            </div>
        </div>
    );
}

export default App;

