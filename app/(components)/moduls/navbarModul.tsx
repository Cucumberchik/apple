import React from 'react'
import "./style.scss"
import { TypeStatus } from '../navbar/header'
import { TypeSrc } from '../source/globalnav'
import Link from 'next/link'

export default function NavbarModule ({status}:TypeStatus | any) {

  
  return (
    <div className={`navbar-module ${status.status}`}>
      {status.message?.map((el:TypeSrc, idx:number)=>(
        <div key={idx} style={{
          transition: "0.1s",
          height: status.status === "true" ? "80%" : "0"
        }}>
          <h2>{el.title}</h2>
          {el.src.map((item, id)=><Link key={id} href={item.to}>{item.title}</Link>)}
        </div>
      ))}
    </div>  
  )
}
