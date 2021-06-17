import React from "react";
import Link from "./Link";

const Header=()=>{
    return (
        <div className="ui secondary pointing menu">
          <Link href="/list" >
              Search
          </Link>
          <Link href="/dropdown" >
              Dropdown
          </Link>
          <Link href="/translate" >
             Translate
          </Link>
          <Link href="/" >
            Accordion
          </Link>
        </div>
    )
}

export default Header;
