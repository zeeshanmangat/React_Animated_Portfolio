import React,{useEffect,useRef} from "react";
import pdf from '../pdf/zeeshan resume.pdf'
import hero from './Data/hero.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js'

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const option={
      strings:["Welcome to my portfolio","Myself ZEESHAN ","I'm Front End Developer(React.js)"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current,option)

    return() =>{
      typed.destroy
    }
  },[])
  return (
    <>
      <div className="Container home  " id="home">
        <div className="left col-md-8 col-sm-1"  data-aos="fade-up-right"
      data-aos-duration="1000">
          <h1 ref={typedRef}>
           I'm Front End Developer 
          </h1 >
          <a href={pdf} download="Zeeshan resume" className="btn btn-outline-warning my-5">
            Download resume
          </a>
        </div>
        <div className="right">
            <div className="img"  data-aos="fade-up-left"
      data-aos-duration="1000">
                <img src={`/${hero.imgSrc}`} alt="now"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
