import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as orderActions from '../../redux/actions/GetProductsAction'

function CheckoutScreen() {

  const checkout = useSelector(state => state.checkout)

  const { products } = checkout
  const dispatch = useDispatch()

  return (
    <div className="order-screen">
      {
        products?.map(product => (
          <div className="order">
            <div className="remove-order">
              <button onClick={() => dispatch(orderActions.removeOrder(product.unique))}>Delete Order</button>
            </div>
          <div className="user-info">
            <h3 className="user-name">User: <span>Nika Saakadze</span></h3>
            <h3 className="city">Delivery to <span>Georgia</span></h3>
          </div>
          <div className="product">
            <h3>Product: <span>{product.name}</span></h3>
            <h3>Product Price: <span>${product.price}</span></h3>
            <div className="hero">
              <img src={product.hero} alt="" />
            </div>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default CheckoutScreen
