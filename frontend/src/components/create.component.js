import React, {Component} from 'react';

import axios from 'axios';

export default class Create extends Component{

  //Create constructor to pass values
  constructor(props){
    super(props);

    // catch the status changes of user details
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //set initial state
    this.state = {
      user_id:"",
      first_name:"",
      last_name:"",
      contact_number:"",
      email:"",
      position:""
    }
  }

  //set the state with target value
  onChangeUserID(e){
    this.setState({
      user_id:e.target.value
    });
  }
  onChangeFirstName(e){
    this.setState({
      first_name:e.target.value
    });
  }
  onChangeLastName(e){
    this.setState({
      last_name:e.target.value
    });
  }
  onChangeContactNumber(e){
    this.setState({
      contact_number:e.target.value
    });
  }
  onChangeEmail(e){
    this.setState({
      email:e.target.value
    });
  }
  onChangePosition(e){
    this.setState({
      position:e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    console.log(`The values are ${this.state.user_id}`);
    const obj = {
      user_id:this.state.user_id,
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      contact_number:this.state.contact_number,
      email:this.state.email,
      position:this.state.position
    };
    axios.post('http://localhost:4000/user//addUser', obj).then((res) => {console.log(res.data)});

    this.state({
      user_id:"",
      first_name:"",
      last_name:"",
      contact_number:"",
      email:"",
      position:""
    })    
  }

  render() {
    return(
      <div style={{marginTop: 10}}>
        <h3>User Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>User ID: </label>
            <input 
              type="text" 
              className='form-control' 
              value={this.state.user_id}
              onChange={this.onChangeUserID}
            />
          </div>

          <div className='form-group'>
            <label>First Name: </label>
            <input 
              type="text" 
              className='form-control' 
              value={this.state.first_name}
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className='form-group'>
            <label>Last Name: </label>
            <input 
              type="text"   
              className='form-control' 
              value={this.state.last_name}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className='form-group'>
            <label>Contact Number: </label>
            <input 
              type="text" 
              className='form-control' 
              value={this.state.contact_number}
              onChange={this.onChangeContactNumber}
            />
          </div>

          <div className='form-group'>
            <label>Email: </label>
            <input 
              type="text" 
              className='form-control' 
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className='form-group'>
            <label>Position: </label>
            <input 
              type="text" 
              className='form-control' 
              value={this.state.position}
              onChange={this.onChangePosition}
            />
          </div>

          {/*Create submit button*/}
          <div className='form-group'>
            <input type="submit" value="Register User Details" className='bnt btn-primary' />
          </div>
        </form>
      </div>
    );
  }

}