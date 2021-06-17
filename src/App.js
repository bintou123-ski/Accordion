import React,{useState} from 'react';
import DropDown from './DropDown';
import Options from './Options';
import Route from './Route';
import Accordion from "./Accordion";
import Items from "./Items"
//import Counter from "./Counter";
import Search from  "./Search";
import Translate from './Translate';
//import Books from "./Books"
import Header from "./Header";
import { Switch } from 'react-router';

                                       
//const App = ()=>{
  // const[selected, setSelected] = useState(Options[0])

  /*const ShowAccordion =()=>{
      if(window.location.pathname === '/' ){
          return <Accordion items= {items}/>
      }
  }
  const Showdropdown = ()=>{
      if(window.location.pathname === '/dropdown'){
          return <DropDown/>
      }
  }
  const ShowList = ()=>{
      if(window.location.pathname === '/list'){
          return <Search/>
      }
  }
  const ShowTranslate =()=>{
     if(window.location.pathname === '/Translate'){
          return <Translate/>
      }
  }

  const ShowComponent  =(route,component)=>{
      return window.location.pathname === route
      ?component
      :null;
  }*/

  export default () =>{
    const[selected, setSelected] = useState(Options[0])
    return( 
        <div>
            <Header/>
          <Route  path='/'>
                <Accordion Items={Items}/>
             </Route>

             <Route  path='/list'>
                <Search/>
             </Route>

             <Route  path='/dropdown'>
                <DropDown Options={Options}
                  selected={selected}
                  onSelectedChange={setSelected}/>
             </Route>
         
             
           {/* <button open={open} onClick={()=>open?
            <DropDown Options={Options}
            selected={selected}
            onSubmitChange={setSelected}/>:null
            }>Toggle</button>
            <Books />
            <Search/>
            <Translate/>
            <button onClick={()=>setShowdropdown(!showdropdown)}>Toggle DropDown</button>
            { showdropdown?
                 <DropDown 
                 selected={selected}
                 onSelectedChange={setSelected}
                 Options={Options}/>:null
            }

           
           <Search/>
          <Counter/>
           <Accordion Items={Items}/>*/}
        </div>
    )
}
//}
