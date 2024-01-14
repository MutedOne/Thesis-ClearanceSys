
export default function RightDesign(props:any) {
  
  
    return (
      <>
     
      <main className="mt-5 pt-3 no-printme">
      {props.tableViewId}
          <div className="container-fluid">
        <div className="bg-white rounded-3 p-4">
        <h3 className="text-start">{props.pageroute.toUpperCase()}</h3>
          <div className="d-flex justify-content-between">        
           {props.tablecreate}
            <div>
                <div className=" d-flex">   
                  {props.filtersearch}
                  {props.tablesearch}
                 
                </div>
            </div>
            </div>
           {props.tableview}
          <div>
          {props.tablerow}
        </div>
        </div>
      </div>
      </main>
 
      </>

    )

}