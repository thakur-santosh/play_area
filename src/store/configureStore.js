import {createStore, combineReducers,applyMiddleware} from 'redux'
import countReducer from '../reducer/countReducer'
import thunk from 'redux-thunk'
import todoReducer from '../reducer/Todo'
import usersReducer from '../reducer/userReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        count : countReducer,
        todo : todoReducer,
        users : usersReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore