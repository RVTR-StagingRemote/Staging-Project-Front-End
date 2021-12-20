import { NextPage } from "next";
import SignUp from "../../components/signup/SignUp";

import orderFormStyles from "../../styles/orders/OrderForm.module.scss";

const RegistrationPage: NextPage = () => {
  return (
    <div className="registration-form-container">
      <SignUp />
    </div>
  );
};

export default RegistrationPage;