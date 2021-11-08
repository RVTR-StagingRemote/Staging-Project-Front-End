import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props { }

/**
 *
 * @param props first name
 * last name
 * phone #
 * street address
 * city
 * state
 * zipcode
 * date of birth
 * @returns
 */
export const AccountInformation = (props: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Employee Information</h5>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStreetAddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formState">
            <Form.Label>State (2)</Form.Label>
            <Form.Control type="text" pattern="[A-Z]{2}" placeholder="VA" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control type="text" pattern="[0-9]{5}" placeholder="zipcode" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBirthDate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>);
};

export default AccountInformation;