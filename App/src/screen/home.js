import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Logo from "../asset/logo.png"

export default function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  return (
    <div className={"Modal Modal_Show"}>
        <div className="Modal_Con">
          <img src={Logo}/>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
          <input value={room} onChange={(e)=>setRoom(e.target.value)} placeholder="Enter Room"/>
          <button onClick={()=>{
            if(name && room){
              navigate({
                pathname:"/chat",
                search: `u=${name}&r=${room}`
              })
            }
          }}>Submit</button> 
        </div>
      </div>
  )
}
