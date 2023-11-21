import React from "react";
import { useNavigate } from "react-router-dom";

function Demo1(){
    const navigate = useNavigate();
    const btnclicked = () => {
        navigate(`/courselist`);
    }

    return(
        <div>1
            <button onClick={btnclicked}>Click me</button>
        </div>
    );
}   

export default Demo1;