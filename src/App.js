import React, { useEffect, useState } from 'react'
import Router from './Router/Router'
import axios from 'axios';
import { MainContext } from './Context/context';

const App = () => {
const [products, setProducts] = useState ([])
const [student, setStudent] = useState("Someone");
const [ color, setColor] = useState("pink")

useEffect (() => {
  axios.get("https://dummyjson.com/products").then((res) => {
    setProducts(res.data.products);
  });
}, []);

const data = { products,setProducts, setStudent, setColor,color,student};

  return (
    <div>
      <MainContext.Provider value={data}>
        <Router/>
      </MainContext.Provider>
      </div>
  )
}

export default App