import React from "react";
import exprience from "./Data/experience.json";
import 'bootstrap/dist/css/bootstrap.min.css';
const Exprience = () => {
  return (
    <>
      <div className="Container ex" id="exprience">
        <h1>Exprience</h1>
        <h2>This information add only card beauty</h2>
        {exprience.map((data) => {
          return (
            <>
              <div key={data.id}  data-aos="zoom-in"
      data-aos-duration="1000"
              className="ex-item text-center my-5">
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="not found" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Exprience;
