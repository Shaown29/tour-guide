import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const{user,logOut}=useAuth();
    return (
        
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home">Best touring Guide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/myorder'>My order</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/manageallorders'>Manage All orders</Link>
        </li>
        
        { user?.email?
       
       <button onClick={logOut} type="button" className="btn btn-primary">Logout</button>:
       <Link className="nav-link" to="/login">Login</Link>
       }
        <span className="navbar-text">
        Signed in as: <a href="#login">{user?.displayName}</a>
      </span>
       
      </ul>
    </div>
  </div>
</nav>
      
    );
};

export default Header;