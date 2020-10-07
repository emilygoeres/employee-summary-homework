// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern {
    constructor(name){
        this.name = name;
        this.school = school;
        this.Employee = [];
    }
    getRandomEmployee(){
        return this.employee[Math.floor(Math.random()*this.Employee.length)]
    }
    addEmployee(employeeName,employeeId,employeeEmail){
        this.employee.push(new Employee(employeeName,employeeId,employeeEmail))
    }
}

module.exports = Intern;