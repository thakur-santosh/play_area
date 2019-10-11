import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function User(props){
    return(
        <div>
            <h2>User Lists - {props.users.length}</h2>
            <ul>
                {props.users.map(user =>{
                    return <li><Link to ={`/users/${user.id}`}>{user.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps =(state) =>{
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(User)