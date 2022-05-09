import employee from "../data/employee.json";
import { EmployeeDetailsBox } from "./EmployeeDetailsBox";
export function Employee(props) {
  return (
    <>
      {employee.map((employee, index) =>{
          return <EmployeeDetailsBox key={index} employee={employee} userIsExternal={props.userIsExternal}/>
      })}
     
    </>
  );
}
