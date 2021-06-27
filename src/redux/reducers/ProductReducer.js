const CHECKOUT_INITIAL_STATE = {
  products: [],
};

export const ProductReducer = (state = {products: []}, action) => {
  switch(action.type){
    case 'GET_ALL_PRODUCTS':
      return{
        loading: true,
        products: state
      }
    case 'PRODUCT_SUCCESS':
      return{
        loading: false,
        products: action.payload
      }
    default: return state
  }
}

export const CheckoutReducer = (state = CHECKOUT_INITIAL_STATE, action) => {
  console.log(CHECKOUT_INITIAL_STATE)
  switch(action.type){
    case 'PRODUCT_SAVE_SUCCESS':
      const item = action.payload;
      const existItem = state.products.find((x) => x.unique === item.unique);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.product === existItem.product ? item : x
          )
        };
      } else {
        return {
          ...state,
          products: [...state.products, item]
        };
      }
      case 'REMOVE_ORDER':
        return {
          ...state,
          products: state.products.filter((x) => x.unique !== action.payload),
        };
    default: return state
  }
}