import SessionForm from "./SessionForm"
import Exercise from "./Exercise"
import {useState} from "react"
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Program = ({split,exercises,setExercises,setStep}) => {
const [active,setActive] = useState(1)
const [routine,setRoutine] = useState([[],[],[],[],[],[]])
const activate = (x) => {
setActive(x)
setExercises(routine[x])
}
const moveUp= (y) => {
    let replica = [... exercises]
  if (y!==0) {  replica.splice(y-1,0,replica[y])
    replica.splice(y+1,1)

    console.log(replica, exercises)
setExercises(replica)}
else {
alert("already on top!")
}
}
const moveDown= (z) => {
    let replica = [... exercises]
  if (z+1!==replica.length) {  replica.splice(z+1,0,replica[z])
    replica.splice(z,1)

setExercises(replica)}
else {
alert("only up from here")
}
}
const remove= (a) => {
    let replica = [... exercises]
 replica.splice(a,1)

setExercises(replica)
}

return (
        <div className="nav">
            
                <ul className="flex">
                {split.length>0 && split.map((sesh,index)=>
                <li onClick={()=>activate(index)} 
                className={active===index?"nav-item active":"nav-item"}
                 key={index}><p>{sesh}</p></li>)}
<li className="orb"> </li>
                    </ul>
                  <SessionForm active={active} routine={routine} setRoutine={setRoutine} exercises={exercises} onSubmit={setExercises}/>


<div className="back grid">
{exercises.length===0?<p>Add some exercises!</p>:
<ul style={{display:"block"}} className="exercises">
{exercises.map((exercise,index)=><Exercise key={index} 
upBtn={<button className="btn-2" onClick={()=>moveUp(index)}><span><FaSortUp style={{color:"white"}}/></span></button>}
downBtn={<button className="btn-2" onClick={()=>moveDown(index)}><span><FaSortDown style={{color:"white"}}/></span></button>}
deleteBtn={<button className="btn-2" onClick={()=>remove(index)}><span><FaTimes style={{color:"white"}}/></span></button>}
 exerciseName={exercise.name} reps={exercise.reps} sets={exercise.sets} 
active={active}/>)}
</ul>
}
{split.length===0?<div><button className="btn" onClick={()=>setStep(1)}><p>Full program customization</p></button></div>:
<div><button className="btn" onClick={()=>setStep(1)}><p>Back to program selection</p></button></div>}
</div>

        </div>
    )
}

export default Program