import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/aboutUs/AboutUs.module.scss";

/**
 * AboutUsComp - used to display the about us page components
 * @param props
 * @returns {JSX.Element}
 * @author Matthew Terry
 */
const AboutUsComp: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Client Portal</title>
        <meta
          name="description"
          content="Tool for clients to make requests for candidates"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`py-5 ${styles.jumbotron}`}>
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Our Mission is to provide customers with a perfect employee finding
            tool, and to bring people together from all over the world.
          </p>
          <hr className="my-4" />
          <p>Start browsing our open selection!</p>
          <p className="lead">
            <Link href="/order/course">
              <a className="btn rvtr-btn-secondary btn-lg" role="button">
                Find Employees
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="card my-5" style={{ width: '80rem' }}>
          <div className="row">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title my-2">Sales Team</h5>
                <p className="card-text my-0">Email: salesteam@comapany.com</p>
                <p className="card-text my-0">Phone: (888)-888-8888</p>
                <p className="card-text my-0">Fax: (888)-888-8888</p>
                <p className="card-text my-0">Address: 123 Address Blvd.</p>
                <p className="card-text my-3"></p> {/* Used this line and one more like it to create space between the different team information*/}
                <h5 className="card-title my-2">Hiring Team</h5>
                <p className="card-text my-0">Email: hiringteam@comapany.com</p>
                <p className="card-text my-0">Phone: (888)-888-8888</p>
                <p className="card-text my-0">Fax: (888)-888-8888</p>
                <p className="card-text my-0">Address: 123 Address Blvd.</p>
                <p className="card-text my-3"></p>
                <h5 className="card-title my-2">Technical Support Team</h5>
                <p className="card-text my-0">Email: supportteam@comapany.com</p>
                <p className="card-text my-0">Phone: (888)-888-8888</p>
                <p className="card-text my-0">Fax: (888)-888-8888</p>
                <p className="card-text my-0">Address: 123 Address Blvd.</p>
              </div>
            </div>
            <div className="col">
              <img className="card-img" src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80" alt="Card image cap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;


          {/*<Image*/}
          {/*    width={400}*/}
          {/*    height={300}*/}
          {/*    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80"*/}
          {/*    className="card-img-top"*/}
          {/*    alt="https://via.placeholder.com/300x200?text=Course+3"*/}
{/*/>*/ }



//<div className="cards">
//  <div className="container">
//    <div className="row">
//      <div className="col-sm-12 col-md-20">
//        <div className="card my-5">
//          <div className="row card-body">
//            <div className="col-md-20">
//              <h5 className="card-title">Contact Information</h5>
//              <p className="card-text">
//                Company Name here Address: Phone: Fax:
//              </p>
//              <a href="#" className="btn rvtr-btn-primary">
//                Continue &rarr;
//              </a>
//            </div>
//            <div className="col-md-20">
//              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80" />
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
//</div>
