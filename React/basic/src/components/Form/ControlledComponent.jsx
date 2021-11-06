import React, { useState } from 'react'

function Form() {
    const [value, setValue] = useState({
        name:"name", 
        essay: "essay", 
        flavor: "coconut"
    });

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${value.name} \nEssay: ${value.essay} \nFlavor: ${value.flavor}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label> 
                Name: 
                <input name="name" type="text" value={value?.name} onChange={handleChange} />
            </label>
            <br/>
            <label> 
                Essay: 
                <textarea name="essay" value={value?.essay} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={value?.flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
