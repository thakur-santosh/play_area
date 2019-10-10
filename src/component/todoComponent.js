import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../action/todo'


function Todo(props){
    return(
        <div>
            <h1>Todo - {props.todo.length}</h1>
            <ul>
                { props.todo.map(todo =>{
                    return <li>{todo.title}</li>
                })}
            </ul>
            <button onClick ={()=>{
                const todo = window.prompt('Enter todo')
                const todoData = {id : Number(new Date()), title : todo}
                props.dispatch(addTodo(todoData))
            }}>add</button>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        todo : state.todo
    }
}
export default connect(mapStateToProps)(Todo)
