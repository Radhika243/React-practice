import React,{useState} from 'react';
import {BuyCake} from './Redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    const [number,setNumber] = useState(1)

    return (
        <>
            {/* <h2>Number of cakes: {props.cake.numberOfCakes}</h2>
            <button onClick={props.BuyCake}>Buy Cake</button> */}
            <h2>Number of cakes: {props.numberOfCakes}</h2>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.BuyCake(number)}>Buy {number} Cake</button>
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
        BuyCake : (number)=>dispatch(BuyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
