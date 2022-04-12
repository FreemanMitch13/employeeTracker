const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require("console.table");

function askQuestion() {inquirer.
    prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name:  'initialPrompt',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        },
    ]).then(({initialPrompt}) => {
        switch (initialPrompt) {
            case "View All Departments":
                showDepartment()
                break;
            case "View All Roles":
                showRoles()
                break;
            case "View All Employees":
                showEmployees()
                break;
        }
    })
};

    function showDepartment() {
        db.promise().query("SELECT * FROM department").then(([rows]) => {
            console.table(rows)
        }).then(askQuestion)
    }
    function showRoles() {
        db.promise().query("SELECT * FROM role").then(([rows]) => {
            console.table(rows)
        }).then(askQuestion)
    }
    function showEmployees() {
        db.promise().query("SELECT * FROM employee").then(([rows]) => {
            console.table(rows)
        }).then(askQuestion)
    }

askQuestion();