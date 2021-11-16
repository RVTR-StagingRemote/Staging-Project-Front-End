import React from "react";

interface Props { }

const EmployeeExperience = (props: Props) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="mx-auto card border border-dark" >
            <div className="card-body">
              <h5 className="card-title text-center mb-5 fw-bold">Employee Experience</h5>
              <form className="g-3">
                <div className="row align-item-center">
                  <div className="col-md-4">
                    <label htmlFor="firstName" className="col-form-label">First Name:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="firstName" placeholder="John Doe" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="firstName" className="col-form-label">Last Name:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="firstName" placeholder="John Doe" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="phoneNumber" className="col-form-label">Phone #:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="tel" className="form-control" id="phoneNumber" placeholder="###-###-####" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="address" className="form-label">Address:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="address" placeholder="777 Market St" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="city" placeholder="Bellevue" />
                  </div>
                </div>

                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="state" placeholder="WA" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="zip" className="form-label">Zip:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" className="form-control" id="zip" placeholder="98004" />
                  </div>
                </div>
                <div className="row align-item-center pt-3">
                  <div className="col-md-4">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="date" className="form-control" id="dateOfBirth" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EmployeeExperience;