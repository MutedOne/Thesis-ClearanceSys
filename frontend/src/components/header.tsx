import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContx } from "./auth";

export default function Header(){
    const userdetail = useContx();
    const [ucred] = useState(userdetail||{username:''});
    const navigate = useNavigate();
    const logout =()=>{
      sessionStorage.removeItem("sessionkey");
      navigate("/");
    }
    return (
      <>
  
  <nav className="navbar navbar-expand-lg navbar-dark  fixed-top no-printme" style={{backgroundColor:"#aa00ff"}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
        </button>
        <a
          className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          href="#"
          >
             <img src="/Bootstrap_logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top "/>
              S2
          </a>
          
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavBar">
          <form className="d-flex ms-auto my-3 my-lg-0">
            <div className="input-group">
             
           
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                <li> 
                <div className="card" style={{width: '18rem'}}>
                  {/* <img className="card-img-top" src={'${import.meta.env.VITE_API_ENDPOINT}/public/account/'+props.userdetail?.id+'.png'} alt="Card image cap" onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src="/profile.png";
                    }} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{ucred.username}</h5>
                    {/* <p className="card-subtitle">{ucred?.rolename}</p>
                    <p className="card-subtitle">{ucred?.departmentname}</p> */}
                    <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
                  </div>
                </div>
                 
                </li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </>
)}