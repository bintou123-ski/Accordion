import React, { Component } from 'react';
import DropDown from './DropDown';
import Options from './Options';
//import Accordion from "./Accordion";
//import Items from "./Items"
//import Counter from "./Counter";
import Search from  "./Search";


const App = ()=>{
    return(
        <div>
            <DropDown Options={Options}/>
              {/*<Search/>
          <Counter/>
           <Accordion Items={Items}/>*/}
        </div>
    )
}
export default App;