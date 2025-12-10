
export const getTodos = () => (
    fetch('https://dummyjson.com/todos').then((res) => res.json())
)

export const addTodo = (data: object) => (
    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
)

export const editTodo = (data: object) => (
    fetch('https://dummyjson.com/todos/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
)
