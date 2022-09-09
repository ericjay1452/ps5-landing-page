import React from 'react'
import { AiOutlineSetting } from "react-icons/ai"
import {HiCog } from "react-icons/hi"
import {BsSearch} from "react-icons/bs"
import user from "./assets/user.jpg"

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
          <span>
          <AiOutlineSetting />
          </span>
          
          <span>
          <BsSearch />
          </span>

        <span>
        <HiCog />
        </span>

           <span style = {{display: "block", height : "5rem", width : "5rem"}}>
            <img src={user} alt='user' />
           </span>

           {/* <span> {new Date()}</span> */}
        </section>
      </header>
    </main>
  )
}

export default App