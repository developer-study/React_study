import React from 'react'

/**
 * if > if(login) { return A } else { return B}
 * 
 * && > login && A
 * 
 * ? > login ? A : B
 * 
 * return null;
 */

function UserGreeting(props) {
    return <h1>{props.name && `${props.name}, `}Welcome {props.count ? ` It's ${props.count} times` : null}</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up.</h1>
}

function Greeting(props) {
    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0} /> : <GuestGreeting />
}

function Condition() {
    const isLoggedIn = true;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default Condition
