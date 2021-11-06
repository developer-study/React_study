import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function Props() {
    return (
        <div>
            <Welcome name="Jimmy"/>
            <Welcome name="Timmy"/>
            <Welcome name="Tommy"/>
        </div>
    )
}

export default Props
