import React from 'react'
import Form from './Component/Form'


function App() {
    return (
        <div className="wrapper">
            <h1>#Todo</h1>
            <nav>
                <ul className="navigation">
                    <li>All</li>
                    <li>Active</li>
                    <li>Complete</li>
                </ul>
            </nav>
            <Form />
        </div>
    )
}
export default App