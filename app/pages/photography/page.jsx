import React from 'react'
import Image from 'next/image'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import picOne from "../../../public/pictures/photography/nature/IMG_4776.jpg"
import picTwo from "../../../public/pictures/photography/nature/IMG_4778.jpg"
import picThree from "../../../public/pictures/photography/nature/IMG_4781.jpg"
import picFour from "../../../public/pictures/photography/nature/IMG_4798.jpg"
import picFive from "../../../public/pictures/photography/nature/IMG_4802.jpg"
import picSix from "../../../public/pictures/photography/nature/IMG_4810.jpg"
import picSeven from "../../../public/pictures/photography/nature/IMG_4829.jpg"
import picEight from "../../../public/pictures/photography/nature/IMG_4834.jpg"
import picNine from "../../../public/pictures/photography/nature/IMG_4837.jpg"
import picTen from "../../../public/pictures/photography/nature/IMG_4842.jpg"
import picEleven from "../../../public/pictures/photography/nature/IMG_4846.jpg"
import picTwelve from "../../../public/pictures/photography/nature/IMG_4847.jpg"
import picThirteen from "../../../public/pictures/photography/nature/IMG_4853.jpg"

const nature = [
  picOne,
  picTwo,
  picThree,
  picFour,
  picFive,
  picSix,
  picSeven,
  picEight,
  picNine,
  picTen,
  picEleven,
  picTwelve,
  picThirteen
]

function photography() {
  return (
    <div style={{}}>
      <Header/>
      <div style={{margin: '20px', display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <div>
            <h1>Have a look at some photos I took!</h1>
        </div>
        <div>
          {/* album switcher */}
          <div></div>
          {/* photo grid */}
          <div style={{width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            {
              nature.map((src,i)=>{
                return <Image style={{width:'25%'}} key={i} alt='img' src={src}/>
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default photography
