import React from 'react'
import skills from './Data/skills.json'
import 'bootstrap/dist/css/bootstrap.min.css';
const Skills = () => {
  return (
    <>
    <div className="Container skills" id='skills'>
        <h1>Skills</h1>
        <div className="items" >
        {skills.map((data)=>(<>
                <div className="item" key={data.id}
                 data-aos="flip-left"
                 data-aos-duration="1000"
                >
                    <img src={`/assets/${data.imageSrc}`} alt="not"/>
                    <h3>{data.title}</h3>
                </div>
            
            </> )
        )}
        </div>
    </div>
    </>
  )
}

export default Skills