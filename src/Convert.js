import axios from 'axios'
import React,{useState,useEffect} from "react";
import Options from "./Options";

  
const Convert=({language,text})=> {
    const[translate,setTranslate]= useState(Options[0]);

    const url = "https://translation.gooogleapis.com/language/translate/v2"


    useEffect(() => {
        const fetch = async()=>{
            const {data}=await  axios.get(url,{},{
                params:{
                     q:text,
                     target:language.value,
                     key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslate(data)
        }
        fetch();
    }, [translate,text])
    return (
        <div/>
    )
}

export default Convert;
