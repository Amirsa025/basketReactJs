import React from 'react'

class Products extends React.Component {
    render() {
    const ProductItem = this.props.products.map(product =>
        <div className="col-md-4 text-center product" key={product.id}>
          <div>
            <img src={`/products/0${product.id}.jpg`} alt={product.name} ></img>
          </div>
          <div>
            <p>
              {product.title}
            </p>
            <p className="text-success">{product.price} تومان </p>
            <button className="btn btn-primary" onClick={ (e)=>this.props.handleAddToCart(e,product)}>افزدون به سبد خرید</button>
          </div>
        </div>
      )       
        return (
          <div className="row">
           <h1>محصولات  </h1>
            <div className="row">
           {ProductItem}
            </div>
          </div>
        )
      }
}

export default Products