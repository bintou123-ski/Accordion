import React, { Component,useState } from 'react';
import DropDown from './DropDown';
import Options from './Options';
//import Accordion from "./Accordion";
//import Items from "./Items"
//import Counter from "./Counter";
import Search from  "./Search";


const App = ()=>{
    const[selected,setSelected] = useState(Options[0]);
    const[showdropdown, setShowdropdown]= useState(true);
    return(
        <div>
            <button onClick={()=>setShowdropdown(!showdropdown)}>Toggle DropDown</button>
            { showdropdown?
                 <DropDown 
                 selected={selected}
                 onSelectedChange={setSelected}
                 Options={Options}/>:null
            }
           
              {/*<Search/>
          <Counter/>
           <Accordion Items={Items}/>*/}
        </div>
    )
}
export default App;