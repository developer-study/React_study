import React, { useRef } from 'react'

function UncontrolledComponent() {
    const fileInputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledComponent
