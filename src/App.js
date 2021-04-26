import React, { Component } from 'react';
import Accordion from "./Accordion";
import Items from "./Items"
import Counter from "./Counter";
import Search from  "./Search";


const App = ()=>{
    return(
        <div>
            <Search/>
            {/*<Counter/>
           <Accordion Items={Items}/>*/}
        </div>
    )
}
export default App;