import React from 'react'
import {byIceCream} from './Redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    

    return (
        <>
            <h2>NUMBER OF ICECREAMS - {props.numberOfIceCream}</h2>
            <button onClick={props.byIceCream}>BUY ICECREAMS</button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfIceCream:state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        byIceCream:()=>dispatch(byIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);
