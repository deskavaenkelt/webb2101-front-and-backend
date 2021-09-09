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
        </div>
    );
}

export default App;
