import React from 'react'

const Menu = ({setStep}) => {

const move = (page)=> {
    setStep(page)
}

    return (
        <div className="menu">
            <button className="menu-item" onClick={()=>move(2)}><p> Quick workout</p></button>
            <button className="menu-item" onClick={()=>move(2)}><p> Custom training session</p></button>
            <button className="menu-item" onClick={()=>move(3)}><p> Create a workout Program</p></button>

        </div>
    )
}

export default Menu