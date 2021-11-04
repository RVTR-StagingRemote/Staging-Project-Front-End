import React from "react";

interface Props {
  companyName: string,
  companyDescription: string,

}

const CompanyDetails = (props: Props) => {
  return <div class="card" style="width: 18rem;">
    <Image src="..." className="card-img-top" alt="..."/>
    <div className ="card-body">
    <h5 className ="card-title">Card title</h5>
    <p className ="card-text">{companyName => props.companyName}</p>
    <a href="#" class ="btn btn-primary">Go somewhere</a>
    </div>
  </div>;
};

export default CompanyDetails;
