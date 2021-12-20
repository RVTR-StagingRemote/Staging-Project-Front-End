import React from "react";
import Link from "next/link";
import Image from "next/image";

// Props for Occupations component
interface Props {
    // title to display on card
    title: string;
    // description to display on card
    description: string;
    // image to display on card
    imageURI: string;
}

// TODO:
// This component will need correct routes for the buttons. I'm currently expecting to get that from props.
// There is an issue with the image sizing/layout of the card. I will need to look into the image size + css to try to remedy this
// Should the buttons have the right arrow?
// I'm thinking of creating a .scss for the styles here and using that instead of or along with bootstrap classes to style this component.

///
/// Occupation component
/// displays a card to show an occupation's information. meant to be used as part of a list of occupations.
const Occupations = (props: Props) => {
    return (
        <div className="card my-2 ps-0 pe-4">
            <div className="row">
                {/* image */}
                <div className="col-md-4">
                    <Image
                        width={400}
                        height={300}
                        //src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                        src={props.imageURI}
                        className="img-fluid rounded-start"
                        alt="https://via.placeholder.com/300x200?text=Course+3"
                    />
                </div>
                {/* card body */}
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.title /* Engineers */}</h5>
                        <p className="card-text">{props.description}
                            {/*
                            Engineers, as practitioners of engineering, are
                            professionals who invent, design, analyze, build and test
                            machines, complex systems, structures, gadgets and materials
                            to fulfill functional objectives and requirements while
                            considering the limitations imposed by practicality,
                            regulation, safety and cost.
                        */}
                        </p>
                    </div>
                </div>
                {/* navigation buttons */}
                <div className="col-md-2 d-flex flex-column justify-content-center">
                    <Link href="#">
                        <a className="btn rvtr-btn-primary my-3">
                            See Applicants
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="btn rvtr-btn-primary my-3">
                            Apply
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="btn rvtr-btn-primary my-3">
                            Details
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Occupations;
