import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/logo';
import './productDetails.css';
const ProductDetails = ({match}) => {
const mystyle={
   display:"block",
   margin:2
}

  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  var [hasProductError, setHasProductError] = useState(false);
  var [hasReviewError, setHasReviewError] = useState(false);
  useEffect(() => {
    fetchProduct();
    fetchReviews();
}, []);
const fetchReviews = () => {
    axios
      .get(
        `/reviews/${match.params.id}`
      )
      .then((res) => {
        setReviews(res.reviews);
        console.log(reviews);
      })
      .catch((err) => {
          console.log(err.response)
          setHasReviewError(true)
         
        });
  };

  const fetchProduct = () => {
    axios
      .get(
        `/product/${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) =>{
          console.log(err.response)
          setHasProductError(true)

      });
  };

 

return (
    <div>
       
        <Logo></Logo>
        {!hasProductError && (
        <div className='product-container' key={data.id}>
          <div class='product'>
            <img className='prod-image' src={data.imgUrl} alt='' />
          </div>
          <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>
              <strong>Price:</strong> {data.price}
            </p>
            </div>
        </div>
        )}
        {!hasReviewError && (
        <div class = "reviews">
            <p>
              <strong>Reviews:</strong> 
              <p>{reviews.text}</p>
              <Link to={`/reviews/${data.id}`}>
            <button class="favorite styled" style={mystyle} type="button" > Add Review
             </button>
            </Link>
            </p>
          </div>
        )}
     
     {hasProductError && <ErrorComponent></ErrorComponent>}
     {hasReviewError && (
          <div class = "reviews">
          <p>
            <strong>Reviews:</strong> 
            <p> Review API not found</p>
            <Link to={`/reviews/${data.id}`}>
          <button class="favorite styled" style={mystyle} type="button" > Add Review
           </button>
          </Link>
          </p>
        </div>
     )}
 <div className='back'>
        <Link to='/'>Back to Products</Link>
      </div>

  </div>
  );
};
function ErrorComponent() {
    return <h1>Product API failed</h1>
  }

export default ProductDetails;