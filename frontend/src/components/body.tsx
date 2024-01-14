import Header from "./header";
import Sidenav from "./sidenav";
import "../components/css/dashboard.css"

export default function Body(props){
    return (  
         <>
        <Header />
          <Sidenav/>
        {props.children} 
    </>
        
        )
}