import React from "react";

interface Props {}

const Banner = (props: Props) => {
  // import link from next
  // create props for banner so that other users can use it and change the words
  return (
    <div>
      <div className={`py-5 ${styles.jumbotron}`}>
        <div className="container">
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">Introducing the Employee Hiring Tool</p>
          <hr className="my-4" />
          <p>Start browsing our open selection!</p>
          <p className="lead">
            <Link href="/order/course">
              <a className="btn rvtr-btn-secondary btn-lg" role="button">
                Learn more
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
