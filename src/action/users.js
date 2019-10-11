import axios from "axios"

export const getUser = (users) =>{
    return {
        type :  'GET_USERS',
        payload : users
    }
}

export const startSetUser =() =>{
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response.data)
            const users = response.data
            dispatch(getUser(users))
        })
    }
}
