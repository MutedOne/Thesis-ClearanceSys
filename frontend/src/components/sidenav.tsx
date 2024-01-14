import "./css/Sidemenu.css";

import "../components/css/dashboard.css"


export default function Sidenav() {

    return (
        <>
       <div
      className="offcanvas offcanvas-start sidebar-nav bg-white "
      tabIndex={-1}
      id="sidebar"
    >
      <div className="offcanvas-body p-0 no-printme text-start">
        <nav className="navbar-dark">
          <ul className="navbar-nav">
        
            <li>
              <a href="/dashboard" className="nav-link px-3 text-secondary text-secondaryactive text-secondary">
                <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                <span>Dashboard</span>
              </a>
            </li>
         
            <li>
              <a
                className="nav-link px-3 text-secondary text-secondarysidebar-link text-secondary"
                data-bs-toggle="collapse"
                href="#layouts"
              >
                <span className="me-2"><i className="bi bi-layout-split"></i></span>
                <span>User</span>
                <span className="ms-auto">
                  <span className="right-icon">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div className="collapse show" id="layouts">
                <ul className="navbar-nav ps-3 ">
                  <li>
                    <a href="/user/student?page=1" className="nav-link px-3 text-secondary">
                      <span className="me-2 "
                        ><i className="bi bi-speedometer2"></i></span>
                      <span>Student</span>
                    </a>
                  </li>
                  <li>
                    <a href="/user/faculty?page=1" className="nav-link px-3 text-secondary">
                      <span className="me-2 "
                        ><i className="bi bi-speedometer2"></i></span>
                      <span>Faculty</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
   
           
          </ul>
        </nav>
      </div>
    </div>
        </>
       

);
}