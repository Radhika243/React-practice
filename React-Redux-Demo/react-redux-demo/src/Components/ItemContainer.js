import React from 'react'
import {connect} from 'react-redux'
import {BuyCake, byIceCream} from './Redux'

function ItemContainer(props) {
    

    return (
        <>
            <h2>Item :{props.item} </h2>
            <button onClick={props.byItems}>Buy item</button>
        </>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const Items = ownProps.cake ?
                 state.cake.numberOfCakes
                 :state.iceCream.numberOfIceCream
    return{
        item:Items
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    const dispatchFunction = ownProps.cake ?
                        ()=>dispatch(BuyCake()):
                        ()=>dispatch(byIceCream())
        return{
            byItems : dispatchFunction
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
