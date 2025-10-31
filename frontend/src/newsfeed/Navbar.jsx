import React, { useState, useEffect } from 'react'
import "./navbar.css";
function Navbar({searchNews}) {
 let [search,setSearch]=useState("");
 let [error,setError]= useState(false);
 let [news,setNews]=useState([]);

  const url = import.meta.env.VITE_API_URL || "http://localhost:5000"

  const getNews = async()=>{
    try{
      let response = await fetch(`${url}/api/news?q=${search}`);
      let jsonresponse = await response.json() ;
      console.log(jsonresponse.articles);
     

      return jsonresponse.articles;
    }catch(err){
      console.log(err);
    }


  }

  let handleSubmit = async(e)=>{
    try{
      e.preventDefault();
      setSearch("");
      let results = await getNews();
      searchNews(results);
    }catch(err){
      setError(true);

    }
  }

  useEffect(()=>{
    if(error){
      const timer = setTimeout(()=>{
        setError(false);
      },3000);
      return()=> clearTimeout(timer);
    }
  },[error])
    return ( 
        <div className="navbar">
         <h2>NEWS</h2>
         <h4>Home</h4>
         <h4>About us</h4>
         <h4>Magazines</h4>
        <div className='input'>
          <form onSubmit={handleSubmit}>
           <input type="text" required value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
         <button type="submit">search</button>
           </form>
         </div>
       
       </div>
     );
}

export default Navbar;