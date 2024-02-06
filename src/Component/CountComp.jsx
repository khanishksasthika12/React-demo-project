import React,{Component} from "react";

class CountComp extends Component{

    state ={
        count:1,

    };

    handleadd =()=>{

    };
    render(){
        return(

            <>
            

            <h1>Count {this.state.count}</h1>
            <button onClick={this.handleadd} >Add</button>
            
            </>
        );


    }
}

export default CountComp