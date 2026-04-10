import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer style={{width:'100%',height:90,backgroundColor:'#b9ffbc',display:'flex',flexDirection:'row',justifyContent:'center',padding:'0 25px', color:'black', alignItems: 'center', bottom: 0, position: 'absolute', gap: '15px'}}>
        <Link href="https://github.com/jeremyauguste">GitHub</Link>
        <p>•</p>
        <Link href="https://www.linkedin.com/in/jeremyauguste/">LinkedIn</Link>
    </footer>
  )
}

export default Footer
