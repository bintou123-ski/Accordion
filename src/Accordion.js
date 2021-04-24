import React,{useState} from 'react';

const Accordion=({Items}) =>{
    const [activeIndex, setActiveIndex]=  useState(null)
    const onTitleChange=(index)=>{
     setActiveIndex(index)
    }

    const RenderedItems=Items.map((Item,index)=>{ 
        const active = index === activeIndex ? 'active':'';
        return (
        <React.Fragment key={Item.title}>
            <div className={`title ${active}`}
            onClick={()=>onTitleChange(index)}>
           <i className="dropdown icon"></i>
           {Item.title}
        </div>
        <div className={`text ${active}`}>
            <p>{Item.text}</p>
        </div>
        </React.Fragment>
       
    )})
    return (
        <div className="ui styled accordion">
         {RenderedItems}
        
        </div>
    )
}

export default Accordion;
