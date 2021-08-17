import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { COURSE_ARR } from '../models/temp/sampleData' // temp for testing while there's no back end connection


const arr_list = COURSE_ARR.map(
  (a) => 
  <div>
    <div>{a.id}. {a.courseName}</div>
    <div>{a.duration} weeks</div>
    <div>Instructor: {a.instructor}</div>
    <div>{a.description}</div>
    <hr />
  </div>
)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Client Portal</title>
        <meta name="description" content="Tool for clients to make requests for candidates" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        {arr_list}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
