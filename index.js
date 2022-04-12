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
        {
            type: 'input',
            name: 'department',
            message: 'What department would you like to add?',
            when: (answers) => answers.choices === 'Add Department'
        },
        {
            type: 'input',
            name: 'role',
            message: 'What role would you like to add?',
            when: (answers) => answers.choices === 'Add Role'
        },
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employees first name?',
            when: (answers) =>answers.choices === 'Add Employee',
        }
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
            case "Add Employee":
                addEmployee()
                break;
            case "Add Department":
                addDepartment()
                break;
            case "Add Role":
                addRole()
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
        db.promise().query("select role.id, role.title, role.salary, department.department_name from role left join department on role.department_id=department.id").then(([rows]) => {
            console.table(rows)
        }).then(askQuestion)
    }
    function showEmployees() {
        db.promise().query("select employee.id, employee.first_name, employee.last_name, role.title, role.salary, employee.manager_id from employee left join role on employee.role_id=role.id").then(([rows]) => {
            console.table(rows)
        }).then(askQuestion)
    }
    // function addEmployee() {
    //     db.promise().query("INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ()")
    // }
    // function addDepartment() {
    //     db.promise().query("INSERT INTO department (id, department_name) VALUES ()")
    // }
    // function addRole() {
    //     db.promise().query("INSERT INTO role (id, title, salary, department_id) Values ()")
    // }

askQuestion();