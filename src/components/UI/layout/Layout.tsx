import Navbar from "./Navbar";

import styles from "../../../styles/layout/Layout.module.scss";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.site}>
      <Banner />
      <Navbar />
      <main className={styles["main-content"]}>
        {/* Using children in react: https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/ */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
