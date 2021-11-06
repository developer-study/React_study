import React from 'react'

function List() {
    const todos = [{
            id: 1, text: 'Drink Water'
        }, {
            id: 2, text: 'Wash Car'
        }, {
            id: 3, text: 'Listen Lecture'
        }, {
            id: 4, text: 'Go to Home'
        }
    ]

    const Item = ({text}) => {
        return <li>{text}</li>
    }

    const todoList = todos.map((todo) => <Item key={todo.id} text={todo.text} />)

    return (
        <>
            {todoList}
        </>
    )
}

export default List
