import React, {useState } from 'react';
import DropDown from './DropDown';
import Options from "./Options";
import Convert from "./Convert";                                                                                                                                                                                                                                                                                                                                                         

const Translate=() =>{
    const[language, setLanguage] = useState(Options[0]);
    const[text,setText]= useState('');

  return(
      <div>
        <div className="ui form">
      <div className="field">
       <label>Select a language</label>
       <input  value ={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
  </div>
         <DropDown Selected={language}
         Options={Options}
         onSelectedChange={setLanguage(Options[0])}
         />
         <hr/>
         <h2>Output:</h2>
         <Convert language={language} text={text}/>
      </div>
  )
}

export default Translate;

