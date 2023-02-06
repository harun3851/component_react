import './App.css';
import { useEffect, useState} from 'react';
import {Text} from "./Text";
import Axios from 'axios';



function App() {
// 1.medhot fetch("https://catfact.ninja/fact")
//.then((res)=>res.json())
//.then((data)=>{
//console.log(data);
//});
 const fetchCatFact=()=>{
 Axios.get("https://catfact.ninja/fact").then((res)=>{
setCatFack(res.data.fact);
  });
  }
  const [catFact,setCatFack]=useState(""); 
  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
  setCatFack(res.data.fact);
});

  },[]);

  const [showText,setShowText]=useState(false);
  return (
    <div className="App">
   
     <button
        onClick ={()=>{setShowText(!showText);
     }}
     > show text
     </button>
     {showText && <Text />}
     <br></br>
     <br></br>
     <br></br>

     <button onClick={fetchCatFact}>generate cat fact</button>
     <p>{catFact}</p>
    </div>
  );
}

export default App;
