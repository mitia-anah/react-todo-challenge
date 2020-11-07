import React from "react";
import { Route, Switch } from "react-router-dom";
import useTodoList from '../useTodoList'
import All from './All'
import Active from './Active'
import Complete from './Complete'

export default function TodoApp() {
    const { todo, value, handleChange, onSubmit, removeTodo, toggleTodo } = useTodoList()

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <input
                    id="todo"
                    className="todo-input"
                    placeholder="Add detail"
                    onChange={handleChange}
                    value={todo}
                />
                <button className='add-btn' type="submit">Add</button>
            </form>
            <div className='todo-list'>
                {value.map(todo => (
                    <ul key={todo.id}>
                        <Switch>
                            <Route >
                                <All todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                            </Route>
                            <Route >
                                <Active />
                            </Route>
                            <Route >
                                <Complete />
                            </Route>
                        </Switch>
                    </ul>
                ))}
            </div>
        </div >
    );
}