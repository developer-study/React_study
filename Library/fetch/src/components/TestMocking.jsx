import React, { useState } from 'react'

const Item = ({name, age}) => {
  return (
    <li>{`name: ${name}, age: ${age}`}</li>
  )
}

const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react';

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json.data)
      })
      .catch((error) => {
        setError(error);
      });
  }
  const handleClick2 = () => {
    fetch('/error')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
        if(json.errorMessage) {
          throw new Error(json.errorMessage)
        }
      });
  }

  if(error) {
    return (
      <p>{`error: ${error}`}</p>
    )
  }
  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <button onClick={handleClick2}>Error</button>
      {data && (
        <ul>
          {data.people.map(person => (
            <Item key={`${person.name}.${person.age}`} name={person.name} age={person.age}/>
          ))}
        </ul>
      )}
    </div>
  )
}
