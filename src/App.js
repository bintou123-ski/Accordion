import React, { Component,useState } from 'react';
import DropDown from './DropDown';
import Options from './Options';
//import Accordion from "./Accordion";
//import Items from "./Items"
//import Counter from "./Counter";
import Search from  "./Search";


const App = ()=>{
    const[selected,setSelected] = useState(Options[0]);
    return(
        <div>
            <DropDown 
            selected={selected}
            onSelectedChange={setSelected}
            Options={Options}/>
              {/*<Search/>
          <Counter/>
           <Accordion Items={Items}/>*/}
        </div>
    )
}
export default App;