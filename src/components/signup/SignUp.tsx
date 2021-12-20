import React from "react";

interface Props { }

const SignUp = (props: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5 offset-md-1 container-header mt-3 border border-dark border-2 rounded-3">
          <div className="mt-3 container-header"> Company Information </div>
          <form >
            <div className="row mb-1 mt-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="companyName">Company Name: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="companyName" placeholder="Company Name" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="occupations">Occupations Needed: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="occupations" placeholder="Occupations Needed" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="phone">Phone #: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(###) ###-####" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="streetAddress">Street Address: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="streetAddress" placeholder="address" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="city">City: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="city" placeholder="city" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="state">State: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="state" placeholder="state" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="zipcode">Zipcode: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="zipcode" placeholder="zipcode" />
              </div>
            </div>
            <button className="btn col-md-10 offset-md-1 col-sm-12 mb-3" type="submit">Create Business Account</button>
          </form>
        </div>

        <div className="col-sm-12 col-md-5 offset-md-1 container-header mt-3 border border-dark border-2 rounded-3">
          <div>Account Information </div>
          <form >
            <div className="row mb-1 mt-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="firstName">First Name: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="firstName" placeholder="first name" />
              </div>
            </div>
            <div className="row mb-1 mt-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="lastName">Last Name: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="lastName" placeholder="last name" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="phone">Phone #: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(###) ###-####" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="streetAddress">Street Address: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="streetAddress" placeholder="address" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="city">City: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="city" placeholder="city" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="state">State: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="state" placeholder="state" />
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="zipcode">Zipcode: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="text" name="zipcode" placeholder="zipcode" />
              </div>
            </div>
            <div className="row mb-1 mt-1">
              <label className="col-sm-4 col-md-5 col-form-label" htmlFor="birthday">Date of Birth: </label>
              <div className="col-sm-8 col-md-6">
                <input className="form-control" type="date" name="birthday" placeholder="1/1/10" />
              </div>
            </div>
            <button className="btn col-md-10 offset-md-1 col-sm-12 mb-3" type="submit">Create User Account</button>
          </form>

        </div>
      </div>
    </div>

  );
};




export default SignUp;
