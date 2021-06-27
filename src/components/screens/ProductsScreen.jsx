import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as ProductActions from '../../redux/actions/GetProductsAction'

function ProductsScreen({ stepControl, setStepControl }) {

  const dispatch = useDispatch()

  const getproducts = useSelector(state => state.getproducts)

  const {products, loading} = getproducts

  const nextStep = (id) => {
    dispatch(ProductActions.saveProduct(id))
    setStepControl(stepControl + 1)
  }

  return (
    <div className="products-list">
      <div className="product-items">
        {
          loading ? <h1>Loading...</h1> : products?.map(product => (
            <div className="product-card" onClick={() => nextStep(product.id)}>
              <div className="product-info">
                <h5 className="product-title">{product.title}</h5>
                <div className="product-price">${product.price}</div>
              </div>
              <div className="product-hero">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsScreen
