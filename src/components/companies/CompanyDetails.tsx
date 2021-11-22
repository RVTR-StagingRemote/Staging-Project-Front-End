import React from "react";



{/* Need to do: Figure out the src error below. */ }
interface Props { 
    companyName: string,
    companyDescription: string,

}
{/* need an image prop for below as it says its yelling at me, src and source doesn't work and Idk what to use in props */ }
{/* This takes a list of props that is defined above and returns a card displaying company details*/ }
{ /*Bootstrap source for the HMTL, see Components -> Card on the side https://getbootstrap.com/docs/5.0/getting-started/introduction/ */ }
const CompanyDetails = (props: Props) => {
    return <div className="card my-2 ps-0 pe-4">
        <div className="row">
            <div className="col-md-4">  {/* Potentially tweak this. */}
                <image width={400} height={300} src={require("https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80")}
                    className="img-fluid rounded-start"
                    alt="https://via.placeholder.com/300x200?text=Course+3" />  
            </div> {/* Big note, this image stuff is just a placeholder, I do not know what form we will save the image in for this component */ }
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


