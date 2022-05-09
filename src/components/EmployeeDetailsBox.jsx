export function EmployeeDetailsBox(props) {
  return (
    <div className="employeeDetails">
      <p className="nameOfEmployee">
        {props.employee.firstName} {props.employee.lastName}
      </p>
      <p className="titleOfEmployee">{props.employee.title}</p>
      {!props.userIsExternal&&  <p className="notesOfEmployee">{props.employee.notes}</p>}
    </div>
  );
}
