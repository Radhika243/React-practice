import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = ({ employees , addEmployee}) => {

 
  return (
    <>
      <table width={"10%"} className="table">
        <thead className="thead-light">
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Designation</th>
          </tr>
        </thead>
        <tbody>
            {
                employees.map((employee)=>{
                    return (
                        <tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <button 
      className="btn btn-primary"
      onClick={addEmployee}>Add an employee</button>
    </>
  );
};

export default Employee;
