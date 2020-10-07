const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser() {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What do you wanna do?",
    choices: ["Create a Manager", "Create a Engineer", "Create a Intern", "Quit"]
  }).then(function ({ choice }) {
    switch (choice) {
      case "Create a Manager":
        createManager();
        break;

      case "Create a Engineer":
        createEngineer();
        break;

      case "Create a Intern":
        createIntern();
        break;

      default:
        console.log("Please select an employee to create")
        break;
    }
  })
}

function CreateManager() {
  if (!Manager.length) {
    console.log('create a Manager')
    createManager()
  }
  else {
    const nameOfManager = manager.map(function (manager) {
      return manager.name
    })
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        choices: managerName,
        name: "managerName"
      }, {
        type: "input",
        message: "What is your role?",
        choices: managerRole,
        name: "managerRole"
      }, {
        type: "input",
        message: "What is your email?",
        choices: managerEmail,
        name: "managerEmail"
      }, {
        type: "input",
        message: "What is your office number?",
        choices: officeNumber,
        name: "officeNumber"
      },
      {
        type: "linput",
        message: "What is your employee ID?",
        choices: employeeId,
        name: "employeeId"
      }
    ]).then(function (answers) {
      let selectedManager;
      for (let i = 0; i < manager.length; i++) {
        if (manager[i].name === answers.managerChoice) {
          selectedManager = manager[i]
        }
      }
      selectedManager.addManager(answers.managerName, answers.managerRole, answers.managerEmail, answers.officeNumber, answers.employeeId);
      console.log(`${selectedManager.name} Created a manager!`)
      console.log(selectedManager);
      createdManager();
    })
  }
}

function CreateEngineer() {
  if (!Engineer.length) {
    console.log('Create a Engineer!')
    createEngineer()
  }
  else {
    const nameOfEngineer = Engineer.map(function (engineer) {
      return engineer.name
    })
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        choices: engineerName,
        name: "engineerName"
      }, {
        type: "input",
        message: "What is your role?",
        choices: engineerRole,
        name: "engineerRole"
      }, {
        type: "input",
        message: "What is your email?",
        choices: engineerEmail,
        name: "engineerEmail"
      }, {
        type: "input",
        message: "What is your github username?",
        choices: githubUsername,
        name: "githubUsername"
      }
    ]).then(function (answers) {
      let selectedEngineer;
      for (let i = 0; i < engineer.length; i++) {
        if (engineer[i].name === answers.engineerChoice) {
          selectedEngineer = engineer[i]
        }
      }
      selectedEngineer.addEngineer(answers.engineerName, answers.engineerRole, answers.engineerEmail, answers.githubUsername);
      console.log(`${selectedEngineer.name} Created a engineer!`)
      console.log(selectedEngineer);
      createdEngineer();
    })
  }
}

function CreateIntern() {
  if (!Intern.length) {
    console.log('create a Intern!')
    createIntern()
  }
  else {
    const nameOfIntern = Intern.map(function (intern) {
      return intern.name
    })
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        choices: internName,
        name: "internName"
      }, {
        type: "input",
        message: "What is your role?",
        choices: internRole,
        name: "internRole"
      }, {
        type: "input",
        message: "What is your email?",
        choices: internEmail,
        name: "internEmail"
      }, {
        type: "input",
        message: "What school are you attending?",
        choices: schoolName,
        name: "schoolName"
      }
    ]).then(function (answers) {
      let selectedIntern;
      for (let i = 0; i < intern.length; i++) {
        if (intern[i].name === answers.internChoice) {
          selectedIntern = intern[i]
        }
      }
      selectedIntern.addEngineer(answers.internName, answers.internRole, answers.internEmail, answers.schoolName);
      console.log(`${selectedIntern.name} Created a Intern`)
      console.log(selectedIntern);
      createdIntern();
    })
  }
}

function createEmployee() {
  if (!manager.length) {
    console.log('create a manager')
    createManager()
  } else {
    const namesOfTrainers = trainers.map(function (trainer) {
      return trainer.name
    })
    inquirer.prompt({
      type: 'list',
      choices: namesOfTrainers,
      message: "from whose collection?",
      name: "trainerChoice"
    }).then(function ({ trainerChoice }) {
      let selectedTrainer;
      for (let i = 0; i < trainers.length; i++) {
        if (trainers[i].name === trainerChoice) {
          selectedTrainer = trainers[i]
        }
      }
      if (!selectedTrainer.pokemon.length) {
        console.log("he has no pokemon!")

      } else {
        console.log(selectedTrainer.getRandomPokemon())
      }
      playGame();
    })
  }
}

createEmployee();

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
