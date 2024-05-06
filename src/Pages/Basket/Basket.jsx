import React, { useContext } from 'react'
import { MainContext } from '../../Context/context';
import ProductCard from '../../Components/ProductCard';
const Basket = () => {
  const { products, student, color,setColor, setStudent} = useContext(MainContext);
 

  const  changeColor = () => {
    if ("Someone"){
      setColor("red")
    } else {
      setColor("pink")
    }
  }

  const changeName = () => {
    setStudent ("Someone" ? "Something" : "Someone")
  }
  return (
    <div>
      <p style={{color:color}}>{student}</p>
      <button onClick={changeName}>Change the Word</button>
      <button onClick={changeColor}>Change the Color</button>
      {products.map((item) => (
        <ProductCard item={item} />
      )
    )}
    </div>
  )
}

export default Basket