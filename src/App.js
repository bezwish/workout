import "./App.css"
import Session from "./components/Session"
import Menu from "./components/Menu"
import Program from "./components/Program"
import {useState} from "react"


function App() {
const [exercises,setExercises] = useState([])
const [step,setStep] = useState("")
const [split,setSplit] = useState([])
  return (
    <div className="app container">
      <h1 className="title">Workout Planner</h1>
      
{step===""?<Menu  setStep={setStep}/>:step===2
?<>
<span className="header"><h3>Workout Customization</h3><button className="btn-2" onClick={()=>setStep("")}><p>Back to Menu</p></button></span>

<Session  setStep={setStep} split={split} exercises={exercises} setExercises={setExercises}/></>
:<>
<span className="header"><h3>Choose Your Workout Plan</h3><button className="btn-2" onClick={()=>setStep("")}><p>Back to Menu</p></button></span>
<Program setStep={setStep} setSplit={setSplit}/></>}
    </div>
  );
}

export default App;
