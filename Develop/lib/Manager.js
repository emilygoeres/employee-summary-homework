// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager {
    constructor(name){
        this.name = name;
        this.officenumber = officenumber;
        this.Employee = [];
    }
    getRandomEmployee(){
        return this.[Math.floor(Math.random()*this.Employee.length)]
    }
    addEmployee(employeeName,employeeId,employeeEmail){
        this.employee.push(new Employee(employeeName,employeeId,employeeEmail))
    }
}

module.exports = Manager;