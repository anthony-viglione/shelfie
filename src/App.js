import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

// const baseUrl ='/api/inventory'

class App extends Component {
  constructor(){
    super()
    this.state={
      inventoryArr: []
    }
  }

  componentDidMount(){
    axios.get(`/api/inventory`).then(res=>{
      console.log("Hit Mount")  //confirms mount was hit.
      console.log(res)  //should return the entire res object with inventory data visible
      console.log(res.data) //displays data as it comes from the database.

      this.setState({
        inventoryArr: res.data
      })
      console.log(this.state.inventoryArr)//verifies that inventory data was saved to state
      // console.log(this.state.inventoryArr[0].product)
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Dashboard inventory={this.state.inventoryArr}/>

      </div>
    );
  }
}

export default App;