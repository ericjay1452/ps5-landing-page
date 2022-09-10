import React from 'react'
import { AiOutlineSetting } from "react-icons/ai"
import {HiCog } from "react-icons/hi"
import {BsSearch} from "react-icons/bs"
import { TbLocation } from "react-icons/tb"
import user from "./assets/user.jpg"
import spider from "./assets/spider.jpg"

const App = () => {
  return (
    <main className='main'>

      <header style={{display : "flex", width : "100%", padding: "40px", justifyContent : "space-between"}}>
        <section style = {{fontSize: "1.5rem", color: "white", display : "flex", 
        justifyContent: "space-between", width: "250px", fontWeight : "100" }}>

        <a href={''} style= {{fontWeight :"700", color: "white"}}>Games</a>
        <a href={''} style = {{color : "gray"}}>Medias</a>
        </section>

        <section style = {{display : "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        width : "450px", color: "white"}}>
          <span style={{fontSize : "1.5rem", color : "white"}}>
          <AiOutlineSetting />
          </span>
          
          <span style={{fontSize : "1.5rem", color : "white"}}>
          <BsSearch />
          </span>

        <span style={{fontSize : "1.5rem", color : "white"}}>
        <HiCog />
        </span>

           <span style = {{display: "block", height : "40px", width : "40px"}}>
            <img src={user} alt='user' style={{borderRadius: "50%", objectFit : "cover"}}/>
           </span>

           <span style={{fontSize : "1.5rem", color : "white"}}> 11 : 40 pm</span>
        </section>
      </header>

      <div style={{ maxWidth : "90%", margin :"0, auto"}}>
        <section style = {{display : "flex", marginBottom: "250px", position:"relative"}}>

          <div style = {{
            background: "linear-gradient(60deg,rgba(16,25,37,1) 0%, rgba(0, 0, 1) 50%, rgba(16,25,37,1) 100%)",
            width: "100px",
            height: "100px",
            borderRadius : "20%",
            marginRight : "15px",
            cursor: "pointer",
            border: "0px solid #576170"
          }} className= "game-active">
            <div style = {{fontSize: "2rem"}}><TbLocation /></div>
          </div>

          <div style = {{
            background: `url(${spider})`,
            width: "70px",
            height: "70px",
            overflow: "hidden",
            borderRadius : "20%",
            marginRight : "15px",
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition : "center",
            objectFit: "cover"
          }}>
          </div>

          <div style = {{
            background: `url(${spider})`,
            width: "70px",
            height: "70px",
            overflow: "hidden",
            borderRadius : "20%",
            marginRight : "15px",
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition : "center",
            objectFit: "cover"
          }}>
          </div>

          <div style = {{
            background: `url(${spider})`,
            width: "70px",
            height: "70px",
            overflow: "hidden",
            borderRadius : "20%",
            marginRight : "15px",
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition : "center",
            objectFit: "cover"
          }}>
          </div>

          <div style = {{
            background: `url(${spider})`,
            width: "70px",
            height: "70px",
            overflow: "hidden",
            borderRadius : "20%",
            marginRight : "15px",
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition : "center",
            objectFit: "cover"
          }}>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App