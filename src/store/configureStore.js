import {createStore, combineReducers} from 'redux'
import countReducer from '../reducer/countReducer'
import todoReducer from '../reducer/Todo'

const configureStore = () =>{
    const store = createStore(combineReducers({
        count : countReducer,
        todo : todoReducer
    }))
    return store
}

export default configureStore