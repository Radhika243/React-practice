import React from 'react'
import {connect} from 'react-redux'
import {byBuns} from './Redux'

function BunsContainer(props) {
    

    return (
        <>
            <h2>NUMBER OF BUNS - {props.noOfBuns}</h2>
            <button onClick={props.byBuns}>BUY BUNS</button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        noOfBuns:state.buns.noOfBuns
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        byBuns:()=>dispatch(byBuns())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BunsContainer)
