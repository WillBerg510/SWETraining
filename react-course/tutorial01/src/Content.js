import logo from './logo.svg';
import React from 'react'

const Content = () => {
  const handleNameChange = function() {
    const names = ['Will', 'Lam', 'Sabrina', 'Brianna', 'Izzy'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }
  
  return (
    <main>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content