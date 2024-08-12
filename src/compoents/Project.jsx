import React from 'react'
import project from './Data/projects.json'
import 'bootstrap/dist/css/bootstrap.min.css';
const Project = () => {
  return (
    <>
    <div className="Container projects " id='project'>
        <h1>Project</h1>
        <div className="row d-flex justify-content-center align-content-center ">
        {project.map((data)=>(
            <>
        <div key={data.id}  className='  my-4 col-sm-6 col-md-4 col-lg-3 mx-4'>
        <div  data-aos="flip-right"
           data-aos-duration="1000"
           className="card bg-dark text-light m-auto" style={{width:"18rem", border: "1px solid yellow" , boxShadow:"5px 5px 10px 10px rgba(101,175,10,0.5)"}}>
            <div className='img p-3 d-flex margin_auto justify-content-center align-content-center' ><img src={data.imageSrc} 
      className="card-img-top" alt="..." style={{width:"250px",
        height:"200px",
        border:"2px solid yellow",
        booderRadius:"10px"
      }}/></div>
     <div className="card-body text-center">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">{data.description}</p>
      <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
      <a href={data.source} className="btn btn-warning">Code</a>
      </div>
      </div>
      </div>
        </>))}
        </div>
    </div>
    
    </>
  )
}

export default Project