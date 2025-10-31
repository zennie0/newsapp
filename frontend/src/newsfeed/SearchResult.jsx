import React from 'react';

function SearchResult({news}) {
 console.log("seach result :", news);
    if(!Array.isArray(news) || news.length === 0){return(<h4>search result will appear here.</h4>)}
    return ( 
        <>

        <h1> Search Result</h1>
        
               <div className="today">
               <ul>
               {news.map((article,idx)=>(
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

export default SearchResult;