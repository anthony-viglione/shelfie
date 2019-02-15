import React from 'react';

function Product(props){
    console.log(props.imgUrl)
    // if(props.imgUrl===null){
    //     props.imgUrl='https://via.placeholder.com/300'
    // }
    return(
        <div>
            <div>{props.product}</div>
            <div>{props.price}</div>
            <img src={`${props.imgUrl}`} alt={`${props.product}`}/>
        </div>
        )
    }
    
    export default Product;