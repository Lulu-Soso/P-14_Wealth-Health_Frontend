import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: localStorage.getItem('employees')
    ? JSON.parse(localStorage.getItem('employees'))
    : [],
  employeeInfo: localStorage.getItem('employeeInfo')
  ? JSON.parse(localStorage.getItem('employeeInfo'))
  : null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  // initialState: {
  //   employees: null,
  // },
  reducers: {
    setEmployeesData: (state, action) => {
      state.employees = action.payload;
      localStorage.setItem('employees', JSON.stringify(action.payload));
    },
    addEmployee: (state, action) => {
      state.employeeInfo = action.payload;
      localStorage.setItem('employees', JSON.stringify(action.payload));
    },
  },
});

export const { setEmployeesData, addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
