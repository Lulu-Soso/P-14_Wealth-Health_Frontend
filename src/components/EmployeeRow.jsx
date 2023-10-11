import React from "react";

/**
 * Composant représentant une ligne d'employé.
 * @param {Object} employee - Les données de l'employé
 * @returns {JSX.Element} - Un élément JSX représentant une ligne d'employé.
 */
const EmployeeRow = ({ employee }) => {
  return (
    <>
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.birthDate}</p>
      <p>{employee.startDate}</p>
      <p>{employee.street}</p>
      <p>{employee.city}</p>
      <p>{employee.state}</p>
      <p>{employee.zipCode}</p>
      <p>{employee.department}</p>
    </>
  );
};

export default EmployeeRow;
