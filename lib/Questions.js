const inquirer = require('inquirer');
const Department = require('../lib/Department');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');

class Questions {
    constructor() {
        this.Department = new Department;
        this.Employee = new Employee;
        this.Role = new Role;
    }
    initializeQuestions() {
        inquirer
            .prompt({
                type: 'list',
                name: 'menu',
                message: 'Select from the following options',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
            })
            .then(({ menu }) => {
                switch (menu) {
                    case 'view all departments':
                        this.Department.viewAll;
                        break;
                    case 'view all roles':
                        break;
                    case 'view all employees':
                        break;
                    case 'add a department':
                        break;
                    case 'add a role':
                        break;
                    case 'add an employee':
                        break;
                    case 'update an employee role':
                        break;
                }
            });
    }
}

module.exports = Questions;