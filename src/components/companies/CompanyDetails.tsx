import React from "react";

interface Props {
    companyName: string,
    companyDescription: string,

}
{/* This takes a list of props that is defined above and returns a card displaying company details*/ }
const CompanyDetails = (props: Props) => {
    return <div class="card" style="width: 18rem;">  {/* mess around with this */}
        <Image src="..." className="card-img-top" alt="..." />  {/* TODO: find image, figure out where to put image in this frontend and link to image in this line */}
        <div className="card-body">
            <h5 className="card-title">{props.companyName}</h5> {/* Company Name within the card text that's included in Props */}
            <p className="card-text">{props.companyDescription}</p> {/* Company Description within the card text that's included in Props */}
            <a href="#" className="btn btn-primary">Details</a> {/* Details button */}
        </div>
    </div>;
};

export default CompanyDetails;
