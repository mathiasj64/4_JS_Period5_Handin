
import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Blog from "./Components/Blog.js"
import Company from "./Components/Company.js"
import Details from "./Components/Details.js"
import Home from "./Components/Home.js"
import Product from "./Components/Product.js"
import App from "./App.js"

class RouterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.bookStore.subscribe(this);
  }

  dataReady = () =>{
    this.forceUpdate
  }

  render() {
    var books = this.props.bookStore.books;
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   books={books}/>
            <Route path="products/details/:id" component={Details}
                   books={books}/>
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default RouterComponent;