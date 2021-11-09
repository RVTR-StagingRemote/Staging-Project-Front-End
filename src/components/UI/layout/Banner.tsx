import React from "react";
import styles from "../../../styles/layout/Banner.module.scss";

interface Props {}

const Banner = (props: Props) => {
  return (<div className={styles["banner-container"]}><div className={styles.hwrap}><div className={styles["hmove"]}>
  <div className={styles["hitem"]}>Hire Today! Good employees aren't available forever!</div>
</div></div></div>);
};

export default Banner;
