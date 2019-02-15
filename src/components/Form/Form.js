import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state={
            product:"",
            price:"",
            imgUrl:"https://via.placeholder.com/100"
        }
    }



    render(){
        return(
            <div>
                <button>Cancel</button>
                <input placeholder={'product'}/>
                <input placeholder={'price'}/>
                <input placeholder={'img URL'}/>
                <button>Add to Inventory</button>
                
            </div>
        )
    }
}

export default Form;