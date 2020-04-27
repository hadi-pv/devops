import React, { Component } from 'react';
import './App.css';
import { browserHistory } from 'react-router';


class Form extends Component {
    constructor(props){
        super(props)

        this.state ={
            name: '',
            rollno: '',
            contactno: '',
            emailid: '',
            password: '',
            confirmpassword: ''
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    validate = () => {
        let isError=true;
        if(this.state.name===''||this.state.rollno===''||this.state.contactno===''||this.state.emailid===''||this.state.password===''||this.state.confirmpassword===''){
            isError=false;
            alert("Enter all fields")
        }
        else {
            if(this.state.contactno.length!==10){
            isError=false;
            alert("Invalid contact no")
            }
            if(this.state.password!==this.state.confirmpassword){
            isError=false;
            alert("Confirm correct password")
            }
            if(!this.state.emailid.includes("@smail.iitm.ac.in")){
                isError=false;
                alert("invalid email address")
            }
        }
        return isError;
    }


    submit = event =>{
        const err=this.validate()
        if(err){
            browserHistory.push("/Form2");
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div><center><br/><br/><br/>
                    <label>Name </label>
                    <input name="name" type="text" value={this.state.name} onChange={e => this.change(e)}/><br/><br/>
                    <label>Roll Number  </label>
                    <input name="rollno" type="text" value={this.state.rollno} onChange={e => this.change(e)}/><br/><br/>
                    <label>Contact Number   </label>
                    <input name="contactno" type="text" value={this.state.contactno} onChange={e => this.change(e)}/><br/><br/>
                    <label>Email ID </label>
                    <input name="emailid" type="text" value={this.state.emailid} onChange={e => this.change(e)}/><br/><br/>
                    <label>Password </label>
                    <input name="password" type="password" value={this.state.password} onChange={e => this.change(e)}/><br/><br/>
                    <label>Confirm Password </label>
                    <input name="confirmpassword" type="password" value={this.state.confirmpassword} onChange={e => this.change(e)}/><br/><br/>
                    <button type="submit">Submit</button>
                    </center> </div>
            </form>
        )
    }
}


export default Form;