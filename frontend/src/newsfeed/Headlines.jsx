import React, { useEffect, useState } from 'react'
import "./navbar.css";

function Headlines() {
const [headlines, setHeadlines]= useState([]);

 const url = import.meta.env.VITE_API_URL || "http://localhost:5000"


let getHeadline = async()=>{
   try{
     let response =  await fetch(`${url}/api/news?q=`);
     let jsonresponse = await response.json();
     let articles = jsonresponse.articles;
     setHeadlines(articles);
   }catch(err){
    console.log(err);
   }
}

useEffect(()=>{
getHeadline();
},[]);


    return ( 
        <>
       <h1>Today's Headlines</h1>

       <div className="today">
        <ul>
       {headlines.map((article,idx)=>(
         <li key={idx}>
            <img src={article.urlToImage} alt="" />
            <h3>{article.title}</h3>
            <p>{article.content}</p>

        </li>
       ))}
        </ul>
        

        
       
      </div>
        </>
     );
}



export default Headlines;