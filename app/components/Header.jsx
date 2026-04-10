import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

function Header() {
  return (
    <header style={{width:'100%',height:90,backgroundColor:'#b9ffbc',display:'flex',flexDirection:'row',justifyContent:'right',padding:'0 25px', color:'black', alignItems: 'center'}}>
      <Link href="" style={{whiteSpace: 'nowrap'}}>Jeremy Auguste</Link>
      <Navbar/>
    </header>
  )
}

export default Header
