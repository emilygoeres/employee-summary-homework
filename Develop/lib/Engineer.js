// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer {
    constructor(name){
        this.name = name;
        this.github = github;
        this.Employee = [];
    }
    getRandomEmployee(){
        return this.employee[Math.floor(Math.random()*this.Employee.length)]
    }
    addEmployee(employeeName,employeeId,employeeEmail){
        this.employee.push(new Employee(employeeName,employeeId,employeeEmail))
    }
}

module.exports = Engineer;