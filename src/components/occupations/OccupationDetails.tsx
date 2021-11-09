import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  occupationTitle: string; // Occupation Title to be displayed according to selection from occupations componenet 
  occupationDescription: string; // Occupation Description to be displayed according to selection from occupations componenet
  occupationRequirements: string; // Occupation Requirements to be displayed according to selection from occupations componenet
}

const OccupationDetails = (props: Props) => {
  return (
    <div className="card my-2 ps-0 pe-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <Image
              width={400}
              height={300}
              // image to be displayed according to occupation selected
              src={require("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80")}
              className="img-fluid rounded-start"
              alt="https://via.placeholder.com/300x200?text=Course+3"
            />
          </div>
          <div className="col-md-4">
            {/* Averadge Salaries Chart will be added here */}
          </div>
          <div className="row">
            <div className="col-md-4">
              <h5 className="card-title">
                {props.occupationTitle /* Ex: Engineers Description*/}
              </h5>
              <p className="card-text">
                {props.occupationDescription}
                {/* Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost. */}
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="card-title">General Requirments</h5>
              <p className="card-text">
                {props.occupationRequirements}
                {/* - 4 Year Degree - 2 years experience - Certifications:	- N/A */}
              </p>
            </div>
          </div>
        </div>
        {/* loged in navigation buttons */}
        <div className="col-md-2 d-flex flex-column justify-content-rihgt">
          <a href="#" className="btn btn-primary">
            Back
          </a>
          <a href="#" className="btn btn-primary">
            Apply
          </a>
          <a href="#" className="btn btn-primary">
            See Applications
          </a>
        </div>
      </div>
    </div>
  );
};

export default OccupationDetails;
