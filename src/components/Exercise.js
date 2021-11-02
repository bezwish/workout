
const Exercise = ({exerciseName,reps,sets,upBtn,downBtn,deleteBtn}) => {
    return (
<li className="exercise"> <span>{upBtn}{downBtn}{deleteBtn}</span> {exerciseName} {reps}x{sets} </li>
    )
}

export default Exercise
