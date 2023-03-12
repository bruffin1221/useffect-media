import './icon.css'

function Icon({title, icon}){
    return(
        <div className="social-icon">
            <img src={icon} alt={title} width="30px" height="30px"/>
        </div>
        
    )
}

export default Icon