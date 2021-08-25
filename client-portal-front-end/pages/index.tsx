import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";

import { COURSE_ARR } from "../models/temp/sampleData"; // temp for testing while there's no back end connection

const arr_list = COURSE_ARR.map((a, ind) => (
  <div key={ind}>
    <div>
      {a.id}. {a.courseName}
    </div>
    <div>{a.duration} weeks</div>
    <div>Instructor: {a.instructor}</div>
    <div>{a.description}</div>
    <hr />
  </div>
));

const Home: NextPage = () => {
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
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">Introducing Revature Courses</p>
          <hr className="my-4" />
          <p>Start browsing our open selection!</p>
          <p className="lead">
            <Link href="/order/course">
              <a className="btn rvtr-btn btn-lg" role="button">
                Learn more
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={300}
                  height={200}
                  src="https://via.placeholder.com/300x200?text=Course+1"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi diam turpis, euismod eget orci quis, auctor rhoncus
                    erat.
                  </p>
                  <a href="#" className="btn rvtr-btn">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={300}
                  height={200}
                  src="https://via.placeholder.com/300x200?text=Course+2"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi diam turpis, euismod eget orci quis, auctor rhoncus
                    erat.
                  </p>
                  <a href="#" className="btn rvtr-btn">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={300}
                  height={200}
                  src="https://via.placeholder.com/300x200?text=Course+3"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi diam turpis, euismod eget orci quis, auctor rhoncus
                    erat.
                  </p>
                  <a href="#" className="btn rvtr-btn">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
