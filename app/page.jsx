import Image from "next/image";
import Header from "./components/Header"
import Footer from "./components/Footer"
import profilePic from "./../public/pictures/home/jeremy1.jpg"

export default function Home() {
  return (
    <div style={{height: '100%'}}>
      <Header/>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', margin: '40px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            alt="A picture of this portfolio site's author, Jeremy Auguste."
            src={profilePic}
            style={{width: '40%', borderColor: '#b9ffbc', borderStyle: 'solid', borderWidth: '4px'}}
          />
        </div>
        <div>
          <h1>Hello, and welcome to my portfolio!</h1>
          <p>My name is Jeremy Auguste, and I am a digital media major with an interest in photography.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
