import React, { useState } from "react";
import Menu from './menu'
const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function createStory(event){
        event.preventDefault();
        const response = await fetch('http://localhost:3001/api/createstory', {
          method: 'POST',
          headers: {
            'x-access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            body
          }),
        })
        const res = await response.json();
        console.log(res);
        alert("Created New Post")
        window.location.href = '/profile'
      }

    return (
        <><Menu /><div className="App">
            <h1>Create</h1>
            <form onSubmit={createStory}>
            <input
                value={title} 
                onChange={e => setTitle(e.target.value)}
                type="text" 
                placeholder="Title" 
            />
            <br/>
            <input
                value={body} 
                onChange={e => setBody(e.target.value)}
                type="text" 
                placeholder="Body" 
            />
            <br/>
            <input type="submit" value="Create" />
            </form>
        </div></>
      );
}

export default Create;