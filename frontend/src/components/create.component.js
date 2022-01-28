import React, {Component} from 'react';

export default class Create extends Component{
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