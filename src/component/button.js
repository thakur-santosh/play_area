import React from 'react'
import { connect } from 'react-redux'
import {increment} from '../action/count'

function Btn(props){
    return(
        <button onClick = {()=>{
            props.dispatch(increment())
        }}>up</button>
    )
}

export default connect()(Btn)

