import {FaAngleDoubleDown,FaAngleDoubleUp} from "react-icons/fa"
const AdvancedForm = ({collapse, setCollapse}) => {
    const onCollapse = () => {
    let temp = !collapse
    setCollapse(temp)}  
  
    return ( 
        <div className="advanced-form">

            
            {!collapse && "No such thing"}



<div  onClick={onCollapse}> {collapse===true?<div><p>Show Advanced Settings</p><FaAngleDoubleDown style={{color:"#DDD"}}/></div>:
            <div><p>Hide advanced Settings</p><FaAngleDoubleUp style={{color:"#DDD"}}/></div>}</div>
        </div>
    
    )
}

export default AdvancedForm
