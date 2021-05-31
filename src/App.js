import React, {Component} from 'react';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import AddReview from './components/addReviews';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

const NoMatchRoute = () => <div>404 Page</div>;

class App extends Component {
    render() {
        return (
         
      
          <Router>
          <Switch>
            <Route  path="/"  exact component={Products} />
            <Route path="/:id" exact component={ProductDetails} />
            <Route path="/reviews/:id" exact component={AddReview} />
            <Route component={NoMatchRoute} />
          </Switch>
        </Router>
      
        )
    }


}

export default App;
