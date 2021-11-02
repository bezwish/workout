import {useState} from "react"
import AdvancedForm from "./AdvancedForm"

function SessionForm({routine,setRoutine, exercises, onSubmit, active}) {

const [value,setValue] =useState("")
const [sets,setSets] =useState("3")
const [reps,setReps] =useState("12")
const [collapse,setCollapse] =useState(true)

const handleChange = (e) => {
  e.target.id==="value"?setValue(e.target.value):e.target.id==="reps"?setReps(e.target.value):setSets(e.target.value)
  }

const handleSubmit = (e)  => {
  e.preventDefault()
  if (!value|!reps|!sets) {alert("please submit something ffs")
return}
let newExercise = {name:value,reps:reps,sets:sets}
let newExercises= [...exercises, newExercise]
 onSubmit(newExercises)
 setValue("")
 setReps("12")
 let newRoutine = routine
 newRoutine[active].push(newExercise)
setRoutine(newRoutine)
}
/////////////////////////////// RENDER ///////////////////////////////////////////////////////////////////////////////////////
  return (<div className="form">
    <form onSubmit={handleSubmit}>
<div className="form-control">
<label htmlFor="">Exercise</label>
<input onChange={handleChange} id="value" value={value} type="text" list="library" placeholder="Add an exercise" className="text" />
<datalist id="library">
  <option value="push ups"/>
  <option value="pull ups"/>
  <option value="sit ups"/>
  <option value="squats"/>
</datalist>
<br/>

<label>Reps</label>
<input onChange={handleChange} id="reps" value={reps} type="number" min={1} placeholder="Reps" className="num" />
<label htmlFor="">Sets</label>
<input onChange={handleChange} id="sets"value={sets} type="number" min={1} max={12} ma placeholder="Sets" className="num" />



</div>
<AdvancedForm collapse={collapse} setCollapse={setCollapse}/>

<div className="flex"><input className="btn" type="submit" value="Add Exercise" /></div>

    </form>
   

    </div>


  );
}

export default SessionForm;
