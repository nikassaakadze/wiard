import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { ProductReducer, CheckoutReducer } from './reducers/ProductReducer'

const reducer = combineReducers({
  getproducts: ProductReducer,
  checkout: CheckoutReducer
});

const middleware = [thunk];  

const checkoutInLocal = localStorage.getItem("checkouts")
  ? JSON.parse(localStorage.getItem("checkouts"))
  : [];


  const INITIAL_STATE = {
    checkout: {
      products: checkoutInLocal,
    }
  };

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;