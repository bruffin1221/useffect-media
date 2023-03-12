import './Navbar.css'
import {NavData} from './NavData'
// import Pages from './Pages'

function Navbar (props){

    const pages = (id)=>{  
        const subPages = NavData.filter((data)=>{
            return data.id===id
        })
        props.categories(subPages[0])
    }


    return(
       <div className="navbar">
         <p onClick={()=>pages(props.id)}>{props.title}</p>
       </div>
    )
}

export default  Navbar