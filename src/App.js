import React from 'react'
import { AiOutlineSetting } from "react-icons/ai"
import {HiCog } from "react-icons/hi"
import {BsSearch} from "react-icons/bs"
import user from "./assets/user.jpg"

const App = () => {
  return (
    <main className='main'>

      <header style={{display : "flex"}}>
        <section>
        <a href={''}>Games</a>
        <a href={''}>Medias</a>
        </section>

        <section>
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