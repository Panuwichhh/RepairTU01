import React, { useState } from 'react';

function Ts() {
  // Set up state for username, password, and message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    console.log({
        "UserName": username,
        "PassWord": password
      });
    // Check if username and password are provided
    if (!username || !password) {
      setName("Username and Password are required.");
      return;
    }
  
    // Make the fetch request
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Application-Key': 'TUe10cbd9ad12a2fbaf42c9db799a8960956ada365c1ec3455320c78e8ab11e0f84249da0030538e747e744ff7cd245e7d'
      },
      body: JSON.stringify({
        "UserName": username,
        "PassWord": password
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        console.log(data); // Log the response to inspect the data
        setName(`Name: ${data.displayname_th}`);
      })
    .catch(error => {
      setName('Error: ' + error.message);
    });
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="UserName" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} // Update username state
          placeholder="Username"
        />
        <p>ssss</p>
        <input 
          type="password" 
          id="PassWord" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} // Update password state
          placeholder="Password"
        />
        <button type="submit" className='bg-red-400 p-3'>Submit</button>
      </form>

      {/* Display the response message */}
      <div id="message">{Name}</div>
    </>
  );
}

export default Ts;
