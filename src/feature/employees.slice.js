import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: localStorage.getItem("employees")
    ? JSON.parse(localStorage.getItem("employees"))
    : [],
  employeeInfo: localStorage.getItem('employeeInfo')
  ? JSON.parse(localStorage.getItem('employeeInfo'))
  : null,
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    // setEmployeesData: (state, action) => {
    setEmployeesData: (state, { payload }) => {
      // state.employees = action.payload;
      state.employees = payload;
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
    addEmployee: (state, { payload }) => {
      state.employees.push(payload);
      localStorage.setItem("employeeInfo", JSON.stringify(payload));
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setEmployeesData, addEmployee, setError } = employeesSlice.actions;
export default employeesSlice.reducer;
