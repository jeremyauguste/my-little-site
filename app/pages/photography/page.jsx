import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function photography() {
  return (
    <div style={{height: '100%'}}>
      <Header/>
      <div style={{margin: '20px', display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <div>
            <h1>Have a look at some photos I took!</h1>
        </div>
        <div>
          <h1>PAGE CONTENT!!! FEED ME PAGE CONTENT!!!!</h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default photography
