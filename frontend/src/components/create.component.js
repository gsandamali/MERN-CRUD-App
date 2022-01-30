import React, {Component} from 'react';

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
    this.setState({
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
        <form>
          <div className='form-group'>
            <label>User ID: </label>
            <input type="text" className='form-control' />
          </div>

          <div className='form-group'>
            <label>First Name: </label>
            <input type="text" className='form-control' />
          </div>

          <div className='form-group'>
            <label>Last Name: </label>
            <input type="text" className='form-control' />
          </div>

          <div className='form-group'>
            <label>Contact Number: </label>
            <input type="text" className='form-control' />
          </div>

          <div className='form-group'>
            <label>Email: </label>
            <input type="text" className='form-control' />
          </div>

          <div className='form-group'>
            <label>Position: </label>
            <input type="text" className='form-control' />
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