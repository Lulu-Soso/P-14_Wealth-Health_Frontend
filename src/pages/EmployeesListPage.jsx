import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeesData, setError } from "../feature/employees.slice";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

const EmployeesListPage = () => {
  const employeesData = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("firstName");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        dispatch(setEmployeesData(response.data));
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app-container">
      <div className="employees-header">
        <h2>Current Employees</h2>
        <div className="show-search">
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
            <th
              onClick={() => handleColumnClick("firstName")}
              className={`${sortBy === "firstName" ? "sorted-column" : ""}`}
            >
              <p className="flex-jcc-aic">
                First Name
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "firstName" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "firstName" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("lastName")} className={`${sortBy === "lastName" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Last Name
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "lastName" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "lastName" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("birthDate")} className={`${sortBy === "birthDate" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Date of Birth
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "birthDate" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "birthDate" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("startDate")} className={`${sortBy === "startDate" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Start Date
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "startDate" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "startDate" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("street")} className={`${sortBy === "street" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Street
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "street" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "street" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("city")} className={`${sortBy === "city" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                City
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "city" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "city" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("state")} className={`${sortBy === "state" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                State
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "state" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "state" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("zipCode")} className={`${sortBy === "zipCode" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Zip Code
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "zipCode" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "zipCode" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                </span>
              </p>
            </th>
            <th onClick={() => handleColumnClick("department")} className={`${sortBy === "department" ? "sorted-column" : ""}`}>
              <p className="flex-jcc-aic">
                Department
                <span className="up-down">
                  <FaCaretUp
                    className={
                      sortBy === "department" && sortOrder === "asc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
                  <FaCaretDown
                    className={
                      sortBy === "department" && sortOrder === "desc"
                        ? "sorted-icon"
                        : ""
                    }
                  />
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
              <td className={sortBy === "birthDate" ? "sorted-column" : ""}>
                {employee.birthDate}
              </td>
              <td className={sortBy === "startDate" ? "sorted-column" : ""}>
                {employee.startDate}
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
              <td className={sortBy === "department" ? "sorted-column" : ""}>
                {employee.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-pagination">
        <div>Showing 1 to 9 of 9 entries</div>
        <div className="pagination">
          <p>Previous</p>
          <p>1</p>
          <p>Next</p>
        </div>
      </div>
      <div className="link-employee">
        <Link to="/employees/create">Create Employee</Link>
      </div>
    </div>
  );
};

export default EmployeesListPage;
