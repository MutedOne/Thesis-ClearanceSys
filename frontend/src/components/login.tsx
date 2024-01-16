import {  useState } from "react";
import {useNavigate } from "react-router-dom";
interface UserDetail{
  username: string,
  password: string, 
}
export default function Login(){
  event?.preventDefault
  const [found, setfound] = useState(false);
  const [userD, setuserD] = useState<UserDetail>({
    username: '',
    password: '',
  });
  const nav =useNavigate()
  // Update the document title using the browser API
  const verifylog=()=>{
    
    event?.preventDefault();
    try{
      fetch('http://localhost/ClearanceSys/backend/login.php',{
        method:"POST",
        body: JSON.stringify(userD)
      }).then(async (data:Response)=>{
        const res:any = await data.json();
        if (res.length != 0){
          
          setfound(false);
          sessionStorage.setItem('sessionkey',JSON.stringify(res))
          nav("/dashboard");
          
        }else{
          setfound(true);
        }
       
      })
    }catch(err){
      console.log(err)
    }
  
  }

    return (
<div className="form-signin container">
    
    
      <form>
        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" onChange={(e) => setuserD((prevUser) => ({ ...prevUser, username: e.target.value }))} />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setuserD((prevUser) => ({ ...prevUser, password: e.target.value }))}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={verifylog}>Sign in</button>
        
        {found==true?<div className="alert alert-danger" role="alert">
          No user found
        </div>:''}
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>

    </div>
    )
    }
 