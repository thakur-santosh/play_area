const initialState = [{
    id : Number(new Date()) ,title : 'task 1'
}]
const todoReducer =(state= initialState,action) =>{
    switch(action.type){
        case 'ADD_TODO' :{
            return [...state,action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default todoReducer