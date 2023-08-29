import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { IoMdArrowDropup } from "@fortawesome/react-fontawesome";

const EmployeesListPage = () => {
  const employeesData = useSelector((state) => state.employees.employees);

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedData = employeesData.slice().sort((a, b) => {
    if (sortBy === null) return 0;

    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const handleColumnClick = (columnName) => {
    if (sortBy === columnName) {
      toggleSortOrder();
    } else {
      setSortBy(columnName);
      setSortOrder("asc");
    }
  };

  return (
    <div className="app-container">
      <div className="employees-header">
        <h2>Current Employees</h2>
        <div className="flex-jcsb">
          <div className="filter">
            <label htmlFor="show">Show</label>
            <select
              name="state"
              id="show"
              // value={state}
              // onChange={(e) => setState(e.target.value)}
            >
              <option value="">10</option>
              <option value="">25</option>
              <option value="">50</option>
              <option value="">100</option>
              {/* Ajoutez d'autres options d'état ici */}
            </select>
            <p>entries</p>
          </div>
          <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" />
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleColumnClick("firstName")}>
              <p className="flex-jcc-aic">
                First Name
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("lastName")}>
              <p className="flex-jcc-aic">
                Last Name
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("startDate")}>
              <p className="flex-jcc-aic">
                Start Date
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("department")}>
              <p className="flex-jcc-aic">
                Department
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("birthDate")}>
              <p className="flex-jcc-aic">
                Date of Birth
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("street")}>
              <p className="flex-jcc-aic">
                Street
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("city")}>
              <p className="flex-jcc-aic">
                City
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("state")}>
              <p className="flex-jcc-aic">
                State
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("zipCode")}>
              <p className="flex-jcc-aic">
                Zip Code
                <span className="up-down">
                  <FaCaretUp />
                  <FaCaretDown />
                </span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {employeesData?.map((employee, index) => ( */}
          {sortedData?.map((employee, index) => (
            <tr
              key={employee.id}
              className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
            >
              <td className={sortBy === "firstName" ? "sorted-column" : ""}>
                {employee.firstName}
              </td>
              <td className={sortBy === "lastName" ? "sorted-column" : ""}>
                {employee.lastName}
              </td>
              <td className={sortBy === "startDate" ? "sorted-column" : ""}>
                {employee.startDate}
              </td>
              <td className={sortBy === "department" ? "sorted-column" : ""}>
                {employee.department}
              </td>
              <td className={sortBy === "birthDate" ? "sorted-column" : ""}>
                {employee.birthDate}
              </td>
              <td className={sortBy === "street" ? "sorted-column" : ""}>
                {employee.street}
              </td>
              <td className={sortBy === "city" ? "sorted-column" : ""}>
                {employee.city}
              </td>
              <td className={sortBy === "state" ? "sorted-column" : ""}>
                {employee.state}
              </td>
              <td className={sortBy === "zipCode" ? "sorted-column" : ""}>
                {employee.zipCode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-jcsb">
        <div>Showing 1 to 9 of 9 entries</div>
        <div className="number-page">
          <p>Previous</p>
          <p>1</p>
          <p>Next</p>
        </div>
      </div>
      <div className="link-employee">
        <Link to="/employees/create">Home</Link>
      </div>
    </div>
  );
};

export default EmployeesListPage;
