import { useState } from "react";
import Pagination from "react-js-pagination";
import { useSearchParams } from "react-router-dom";
export default function Paginate(props){
    
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page')||'1')
    return (
        <div>
            <nav>
                <ul className="pagination">
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={20}
                        totalItemsCount={props.total}
                        pageRangeDisplayed={4}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={(cur)=>{setSearchParams({"page":cur.toString()})}}
                    />
                </ul>
            </nav>
          
        </div>
      );
}