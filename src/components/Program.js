import React from 'react'
import ProgramForm from "./ProgramForm"
const Program = ({setStep,setSplit}) => {


    return (
        <div>
            <ProgramForm setSplit={setSplit}/>

       <div className="back grid">   
       <div className="right"> <button className="btn" onClick={()=>setStep(2)}><p>Proceed to Session Customization</p></button> </div>
</div>

        </div>
    )
}

export default Program
