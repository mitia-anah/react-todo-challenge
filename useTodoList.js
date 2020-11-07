import { useState } from 'react'

export default function useTodoList() {
    const [todo, setTodo] = useState("");
    const [value, setValue] = useState([]);

    const handleChange = e => {
        setTodo(e.target.value);
    };

    const addTodo = () => {
        setValue([
            ...value,
            {
                id: value.length,
                text: todo,
                completed: false
            }
        ]);
    };

    const onSubmit = e => {
        e.preventDefault();
        if (todo === "") return;
        addTodo();
        setTodo("");
    };

    const removeTodo = todoId => {
        const removedTodo = value.filter(todo => todo.id !== todoId);
        setValue(removedTodo);
    };

    const toggleTodo = todoId => {
        const updatedvalue = value.map(todo => {
            return todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setValue(updatedvalue);
    };

    return { todo, value, handleChange, onSubmit, removeTodo, toggleTodo }
}