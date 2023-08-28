import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropdownForm from '../components/DropdownForm';
import DateSelector from '../components/DateSelector';

const HomePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const departmentOptions = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
           <DateSelector label="Date of Birth" value={birthDate} onChange={setBirthDate} />
          <DateSelector label="Start Date" value={startDate} onChange={setStartDate} />
          <fieldset className="address">
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                {/* Ajoutez d'autres options d'état ici */}
              </select>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </fieldset>
           <DropdownForm label="Department" options={departmentOptions} value={department} onChange={setDepartment} />
          <button type="submit">Save</button>
          {/* <button onClick={ createEmployeeHandler }>Save</button> */}
        </form>
        {/* {isError && <div>Error creating employee</div>} */}
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
};

export default HomePage;