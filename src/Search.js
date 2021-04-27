import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Search=()=> {
    const[term,setTerm]= useState('programming');
    const[results,setResults]= useState([]);
    const[debouncedTerm,setDebouncedTerm]= useState(term)

        console.log(results);

        useEffect(() => {
        const timeOut= setTimeout(() => {
           setDebouncedTerm(term)  
         }, 1000);
         return () => {
            clearTimeout(timeOut)
        }
        }, [term]);

        useEffect(() => {
            const showResult = async()=>{
                const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
                    params:{
                        action:'query',
                        list:'search',
                        format:'json',
                        origin:'*',
                        srsearch:debouncedTerm
                    }
            });
            
            setResults(data.query.search);
            };
            showResult();
           
        }, [debouncedTerm])

   
    const renderedResult = results.map(result=>{
        return <div  key={result.pageid} className="term">
            <div className="right floated content">
                <a className="ui button"
                 href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
            </div>
               <div  className="content">
                  <div className="header">
                    {result.title}
                  </div>
                  <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                  
               </div>
        </div>
    });

    return (
        <div>
            <div className="ui form">
            <div className="field">
                <label>Search bar</label>
                <input type="text"
                value={term}
                onChange={e=>setTerm(e.target.value)}/>
            </div>
            </div>
            <div className="ui celled list">{renderedResult}</div>
            
        </div>
    )
}

export default Search;
