import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Form from '../postForm'

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/create-post">About</Link>
        </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-post" component={Form} />
        </main>
    </div>
)

export default App