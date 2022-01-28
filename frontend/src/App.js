import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// import component
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render () {
    return(
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light mx-auto'>
            <Link to={'/'} className='navbar-brand'> MERN CRUD</Link>
            <div className='collapse navbar-collapse' id='navbarContent'>
              <ul className='navbar-nav mr-auto'>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link navbar-brand">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>MERN CRUD</h2> <br/>
          <Routes>
            <Route path = '/create' element = {<Create />} />
            <Route path = '/edit/:id' element = {<Edit />} />
            <Route path = '/index' element = {<Index />} />
          </Routes>
        </div>
      </Router>
    );
  };
};

export default App;