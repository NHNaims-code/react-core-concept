import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productList = [
    {name: 'Photoshop',price: '$98.99'},
    {name: 'Illustrator',price: '$87.99'},
    {name: 'AfterEffect', price: '$120.99'},
    {name: 'Dream Wear', price: '$12.99'}

  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        {
          productList.map(pd => <Product productDetail={pd}></Product>)
        }
      </header>
    </div>
  );
}



function Counter(){
  const [count, setCount] = useState(0);
    const Increase =()=>setCount(count + 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseDown={()=>setCount(count - 1)}>Decrease</button>
      <button onMouseMove={()=>setCount(count + 1)}>Increase</button>
    </div>
  )
}

// new component
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Product(props){
  const productStyle = {
    height: '250px',
    width: '250px',
    backgroundColor: 'lightgray',
    border: '1px solid gray',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px'
  }
  const {name, price} = props.productDetail;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
