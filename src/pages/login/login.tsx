import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/pages/Home.module.scss";
import loginStyles from "../../styles/login/Login.module.scss";

const LoginPage: NextPage = () => {
  return (
    <div className="order-form-container">
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
    <div className={loginStyles.Container}>

            <div className={loginStyles.Item}>
            </div>
            <div className={ loginStyles.Item }>
              <div className={ loginStyles.outline}>
                <div className={loginStyles.LoginTitle}>
                  <h5> <b>User Login</b> </h5>
                </div>
                <div className={loginStyles.LoginContainer}>
                <div><b>Username:</b> </div>
                <div><input type="textbox" className={loginStyles.TextboxStyle}></input></div>
                </div>
                <div className={loginStyles.LoginContainer}>
                  <div><b>Password:</b> </div>
                  <div><input type="password" className={loginStyles.TextboxStyle}></input></div>
                </div>
                <div className={loginStyles.buttonContainer}>
                  <button  type="button" className={ [loginStyles.btn, "btn"].join(" ") } >Log in</button>
                </div>
                <div className={loginStyles.buttonContainer}>
                  <button  type="button" className={ [loginStyles.btn, "btn-primary"].join(" ") } >Forget Username ?</button>
                </div>
                <div className={ [loginStyles.buttonContainer, loginStyles.bottomPadding].join(" ") }>
                  <button  type="button" className={ [loginStyles.btn, "btn-primary" ].join(" ") } >Forget Password?</button>
                </div>
              </div>
              <div className={ loginStyles.outline}>
                <div className={loginStyles.LoginTitle}>
                  <h5> <b>Don't have an Account?</b> </h5>
                </div>
               <div className={ [loginStyles.buttonContainer, loginStyles.bottomPadding].join(" ") }>
                  <button  type="button" className={ [loginStyles.btn, "btn-info" ].join(" ") } >Forget Password?</button>
                </div>
              </div>
            </div>

        </div>
    </div>

  );
};

export default LoginPage;