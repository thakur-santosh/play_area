import React from 'react'
import {connect} from 'react-redux'
import Btn from '../component/button'

function Count (props) {
    console.log(props);
    
    return(
        <div>
            <h1>Count - {props.count}</h1>
            <Btn />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        count : state.count
    }
}
export default connect(mapStateToProps)(Count)