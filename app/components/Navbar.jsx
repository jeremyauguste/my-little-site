import Link from 'next/link'
import React from 'react'

let linkList = [
  'eenie',
  'meenie',
  'mynie',
  'clyde'
]

const navLinks = linkList.map((item, i) => {
  return (
    <div key={i} onClick={() => { setHeader(item.title) }}>
      <div>
        <img src={item.picture} alt='an exercise' />
      </div>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        {item.title}
      </div>
    </div>
  )
})
function Navbar() {
  return (
    <nav style={{width:'100%',height:90,backgroundColor:'#b9ffbc',display:'flex',flexDirection:'row',justifyContent:'right',padding:'0 25px', color:'black'}}>
      <ul style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:20}}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/photography">Photography</Link>
        </li>
        <li>
          <Link href="/pages/projects">Projects</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
