import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import "./components/Products.css";
import Todo from "./components/todo";
import Cart from "./components/Cart";
import "./components/Cart.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      CartItem:[]
    };

    this.handleAddToCart= this.handleAddToCart.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
    
  }
  componentDidMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>this.setState({products:data}))
    if(localStorage.getItem("CartItem")){
       this.setState({CartItem : JSON.parse(localStorage.getItem("CartItem"))})
    }
  }

  handleAddToCart(e,product){
      this.setState(state =>{

        const cardItem = state.CartItem
        let productExists = false
        cardItem.forEach(item =>{
          if(item.id === product.id){
            productExists = true
            item.count++
          }
        })
        if(!productExists){
          cardItem.push({...product,count:1})
        }
        localStorage.setItem('CartItem',JSON.stringify(cardItem))
        return cardItem
      })
  }

      handleRemove(e,item){
        this.setState(state =>{
          const CartItem = state.CartItem.filter((p)=>p.id !== item.id)
          localStorage.setItem('CartItem',CartItem)
          return {CartItem}
        })
      }
  render() {
    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Products products={ this.state.products} handleAddToCart={this.handleAddToCart}></Products>
            </div>
            <div className="col-md-4">
              <Cart CartItem={this.state.CartItem} handleRemove={this.handleRemove}></Cart>
              <Todo/>
           </div>
          
          </div>
         
        </div>
      </div>
    );
  }
}
export default App;
