import React, { Component } from 'react';
class CounterClass extends Component{
    constructor(){
        super();
        this.state={count:0};
    }
increment=()=>{
    this.setState({count:this.state.count+1});
};
render(){
    return(
        <div>
            <h2>count:{this.state.count}</h2>
            <button onClick={this.increment} style={{color:'blue'}}>Increment</button>
        </div>
    );
}}
export default CounterClass;