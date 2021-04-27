import React from 'react'

const DropDown =({Options})=> {
    const renderedOptions = Options.map((Option)=>{
     return (
     <div key={Option.value} className="item">{Option.label}</div>
     );
    });

return(
    <div  className="ui form">
    <div className="field">
      <label className="label">Select a color</label>
      <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
        <div className="text"> Select Color</div>
            <div className="menu visible transition">{renderedOptions}</div>
      </div>
    </div>   
</div>
);   
};
export default DropDown;
