import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './addReviews.css';



const AddReviews = ({match}) => {
   

     const [description, setDescription] = useState('');
     var [hasError, setHasError] = useState(false);
     const onSave = (e) => {
         e.preventDefault();
         const formData = new FormData();
         formData.append('description', description);
         console.log('formData', formData);
         fetch(`reviews/${match.params.id}`, {method: 'POST',body: formData})
         .then(response => console.log(response))
         .catch((err) => {
            console.log(err.response)
            setHasError(true)
           
          });
     };
   

return (
    
    <div>
        
        
      <div className="newimage-page">
            <form>
                <div className="placement">
                    <div className="alignRow">
                      
                        <div className="info">
                          
                            <div className="expandingArea">
                                <textarea placeholder="Add your Review here"
                                          onChange={e => setDescription(e.target.value)}
                                          className="description"
                                          rows="1"
                                          value={description}
                                          maxchars="2500" 
                                          class = "myTextAreastyle"/>
                                  <button class= "style" onClick={onSave} >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

             
       
        {hasError && <ErrorComponent></ErrorComponent>}
     
 
 <div className='back'>
        <Link to='/'>Back to Products</Link>
      </div>

  </div>
  );

  function ErrorComponent() {
    return <h1>reviews API failed</h1>
  }
};
export default AddReviews;
