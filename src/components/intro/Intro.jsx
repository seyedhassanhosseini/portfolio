import './intro.scss';
import khodam from './../../assests/khodam1.png';
import down from './../../assests/test/down.png';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


const Intro = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, { showCursor: true, 
      typeSpeed:200,
      backSpeed:50,
      cursorChar: "",
      strings: ["Developer","Mobile and Web Applications"] })

  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={khodam} alt=''/>
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1> SeyedHassan Hosseini</h1>
              <h3>
              Software Engineer  <span ref={textRef}></span>
              </h3>
          </div>
          
      </div>
          
    </div>
  )
}

export default Intro
