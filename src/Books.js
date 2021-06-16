import React,{useState,useEffect} from 'react'
import axios from "axios"

const Books=()=> {
    const[books, setBooks] = useState('hardcover-fiction')
    const[results, setResults] = useState([])

    console.log(results);
   useEffect(() => {
       const search = async()=>{
           const {data} = await axios.get('https://api.nytimes.com/svc/books/v3/reviews.json',{
               params:{
                   
                 published_dat:'2013-05-22',
                 api_key:'VKDNWrYvrCo3xiGwRzZLtaFZQdlAAgh0'
               }
           })
             
           setResults(data.results) 
          
       }
       search();
       const timeOut = setTimeout(() => {
           if(books){
               search();
           }
       }, 500);
       return () => {
          clearTimeout(timeOut)
       }
   }, [books]);
   
   const RenderedBooks = results.map(result=>{
    return(
        <div key={result.results.list_id}>
    <div>{result.results.lists.list_image}</div>
    <div>{result.results.lists.title}</div>
    <div>{result.results.lists.description}</div>
        </div>
    ) 
   })
    return (
        <div>
            
            <div className="ui form">
                <div  className="field">
                    <label>Search</label>
                    <input type="text"
                    value={books}
                    onChange={e=>setBooks(e.target.value)}/>
                   <div>{RenderedBooks}</div>
                </div>
            </div>
        </div>
    )
}

export default Books
