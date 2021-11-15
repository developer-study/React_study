import React, { useState } from 'react'

function Dialog(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            {isOpen && 
                <div style={{
                    position: 'absolute', 
                    zIndex: 3, 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    border: '1px solid black', 
                    padding: 24, 
                    backgroundColor: 'white'
                }}>
                    {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}
                    {typeof props.description === 'string' ? <h3>{props.description}</h3> : props.description}
                    {typeof props.closeButton === 'string' ? <button onClick={() => setIsOpen(false)}>{props.closeButton}</button> : 
                        <div onClick={() => setIsOpen(false)}>{props.closeButton}</div>
                    }                    
                    
                </div>
            }
            {isOpen && <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#dbdbdb'}}/>}
        </>
    )
}

export default Dialog
