import React, { Component } from 'react'
import { render } from '@testing-library/react'

class Form2 extends Component{

  constructor(props){
    super(props)

    this.state={
      loading1: true,
      loading2: true,
      loading3: true,
      line1: null,
      line2: null,
      line3: []
    }
  }

 async componentDidMount() {
    const url1= "https://saarang2021aspirers.herokuapp.com/welcome";
    const response1= await fetch(url1);
    const data1= await response1.json();
    this.setState({line1 : data1 , loading1 : false})
    const url2= ("https://saarang2021aspirers.herokuapp.com"+this.state.line1.endpoint);
    const response2= await fetch(url2);
    const data2= await response2.json();
    this.setState({line2 : data2 , loading2 : false})
    const url3= ("https://saarang2021aspirers.herokuapp.com"+this.state.line2.endpoint);
    const response3= await fetch(url3);
    const data3= await response3.json();
    this.setState({line3 : data3 , loading3 : false})
  }

    render(){
        return(
           <div><br/><div>
             {this.state.loading1  ? (<div><div>Loading....</div></div>) : 
             (<div>{this.state.line1.treasure}</div>)}
           </div><br />
           <div>
           {this.state.loading2  ? (<div><div>Loading....</div></div>) : 
           (<div>{this.state.line2.treasure}</div>)}
           </div><br/>
           <div>
           {this.state.loading2  ? (<div><div>Loading....</div></div>) : 
           (<div>
             {
               this.state.line3.map(line3 => (
                 <div>
                 <div>Name of the Character : {line3.name}</div>
                 <div>Description : {line3.description}</div><br/><br/>
                 </div>
               ))
             }
           </div>)}
           </div>
           </div>
           
        )
    }
}

export default Form2

