// Write your solution in this file!
const employee = {
    name: "Sam",
    streetaddress: "10 Broadway"           
};
function updateEmployeeWithKeyAndValue(employee, streetaddress) {
    const newEmployee = {...employee};
    newEmployee[streetaddress] = "11 Broadway";
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetaddress) {
    employee[streetaddress] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,name) {
    const employeeNew = {...employee};
    delete employeeNew.name;
    return employeeNew;
}
function destructivelyDeleteFromEmployeeByKey(employee,name) {
    delete employee.name;
    return employee;
}