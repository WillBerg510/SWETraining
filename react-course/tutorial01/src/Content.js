import React from 'react'
import {useState} from 'react'
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {
  const [name, setName] = useState('Will');
  const [count, setCount] = useState(0);

  const handleNameChange = function() {
    const names = ['Will', 'Lam', 'Sabrina', 'Brianna', 'Izzy'];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  }

  const handleClick = function() {
    setCount(count + 1);
    console.log(count + 1);
  }

  const handleClick2 = function() {
    console.log(name + ' double clicked')
  }

  const handleClick3 = function(e) {
    console.log(count)
  }

  return (
    <main>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ) : (
        <p style={{
          marginTop: '1.15rem',
          marginBottom: '1.15rem'
        }}>
          No items to display.
        </p>
      )}
      <p onDoubleClick={handleClick2}>
        Hello, {name}!
      </p>
      <button onClick={handleNameChange}>
        Click
      </button>
      <button onClick={handleClick}>
        Click
      </button>
      <button onClick={handleClick3}>
        Click
      </button>
    </main>
  )
}

export default Content