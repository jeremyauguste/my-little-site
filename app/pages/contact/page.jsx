import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function contact() {
  return (
    <div style={{height: '100%'}}>
      <Header/>
      <div style={{margin: '20px', display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <div>
          <h1>This is how you'd reach me now!</h1>
        </div>
        <div>
          <h1>PAGE CONTENT!!! FEED ME PAGE CONTENT!!!!</h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default contact
