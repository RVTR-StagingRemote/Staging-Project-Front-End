import Link from "next/link";
import styles from "../../../styles/layout/Navbar.module.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className={`container-fluid ${styles.title}`}>
        <a className="navbar-brand">Employee Hiring Tool</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/order/course">
                <a className="nav-link">Order Now!</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus/AboutUs">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            /* Just an item to test my component. */
            <li className="nav-item">
              <Link href="/jeffrey/EmployeeInformation">
                <a className="nav-link">Employee Information</a>
              </Link>
            </li>
            /* End */
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
