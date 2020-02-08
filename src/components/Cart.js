import React from 'react'

class Cart extends React.Component {
    render() {
      const { CartItem } = this.props
    return(
    <div className="cart staky">
      <h2 className="alert alert-dark ">سبد خرید</h2>
      {
        CartItem.length === 0 ?"سبد خرید خالی است ." : 
        <div className="alert alert-primary">
            سبد خرید  {CartItem.length}
        </div>
      }
      {
        CartItem.length> 0 && 
        <div>
          <ul className="list-group mt-3">
            {CartItem.map(item =>
              <li className="list-group-item" key={item.id}>{item.title}
              <button  className="btn btn-danger d-block mt-3 w-100" onClick={e=>this.props.handleRemove(e,item)}>حذف محصول</button>
              </li>
              
              )}
              
          </ul>
            <p className="bg bg-success list-group-item text-white mt-3 p-2 mx-auto">مجموع :{CartItem.reduce((a,b)=>a+b.price*b.count,0)}تومان </p>
        </div>
        
      }
    </div>
    )}
}

export default Cart