import React from "react";

const NavBar = ({setPage} : (any)) => {
    return (
        <nav>
            <button onClick={()=> setPage("planets")}>Planets</button>
            <button onClick={()=> setPage("people")}>People</button>
        </nav>
    );
}

export default NavBar