import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/orders/OrderForm.module.scss";

interface OrderFormData {
  technology: string;
  instructor: string;
  associates: number;
}

/**
 * For now, this component will serve as the UI that a user will interact with to select a course and submit it for purchase on the order/course page.
 */
const OrderForm: FunctionComponent = () => {
  // Setup the state that will act as our input values.  This data is what will be submitted when a user makes the comfirmation.
  const [formData, setFormData] = useState<OrderFormData>({
    technology: "",
    instructor: "",
    associates: 0,
  });

  /**
   * This event is fired whenever a form field input value updates.  The formData state updates depending on which input field was changed.
   * @param e Change event object which allows the extraction of form data once the event is fired
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement|HTMLInputElement> // for input fields like textarea you can union the HTMLInputElement type
  ) => {
    const value = e.target.value; // The value of the option
    const name = e.target.name as keyof OrderFormData; // the name of the input field that was changed
    if (value === "") return; // ignore irrelavent values

    // assigment destructuring, use the original values of our state and overwrite the
    // formData property with the input field value that was just changed
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.MouseEvent) => {
    // TODO: setup logic to validate and submit data for purchase
    alert(
      `Course details: \nTech => ${formData.technology} \nInstructor => ${formData.instructor} \nAssociates => ${formData.associates}`
    );
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className="row my-0 my-md-5">
        <div className="col-sm-12 col-md-8 my-3 my-md-0">
          <div className={`${styles["info-box"]}`}>
            <h4>Select A Course And Instructor</h4>
            <div className={styles["course-info-form-container"]}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Technology:</label>
                  <select
                    className="form-select"
                    name="technology"
                    id="tech-select"
                    value={formData.technology}
                    onChange={handleChange}
                  >
                    {/* TODO: fetch technologies from backend */}
                    <option value="">--Select A Technology--</option>
                    <option value="net">.NET</option>
                    <option value="java">Java</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Instructor:</label>
                  <select
                    className="form-select"
                    name="instructor"
                    id="instructor-select"
                    value={formData.instructor}
                    onChange={handleChange}
                  >
                    <option value="">--Select An Instructor--</option>
                    <option value="john-doe">John Doe</option>
                    <option value="jane-doe">Jane Doe</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Associates Desired:</label>
                  <br/>
                  <input 
                    type="number"
                    className="form-text"
                    name="associates"
                    id="associates-textbox"
                    value={formData.associates}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <input type="button" value="Add to Team"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col my-3 my-md-0">
          <div className={`${styles["details-box"]} ${styles["info-box"]}`}>
            <h4>Additional details</h4>
          </div>
        </div>
      </div>
      <div className="row my-0 my-md-5">
        <div className="col-sm-12 col-md-8 my-3 my-md-0">
          <div className={styles["info-box"]}>
            <div>
              <h4>Your Team</h4>
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
              </ul>
            </div>
            <div>
              <button type="button" className="btn rvtr-btn" onClick={onSubmit}>
                COMMIT
              </button>
            </div>
          </div>
        </div>
        <div className="col my-3 my-md-0">
          <div className={`${styles["email-box"]} ${styles["info-box"]}`}>
            <h4>Email</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
