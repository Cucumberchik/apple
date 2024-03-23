"use client"
import React, { useState } from 'react'
import logo from "@/public/favicon-32x32.png"
import Image from 'next/image'
import Link from 'next/link'
import Navigation from "../source/globalnav"
import NavbarModule from '../moduls/navbarModul'
import { IconSearch, IconShoppingBag } from '@/icons/icon'
import type { TypeNavigation, TypeSrc } from "../source/globalnav"


export interface TypeStatus  {
    status: string,
    message: TypeSrc[] | null,
}

export default function Header() {
  const [status, setStatus] = useState<TypeStatus>({status: "null",message: null,});
  
  return (
    <section id='navbar' className={`navbar ${status.status}`}>
      <div className={`container ${status.status}`} onMouseLeave={() => setStatus({status: "false", message: status.message})}>
        <nav>
          
          <Link href="/"><Image src={logo} alt='logo' /></Link>
            {Navigation.map((el:TypeNavigation, id:number)=>(
              <Link 
                onMouseLeave={() => setStatus({...status, message: status.message})}
                onMouseEnter={() => setStatus({status: "true", message: el.src})}
                href={el.to} 
                key={id}>
                {el.title}
              </Link>
            ))}
            <div className="client_btn">
              <button>
                <IconSearch width='18px' height='18px' />
              </button>
              <button >
                <IconShoppingBag width='18px' height='18px' />
              </button>
            </div>
        </nav>
        <br />
        <NavbarModule status={status} />
      </div>
      {/* <div className="navbar_content"></div> */}
    </section>
  )
}
