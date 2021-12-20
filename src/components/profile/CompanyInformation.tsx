import React from "react";

interface Props {}

/**
 * CompanyInformation - used to register or display company information
 * @param props 
 * @returns {JSX.Element}
 * @author Christie Thammavong
 */
const CompanyInformation = (props: Props) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Company Information</h5>
          <form>
            <div className="mb-3">
              <label>Company Name: </label>
              <input 
                type="text" 
                name="company-name" 
                id="company-name-textbox"
                placeholder="Company name"
              />
            </div>
            <div className="mb-3">
              <label>Occupations Needed: </label>
              <input 
                type="text" 
                name="occupations-needed" 
                id="occupations-needed-textbox"
                placeholder="Occupations needed"
              />
            </div>
            <div className="mb-3">
              <label>Phone #: </label>
              <input 
                type="tel" 
                name="phone-number" 
                id="phone-number-textbox"
                placeholder="(###) ###-####"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="mb-3">
              <label>Street Address: </label>
              <input 
                type="text" 
                name="street-address" 
                id="street-address-textbox"
                placeholder="Street address"
              />
            </div>
            <div className="mb-3">
              <label>City: </label>
              <input 
                type="text" 
                name="city" 
                id="city-textbox"
                placeholder="City"
              />
            </div>
            <div className="mb-3">
              <label>State: </label>
              <input 
                type="text" 
                name="state" 
                id="state-textbox"
                placeholder="State"
              />
            </div>
            <div className="mb-3">
              <label>Zipcode: </label>
              <input 
                type="text" 
                name="zipcode" 
                id="zipcode-input-box"
                placeholder="Zipcode"
                pattern="[0-9]{5}"
              />
            </div>
            <div className="mb-3">
              <input 
                type="button" 
                value="Create Business Account"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
