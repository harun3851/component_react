import React, { useEffect } from "react";
import { useState } from "react";
export const Text=() =>{
    const[text, setText] = useState("");
useEffect(()=>{
        console.log("componenet mounted");
    return()=>{
        console.log("comppount unmounted")
    };

},[]);

    return(
        <div>
            <input onChange={(event) =>{
                setText(event.target.value);
            } }
            />
            <h1>{text}</h1>
        </div>
    )
}