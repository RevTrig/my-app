import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Logo from '../Logo/logo';

const Products = () => {
    const [products, setProducts] = useState([]);
    var [hasError, setHasError] = useState(false);
    
  useEffect(() => {
      fetchProducts();
    }, []);
  const fetchProducts = () => {
      axios
        .get('/product')
        .then((res) => {
          console.log(res);
          setProducts(res.data);
        })
        .catch((err) => {
          setHasError(true);
        });
    };
  return (
    <div>
        <Logo/>
    {!hasError && (
    
        <div className='item-container' >
          {products.map((product) => (
            <div className='card' key={product.id}>
              <img src={product.imgUrl} alt='' />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Link to={`/${product.id}`}>View</Link>
            </div>
          ))}
        </div>
  
    )}
    {hasError && <ErrorComponent></ErrorComponent>}
    </div>
    );
  };

  function ErrorComponent() {
    return <h1>Product API Failed</h1>
  }





export default Products;
