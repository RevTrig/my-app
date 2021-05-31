import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const AddReviews = ({match}) => {
    const mystyle={
        display:"block",
        margin:2
     }
     const myTextAreastyle= {
        
            width: 600,
            height: 120,
            padding: 5
      
     }
    
    
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
                                          style={myTextAreastyle}/>
                                  <button onClick={onSave} style={mystyle}>Save</button>
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