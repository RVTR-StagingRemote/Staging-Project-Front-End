import React from "react";

interface Props {
    companyName: string,
    companyDescription: string,

}
{/* need an image prop for below as it says its yelling at me */ }
{/* This takes a list of props that is defined above and returns a card displaying company details*/ }
const CompanyDetails = (props: Props) => {
    return <div className="card my-2 ps-0 pe-4">
        <div className="row">
            <div className="col-md-4">  {/* mess around with this */}
                <Image width={400} height={300} src="https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80" className="card-img-top" className="img-fluid rounded-start" />  {/* TODO: find image, figure out where to put image in this frontend and link to image in this line */}
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{props.companyName}</h5> {/* Company Name within the card text that's included in Props */}
                    <p className="card-text">{props.companyDescription}</p> {/* Company Description within the card text that's included in Props */}
                    <a href="#" className="btn btn-primary">Details</a> {/* Details button */}
                </div>
                </div>
            </div>
            </div>;
};

export default CompanyDetails;


