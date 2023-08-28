import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownForm from "../components/DropdownForm";
import DateSelector from "../components/DateSelector";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addEmployee } from "../feature/employees.slice";

// const CreateEmployeePage = ({ getEmployees }) => {
const CreateEmployeePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      birthDate,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    try {
      console.log("Sending request with data:", data);
      const response = await axios.post("http://localhost:5000/employees", data);
      console.log("Response:", response.data);
      dispatch(addEmployee(response.data));

      setFirstName("");   
      setLastName("");
      setBirthDate("");
      setStartDate("");
      setStreet("");
      setCity("");
      setState("");
      setZipCode("");
      setDepartment("");
      // Affichez la fenêtre modale de confirmation ici si nécessaire
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const departmentOptions = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  return (
    <div className="create-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      {/* <div className="form-container"> */}
      <Link to="/employees/list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form
        className="form-container"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="field-row">
          <div className="field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="field-row">
          <DateSelector
            label="Date of Birth"
            value={birthDate}
            onChange={setBirthDate}
          />
          <DateSelector
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
        </div>
        <fieldset className="address">
          <legend>Address</legend>
          <div className="field-row">
            <div className="field">
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="field-row">
              <div className="field">
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
                <div className="field">
                  <label htmlFor="zip-code">Zip Code</label>
                  <input
                    id="zip-code"
                    type="number"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="field-row">
          <DropdownForm
            label="Department"
            options={departmentOptions}
            value={department}
            onChange={setDepartment}
          />
          <button type="submit">Save</button>
          {/* <button onClick={ createEmployeeHandler }>Save</button> */}
        </div>
      </form>
      {/* {isError && <div>Error creating employee</div>} */}
      {/* </div> */}
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
};

export default CreateEmployeePage;
