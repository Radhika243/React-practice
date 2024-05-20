import React, { useState } from "react";
import Employee from "./Employee";

const Employees = () => {
  const [employees,setEmployees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
const addEmployee = () =>{
  setEmployees([
    ...employees,
    {empId: 8911, name: "Robert", designation: "AC"},
    {empId: 8912, name: "Robert", designation: "TC"},
    {empId: 8913, name: "Robert", designation: "ACT"},
    {empId: 8931, name: "Robert", designation: "ATC"}
  ])
}
  return(
    <Employee employees={employees} addEmployee={addEmployee}/>
  )
};

export default Employees;
