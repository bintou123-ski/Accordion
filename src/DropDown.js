import React,{useState} from 'react'

const DropDown =({Options,selected,onSelectedChange})=> {
  const[open,setOpen]= useState(false)
    const renderedOptions = Options.map((Option)=>{
      if(Option.value === selected.value){
        return null;
      }
     return (
     <div onClick={()=>onSelectedChange(Option)}
     key={Option.value}
      className="item">
        {Option.label}</div>
     );
    });

return(
    <div  className="ui form">
    <div className="field">
      <label className="label">Select a color</label>
      <div 
      onClick={()=>setOpen(!open)}
      className={`ui selection dropdown ${open?'visible active':''}`}>
          <i className="dropdown icon"></i>
        <div className="text">{selected.label}</div>
            <div className={`menu ${!open?'visible transition':''}`}>{renderedOptions}</div>
      </div>
    </div>   
</div>
);   
};
export default DropDown;
