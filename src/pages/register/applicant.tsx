import react from "react"
import {NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/pages/Home.module.scss";
import applicantStyles from "../../styles/register/Applicant.module.scss"

const Applicant: NextPage = () => {
    return (
    <div className="">
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
        <div className={applicantStyles.layout}>
            <div className={applicantStyles.item1}>
                <div>
                    <h2><b>Application Registration Page</b></h2>
                </div>
            </div>
            <div className={applicantStyles.item2}>
                <div className={applicantStyles.formLayout}>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                First Name:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Education Field:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Last Name:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Education Level:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                E-Mail:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Resume:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="Button" value="Choose File"></input>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Password:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                       </div>
                    </div>
                </div>
            </div>
            <div className={applicantStyles.item3}>
                
                <div className={applicantStyles.fieldCol} >
                    <div className={applicantStyles.aboutLayout2}>
                        <h5>About me</h5>
                    </div>
                </div>
                <div className={applicantStyles.fieldCol} >
                    <div className={applicantStyles.aboutLayout}>
                    <textarea id="w3review" name="w3review" className={applicantStyles.texta}> </textarea>
                    </div>
                </div>
            </div>
         <div className={applicantStyles.item4}>
            <div>
                <input type="button" value="Register" className={applicantStyles.buton}></input>
            </div>
            <div>
                <input type="button" value="Cancel" className={applicantStyles.buton}></input>
            </div>
         </div>

      </div>
    </div>
    )
}

export default Applicant;