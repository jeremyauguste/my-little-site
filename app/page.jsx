import Image from "next/image";
import Header from "./components/Header"
import Footer from "./components/Footer"
import profilePic from "./../public/pictures/home/jeremy1.jpg"

export default function Home() {
  return (
    <div style={{height: '100%'}}>
      <Header/>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'center', margin: '40px', padding: '0 0', gap: 0}}>
        <Image
          alt="A picture of this portfolio site's author, Jeremy Auguste."
          src={profilePic}
          style={{width: '40%',borderColor: '#b9ffbc', borderStyle: 'solid', borderWidth: '4px'}}
        />
        <div>
          <h1>Hello, and welcome to my portfolio!</h1>
          <p>My name is Jeremy Auguste, and I am a digital media student at the University of Central Florida with an interest in photography and web development, and I like to play video games in my spare time.</p>
          <p>Speaking of video games, I'm currently working on a video game with a team of 4 others to show at an expo!</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
