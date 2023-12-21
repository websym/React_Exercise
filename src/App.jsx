import { useState } from "react"


//Exercise 1
const App=()=>{
  const[good,setGood]=useState(0)
  const[neutral,setNeutral]=useState(0)
  const[bad,setBad]=useState(0)
 //let total=good+neutral+bad
  
  return(
    <div>
      <h1><strong>Give FeedBack</strong></h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <br/>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
    </div>
  )
}


export default App
