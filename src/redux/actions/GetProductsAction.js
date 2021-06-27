import axios from 'axios'

export const getAllproduct = () => async (dispatch) => {
  try{
    dispatch({type: 'GET_ALL_PRODUCTS'})
     
    const { data } = await axios.get('https://fakestoreapi.com/products')

    dispatch({type: 'PRODUCT_SUCCESS', payload: data})
     
  }catch (err) {
    console.log(err)
  }
}

export const saveProduct = (id) => async (dispatch, getState) => {
  console.log(id)
  try {

    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

    dispatch({type: 'PRODUCT_SAVE_SUCCESS', payload:{
      unique: data.id,
      name: data.title,
      price: data.price,
      hero: data.image
    }})

    localStorage.setItem("checkouts", JSON.stringify(getState().checkout.products));

  }catch ( err ) {
    console.log(err)
  }
}

export const removeOrder = (id) => (dispatch, getState) => {
  dispatch({ type: 'REMOVE_ORDER', payload: id });

  localStorage.setItem("checkouts", JSON.stringify(getState().checkout.products));
}
