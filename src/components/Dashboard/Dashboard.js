import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{
    // constructor(){
    //     super()

    // }

    render(){
console.log("From Dashboard")
console.log(this.props.inventory)

let inventoryList=this.props.inventory.map((val,i)=>{
    let imgUrl=''
    if(val.img_url===null){
        imgUrl='https://via.placeholder.com/175'
    }
    else {imgUrl=val.img_url}
    return(
        <Product 
        key={val.id}
        product={val.product}
        price={val.price}
        imgUrl={imgUrl}        
        />
        )
})

        return(
            <div>Dashboard
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard;