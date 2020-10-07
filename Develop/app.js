const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var employeeArr = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser() {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What employee do you want to create?",
    choices: ["Create a Manager", "Create a Engineer", "Create a Intern", "Quit"]
  }).then(function ({ choice }) {
    switch (choice) {
      case "Create a Manager":
        CreateManager();
        break;

      case "Create a Engineer":
        CreateEngineer();
        break;

      case "Create a Intern":
        CreateIntern();
        break;

      default:
        createHTML();
        break;
    }
  })
}
 function createHTML () {
  console.log(employeeArr)
  // var HTMLtext=await render(employeeArr)
  fs.writeFileSync("./output/team.html", render(employeeArr), function(){
    console.log("Until Next Time")
  })
}

function CreateManager() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "managerName"
    }, {
      type: "input",
      message: "What is your email?",
      name: "managerEmail"
    }, {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber"
    },
    {
      type: "linput",
      message: "What is your employee ID?",
      name: "employeeId"
    }
  ]).then(function (answers) {
    let selectedManager = new Manager(answers.managerName, answers.employeeId, answers.managerEmail, answers.officeNumber)
    employeeArr.push(selectedManager)
    promptUser();
  })
}


function CreateEngineer() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "engineerName"
    }, {
      type: "input",
      message: "What is your email?",
      name: "engineerEmail"
    }, {
      type: "input",
      message: "What is your github username?",
      name: "githubUsername"
    },
    {
      type: "linput",
      message: "What is your employee ID?",
      name: "employeeId"
    }
  ]).then(function (answers) {
    let selectedEngineer = new Engineer(answers.engineerName, answers.employeeId, answers.engineerEmail, answers.githubUsername)
    employeeArr.push(selectedEngineer)
    promptUser();
  })
}

function CreateIntern() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "internName"
    }, {
      type: "input",
      message: "What is your email?",
      name: "internEmail"
    }, {
      type: "input",
      message: "What school are you attending?",
      name: "schoolName"
    },
    {
      type: "linput",
      message: "What is your employee ID?",
      name: "employeeId"
    }
  ]).then(function (answers) {
    let selectedIntern = new Intern(answers.internName, answers.employeeId, answers.internEmail, answers.schoolName)
    employeeArr.push(selectedIntern)
    promptUser();
  })
}

function createEmployee() {
  if (!employee.length) {
    console.log('create a employee')
    createEmployee()
  } else {
    const nameOfEmployee = employee.map(function (employee) {
      return employee.name
    })
    inquirer.prompt({
      type: 'list',
      choices: typeOfEmployee,
      message: "Select an Employee to create",
      name: "employeeChoice"
    }).then(function ({ employeeChoice }) {
      let selectedEmployee;
      for (let i = 0; i < employee.length; i++) {
        if (employee[i].name === employeeChoice) {
          selectedEmployee = employee[i]
        }
      }
      if (!selectedEmployee.employee.length) {
        console.log("Create an Employee")

      } else {
        console.log(selectedEmployee.getEmployee())
      }
      createEmployee();
    })
  }
}

promptUser();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
