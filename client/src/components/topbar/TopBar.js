import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'
import { useContext } from "react";
import { Context } from "../../context/Context";

function TopBar(props) {
  const { user,dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
   dispatch({ type: "LOGOUT" });
  };
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className='topCentre'>
        <ul className='topList'>
            <li className='topListItem'>
                <Link className='link' to="/">Home</Link>
            </li>
            <li className='topListItem'></li>
            <li className='topListItem'>Contact</li>
           < li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {user && <li className="topListItem"onClick={handleLogout}>Logout</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://i.pinimg.com/736x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}  
export default TopBar;