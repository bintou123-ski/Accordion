import axios from 'axios';
import React,{useState,useEffect} from 'react';


const Search=()=> {
    const[term, setTerm]=useState('programming')
    const[results, setResults]=useState([])

  console.log(results)
   useEffect(() => {
      const search= async ()=>{
        const{data} = await axios.get('https://en.wikipedia.org/w/api.php',{
              params:{
                  action:'query',
                  list:'search',
                  format:'json',
                  origin:'*',
                  srsearch:term
              }
          });
          setResults(data.query.search)
      }
      search();

          if(term && !results.length){
       search();
          }else{
            const timeOut = setTimeout(() => {
                if(term){
                    search();
                }
            }, 500);
        
            return()=>{
             clearTimeout(timeOut)
            }
          }
    
   }, [term]);

   
   const RenderedList=results.map(result=>{
       return(
           <div key={result.pageid} className="item">
               <div className="right floted content">
                   <a className="ui button"
                   href={`https://en.wikipedia.org?curid=${result.pageid}`}
                   >Go</a></div>
              <div  className="content">
               <div className="header">{result.title}</div>
               <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
              </div>
           </div>
       )
   });
   

    return (
        <div>
            <div className="form">
               <div className="field">
                 <label className="content">SearchBar</label>
                 <input type="text"
                 value={term}
                 onChange={e=>setTerm(e.target.value)}
                 />
               </div>
            </div>
            <div className="ui celled">{RenderedList}</div>
        </div>
    )
}

export default Search
