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
const [name,setName]=useState("");
const [predictAge,setPredictedAge]=useState(null);
const fetchData=()=>{

  Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    setPredictedAge(res.data);
  });

};
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
     <br></br>
     <input placeholder='harun...' onChange={(event)=>{setName(event.target.value)}}></input>
     <br></br>
     <br></br>
     <button onClick={fetchData} >predict age</button>
     <h1>name:{predictAge?.name}</h1>
     <h1>predict age:{predictAge?.age}</h1>
     <h1>count:{predictAge?.count}</h1>
    </div>
  );
}

export default App;
