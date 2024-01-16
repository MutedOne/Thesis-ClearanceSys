import { Suspense, useEffect, useState } from "react"
import RightDesign from "../components/Rightdesign"
import Body from "../components/body"
import "../components/css/dashboard.css"
import { useSearchParams } from "react-router-dom"
import Paginate from "../components/pagination"
interface defaultTypes{
  username:string,
  firstname:string,
  lastname:string,
  password:string
}

const defaultVal={
  username:'',
  firstname:'',
  lastname:'',
  password:''
}
function allStudent(search){
  return fetch('http://localhost/ClearanceSys/backend/student/allstudent.php?'+search)
}
export default function Student(){
    const [alluser, setalluser] = useState<[defaultTypes]>([defaultVal]);
    const [userinfo,setuserinfo] = useState<defaultTypes>(defaultVal);
    const [pagetotal,setpagetotal] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
      allStudent(searchParams).then(async (data:any)=>{
            const res = await data.json()
            setalluser(res)
      });
      fetch('http://localhost/ClearanceSys/backend/student/totalstudent.php?'+searchParams).then(async (data)=>{
        const res = await data.json()
        setpagetotal(res[0].total)
      })
    },[searchParams])

    function add(){
      event?.preventDefault();
      fetch('http://localhost/ClearanceSys/backend/student/createstudent.php',{
        method:"POST",
        body: JSON.stringify(userinfo)
      }).then(()=>{
        setTimeout(()=>{
          allStudent(searchParams).then(async (data:any)=>{
            const res = await data.json()
            setalluser(res)
        })
        }, 500);
      })
    }

    function searchThis(){
      event?.preventDefault();
   

      Object.entries(userinfo).map( ([key, val]) => {
   
        if(val != ''){
         
          searchParams.set(key, val);
        }
       
      });
       setSearchParams(searchParams);
    }
    const tableview =()=>{
        return <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                <Suspense fallback={<p>Loading...</p>}>
                {alluser.map((user:any,i:number)=> {
                    return (
                        <tr  key={i}>
                        <th scope="row">{user.rn}</th>
                        <td>{user.username}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tableviewid" onClick={()=>viewId(user)} >
                            View
                          </button>
                        </td>
                      </tr>
                    )
                    })}

                  </Suspense>
                </tbody>
              </table>
        </>
      }
      function viewId(details){
        fetch('http://localhost/ClearanceSys/backend/student/idstudent.php',{
          method:"POST",
          body: JSON.stringify(details)
        }).then(async (data)=>{
          const res = await data.json()
         
          setuserinfo(res[0])
        })
      }
      function editChange(){
        event?.preventDefault()
        console.log(userinfo)
        fetch('http://localhost/ClearanceSys/backend/student/updatestudnt.php',{
          method:"POST",
          body: JSON.stringify(userinfo)
        }).then(()=>{
          setTimeout(()=>{
            allStudent(searchParams).then(async (data:any)=>{
              const res = await data.json()
              setalluser(res)
          })
          }, 500);
        })
        
      }
      const tableviewid =()=>{
    
          return ( <>
          
          <div className="modal fade" id="tableviewid" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="specit" onSubmit={editChange} >
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={userinfo?.username} onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, username: e.target.value }))}  required/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">First & last name</span>
                      <input type="text" aria-label="First name" className="form-control" value={userinfo?.firstname} onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, firstname: e.target.value }))}  required/>
                      <input type="text" aria-label="Last name" className="form-control" value={userinfo?.lastname}  onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, lastname: e.target.value }))} required/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" form="specit">Edit save</button>
                </div>
              </div>
            </div>
          </div>
        </>   
        )}
      const tablecreate =()=>{
        return ( <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create">
        Create
        </button>
        <div className="modal fade" id="create" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Add</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="add" onSubmit={add} >
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" required aria-describedby="inputGroup-sizing-default" onKeyUp={(e) => setuserinfo((prevUser) => ({ ...prevUser, username: e.target.value }))}/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">First & last name</span>
                    <input type="text" aria-label="First name" className="form-control" required onKeyUp={(e) => setuserinfo((prevUser) => ({ ...prevUser, firstname: e.target.value }))}/>
                    <input type="text" aria-label="Last name" className="form-control" required onKeyUp={(e) => setuserinfo((prevUser) => ({ ...prevUser, lastname: e.target.value }))}/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input type="password" className="form-control" aria-label="Sizing example input" required aria-describedby="inputGroup-sizing-default" onKeyUp={(e) => setuserinfo((prevUser) => ({ ...prevUser, password: e.target.value }))}/>
                  </div>
                </form>
            
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" form="add">Create</button>
              </div>
            </div>
          </div>
        </div>
      </>   
      )
      }
      
      const tablesearch =()=>{
        return <>
                 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#search">
                  Search
                </button>
                <div className="modal fade" id="search" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="seach" onSubmit={searchThis} >
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, username: e.target.value }))}/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">First & last name</span>
                    <input type="text" aria-label="First name" className="form-control" onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, firstname: e.target.value }))}/>
                    <input type="text" aria-label="Last name" className="form-control" onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, lastname: e.target.value }))}/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setuserinfo((prevUser) => ({ ...prevUser, password: e.target.value }))}/>
                  </div>
                </form>
            
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={()=>setSearchParams('?page=1')}>Clear Search</button>
                <button type="submit" className="btn btn-primary" form="seach">Search</button>
              </div>
            </div>
          </div>
        </div>
              </>
      }
    return (<>
        <Body>
            
        <RightDesign pageroute={'Student'} tableview={tableview()} tablecreate={tablecreate()} tablesearch={tablesearch()} tableViewId={tableviewid()} tablerow={<Paginate total={pagetotal.toString()}/>}></RightDesign>
        </Body>
       
    </>)
}