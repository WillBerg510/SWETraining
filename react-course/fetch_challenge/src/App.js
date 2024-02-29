import React from 'react';
import {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async function() {
      try {
        const response = await fetch(API_URL + reqType);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [reqType])
  
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}/>
      <Table items={items}/>
    </div>
  );
}

export default App;
