import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Search=()=> {
    const[term,setTerm]= useState('programming');
    const[results,setResults]= useState([]);
console.log(results);

    useEffect(() => {
const showResult =async()=>{
const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
    params:{
        action:'query',
        list:'search',
        format:'json',
        origin:'*',
        srsearch:term,
    }
});
setResults(data.query.search);
}
showResult();
    }, [term]);

    const renderedResult = results.map(result=>{
        return <div key={result.pageid} className="term">
               <div  className="content">
                  <div className="header">
                    {result.title}
                  </div>
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
                onChange={e=>setTerm(e.target.value)}/>
            </div>
            </div>
            <div className="ui celled  list">{renderedResult}</div>
            
        </div>
    )
}

export default Search;
