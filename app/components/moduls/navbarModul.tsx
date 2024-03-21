import React from 'react'
import "./style.scss"
import { TypeStatus } from '../navbar/header'
import { TypeSrc } from '../source/globalnav'

export default function NavbarModule ({status}:TypeStatus | any) {

  
  return (
    <div className={`navbar-module ${status.status ? "active" : "stop"}`}>
        <div  className="container">
        {status.message?.map((el:TypeSrc, id:number)=>(
          
            <h4>{el.title}</h4>
          
        ))}
        </div>
      </div>
  )
}
