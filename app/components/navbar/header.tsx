"use client"
import React, { useState } from 'react'
import logo from "@/public/favicon-32x32.png"
import Image from 'next/image'
import Link from 'next/link'
import Navigation from "../source/globalnav"
import type { TypeNavigation, TypeSrc } from "../source/globalnav"
import NavbarModule from '../moduls/navbarModul'

export interface TypeStatus  {
    status: boolean,
    message: TypeSrc[] | null,
}
export default function Header() {
  const [status, setStatus] = useState<TypeStatus>({status: false,message: null,});

  
  return (
    <section id='navbar' className={`navbar ${status.status && "active"}`}>
      <div className="container" onMouseLeave={() => setStatus({status: false, message: status.message})}>
        <div
        onMouseLeave={() => setStatus({...status, message: status.message})}
        onMouseEnter={() => setStatus({status: true, message: status.message})}
        className="line"></div>
        <Link href="/"><Image src={logo} alt='logo' /></Link>
        {Navigation.map((el:TypeNavigation, id:number)=>(
            <Link 
            onMouseLeave={() => setStatus({...status, message: status.message})}
            onMouseEnter={() => setStatus({status: true, message: el.src})}
            href={el.to} 
            key={id}
          >
            {el.title}
          </Link>
        ))}
        <br />
        <NavbarModule status={status} />
      </div>
    </section>
  )
}
