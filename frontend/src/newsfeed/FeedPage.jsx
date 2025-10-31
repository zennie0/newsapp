import React, { useState } from 'react'
import "./navbar.css";
import Categories from "./Categories"

import Navbar from "./Navbar"
import SearchResult from "./SearchResult"

import Headlines from "./Headlines"
function FeedPage() {

    const [newsearch,setNewsearch]= useState([]);

    let  searchNews=(newse)=>{
        setNewsearch(newse);
    }
    return ( 
        <>
       <Navbar searchNews={searchNews}/>
       <div className='body'>
        <div className="catogary"><Categories/></div>
       <div className="headline"><Headlines/></div>
       <div className="search"><SearchResult news={newsearch}/></div>
       </div>
        
        </>
     );
}

export default FeedPage;