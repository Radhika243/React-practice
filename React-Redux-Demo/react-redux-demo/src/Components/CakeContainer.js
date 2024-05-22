import React from 'react';
import {BuyCake} from './Redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    

    return (
        <>
            <h2>Number of cakes: {props.numberOfCakes}</h2>
            <button onClick={props.BuyCake}>Buy Cake</button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfCakes : state.cake.numberOfCakes 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        BuyCake : ()=>dispatch(BuyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
