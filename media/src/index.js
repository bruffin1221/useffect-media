import Navbar from  './Navbar'
import {NavData} from './NavData'
import {Socialmedia} from './Socialmedia'
import Icon from "./Icon"
import Pages from "./Pages"
import {useEffect, useState} from 'react'
import './index.css'
import React from 'react'
import ReactDom from 'react-dom/client'

function Media(){
    
    const[checkWidth, setWidth] = useState(window.innerWidth)
    // const[sideBar, setSideBar]= useState(true)
    const width=()=>{
        setWidth(window.innerWidth)
    }

    let sideBar = true
    if(checkWidth<1200){
        sideBar=false
    }
    let navBar = false
    if(checkWidth<1200){
        navBar = true
    }

    useEffect(()=>{
       window.addEventListener('resize', width)
       return ()=>{
          window.removeEventListener('resize', width)    
       }
    })
    
    const[web, setWeb] = useState([])
    const getPages =(add)=>{
        setWeb(add)
    }

    let webPages, webPages2, webPages3, webPages4, webPages5= []
    const remove=()=>{
       setWeb([]) 
    }

    if(web.pages !== undefined && web.id===1){
      webPages=(
        <div key={web.id} id="web">
             <p id="delete1" onClick={remove}>Go Back</p>
            {web.pages.map((page)=>{
                return(
                    <Pages pages={page}/>
            ) })}
        </div>)}

    if(web.pages !== undefined && web.id===2){
      webPages2=(
        <div className="web2">
          <p id="delete2" onClick={remove}>Go Back</p>
          {web.pages.map((page)=>{
               return(
                <Pages pages={page}/>
          ) })}
        </div>)}

    if(web.pages !== undefined && web.id===3){
        webPages3=(
          <div className="web3">
            <p id="delete3" onClick={remove}>Go Back</p>
             {web.pages.map((page)=>{
                return(
                    <Pages pages={page}/>
             )})}
          </div>)}
          
    if(web.pages !== undefined && web.id===4){
        webPages4=(
            <div className="web4">
               <p id="delete4" onClick={remove}>Go Back</p>
              {web.pages.map((page)=>{
                return(
                    <Pages pages={page}/>
              ) })}
            </div>)}
             
    if(web.pages !== undefined && web.id===5){
        webPages5=(
            <div className="web5">
               <p id="delete5" onClick={remove}>Go Back</p>
               {web.pages.map((page)=>{
                 return(
                    <Pages pages={page}/>
               )})}
            </div>)}
    
  
    const[navdata, setNav]=useState(false)
    const displayPages=()=>{
            setNav(true)    
    }
    const removeItem =()=>{
        setNav(false)
    }
    const[dropdown0, setDrop0] = useState(false)
    const[dropdown1, setDrop1] = useState(false)
    const[dropdown2, setDrop2] = useState(false)
    const[dropdown3, setDrop3] = useState(false)
    const[dropdown4, setDrop4] = useState(false)

    const pages0=()=>{
        let dropdown = document.getElementById("dropdown")
        dropdown.style.height="55%"

        setDrop0(true)
        setDrop1(false)
        setDrop2(false)
        setDrop3(false)
        setDrop4(false)
     }
    const pages1=()=>{
       let dropdown = document.getElementById("dropdown")
       dropdown.style.height="55%"

       setDrop1(true)

       setDrop0(false)
       setDrop2(false)
       setDrop3(false)
       setDrop4(false)
    }
   
    const pages2=()=>{
       let dropdown = document.getElementById("dropdown")
       dropdown.style.height="55%"
       setDrop2(true)

       setDrop0(false)
       setDrop1(false)
       setDrop3(false)
       setDrop4(false)
    }

    const pages3=()=>{
       let dropdown = document.getElementById("dropdown")
       dropdown.style.height="55%"
       setDrop3(true)

       setDrop0(false)
       setDrop1(false)
       setDrop2(false)
       setDrop4(false)
    }

    const pages4=()=>{
       let dropdown = document.getElementById("dropdown")
       dropdown.style.height="55%"
       setDrop4(true)

       setDrop0(false)
       setDrop1(false)
       setDrop2(false)
       setDrop3(false)
    }
    
    return( 
        <div>
            {sideBar &&
            <div id="container"> 
             <div id="navigation">
                <div id="pages">
                    {NavData.map((data)=>{
                    return(
                         <Navbar key={data.id} {...data} categories={getPages}/>
                    )
                    })}
                </div>
                <div id="social">
                    {Socialmedia.map((media)=>{
                        return(
                            <Icon key={media.id} {...media}/>
                        )
                    })}

                </div>  
            </div>
            <div id="picture">
              <div id="web-page">
               {webPages}
               {webPages2}
               {webPages3}
               {webPages4}
               {webPages5}     
            </div> 
          </div>
          </div> 
          }
          {navBar && 
            <div id="container2">
                <div id="navigation2">
                    <div id="nav-box" 
                     onClick={displayPages}>
                        <div className="nav"></div>
                        <div className="nav"></div>
                        <div className="nav"></div>
                    </div>
                </div>
                <div id="picture2">
                    {navdata &&
                      <div id="dropdown">
                        <p onClick={pages0}>{NavData[0].title}</p> 
                          {dropdown0 &&
                              NavData[0].pages.map((data)=>{
                                return(
                                    <div key={Math.random()} className="dropdown2">
                                       <p>{data}</p>
                                    </div>
                                )})}     
                        <p onClick={pages1}>{NavData[1].title}</p> 
                          {dropdown1 &&
                              NavData[1].pages.map((data)=>{
                                return(
                                    <div key={Math.random()} className="dropdown2">
                                       <p>{data}</p>
                                    </div>
                                )})                        }
                        <p onClick={pages2}>{NavData[2].title}</p>
                           {dropdown2 &&
                              NavData[2].pages.map((data)=>{
                                return(
                                    <div key={Math.random()} className="dropdown2">
                                       <p>{data}</p>
                                    </div>
                                )})}   
                        <p onClick={pages3}>{NavData[3].title}</p>
                           {dropdown3 &&
                              NavData[3].pages.map((data)=>{
                                return(
                                  <div key={Math.random()} className="dropdown2">
                                    <p>{data}</p>
                                  </div>)})}   
                        <p onClick={pages4}>{NavData[4].title}</p>
                            {dropdown4 &&
                              NavData[4].pages.map((data)=>{
                                return(
                                  <div key={Math.random()} className="dropdown2">
                                    <p>{data}</p>
                                  </div>)})} 
                        <div id="remove-item">
                          <p onClick={removeItem}>Go Back</p>
                        </div>
                      </div>}
                </div>
            </div>
          }
        </div>
      
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<Media/>)


