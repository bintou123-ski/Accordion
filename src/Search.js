import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Search=()=> {
    const[term,setTerm]= useState('');
    const[results,setResults]=useState([])
console.log(results);

    useEffect(() => {
        const ShowResult = async()=>{
        const{data}=  await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:term
                }    
            })
         setResults(data.query.search)
        }
      ShowResult();
    }, [term]);

    const RenderedResult=results.map(result=>{
        return <div className="item">
                   <div className="content">
                       <div className="header">{result.title}</div>
                        {result.snippet}
                   </div>
        </div>
    })

    return (
        <div>
            <div className="ui form">
            <div className="field">
                <label>Search bar</label>
                <input type="text"
                value={term}
                onChange={e=>setTerm(e.target.value)}
                />
             
            </div>
            </div>
            
            <div className="ui celled list">{RenderedResult}</div>
           
        </div>
    )
}

export default Search;
