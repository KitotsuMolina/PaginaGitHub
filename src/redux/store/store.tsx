import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import storeReducer from "../ducks/storeDucks";

const rootReducer = combineReducers(
    {store: storeReducer
    })

export default function generateStore(){
    const store: any = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}
