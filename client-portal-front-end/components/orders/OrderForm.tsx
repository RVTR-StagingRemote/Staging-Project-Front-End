import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/orders/OrderForm.module.scss";

interface OrderFormData {
  technology: string;
  instructor: string;
}

/**
 * For now, this component will serve as the UI that a user will interact with to select a course and submit it for purchase on the order/course page.
 */
const OrderForm: FunctionComponent = () => {
  // Setup the state that will act as our input values.  This data is what will be submitted when a user makes the comfirmation.
  const [formData, setFormData] = useState<OrderFormData>({
    technology: "",
    instructor: "",
  });

  /**
   * This event is fired whenever a form field input value updates.  The formData state updates depending on which input field was changed.
   * @param e Change event object which allows the extraction of form data once the event is fired
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement> // for input fields like textarea you can union the HTMLInputElement type
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
      `Course details: \nTech => ${formData.technology} \nInstructor => ${formData.instructor}`
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Select A Course And Instructor</h2>
        <form>
          <label>
            Technology:
            <select
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
          </label>
          <label>
            Instructor:
            <select
              name="instructor"
              id="instructor-select"
              value={formData.instructor}
              onChange={handleChange}
            >
              <option value="">--Select An Instructor--</option>
              <option value="john-doe">John Doe</option>
              <option value="jane-doe">Jane Doe</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <div>
          <h2>Your Team</h2>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
          </ul>
        </div>
        <div>
          <button onClick={onSubmit}>COMMIT</button>
        </div>
      </div>
      <div className={styles["details-box"]}>Additional details</div>
      <div className={styles["email-box"]}>email</div>
    </div>
  );
};

export default OrderForm;
