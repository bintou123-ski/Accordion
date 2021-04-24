import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Search=()=> {
    const[term,setTerm]= useState('programming');
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
    }, [term])

    return (
        <div>
            <div className="field">
                <label>Search bar</label>
                <input type="text"
                value={term}
                onChange={e=>setTerm(e.target.value)}
                />
                <button onClick={()=>OnTermChange(term)}>Click me</button>
            </div>
           
        </div>
    )
}

export default Search;
