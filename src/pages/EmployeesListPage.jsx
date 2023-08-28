import React from "react";
// import axios from "axios";
import { useSelector } from "react-redux";
// import { setEmployeesData } from "../feature/employees.slice";
import EmployeeRow from "../components/EmployeeRow";

const EmployeesListPage = () => {
  // const [employeesData, setEmployeesData] = useState([]);
  // const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employees.employees);
  console.log(employeesData);

  // const getEmployees = () => {
  //   axios
  //     .get("http://localhost:5000/employees")
  //     .then((res) => dispatch(setEmployeesData(res.data)));
  // };

  // useEffect(() => {
  //   getEmployees();
  // });

  // const getEmployees = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/employees");
  //     console.log(response.data);
  //     dispatch(setEmployeesData(response.data));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getEmployees();
  // });

  return (
    <>
      <h2>Current Employees</h2>

      {employeesData?.map((employee, index) => (
        <EmployeeRow employee={employee} key={index} />
      ))}
    </>
  );
};

export default EmployeesListPage;
