import { NextPage } from "next";
import EmployeeInformation from "../../components/profile/EmployeeInformation";

import orderFormStyles from "../../styles/orders/OrderForm.module.scss";

const OrderCoursePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <EmployeeInformation />
    </div>
  );
};

export default OrderCoursePage;
