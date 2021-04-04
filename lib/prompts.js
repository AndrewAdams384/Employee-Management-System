const inquirer = require("inquirer");
const { type } = require("os");


async function promptChoices() {
    try {
        answer = await inquirer.prompt({ 
            type: 'list', 
            message: 'What would you like to do?', 
            choices: [
                'View All Employees', 
                'View All Departments', 
                'View All Roles', 
                'Add a Department', 
                'Add a Role', 
                'Add an Employee',
                'Update Employee Roles',
                "Update an Employee's Manager",
                'EXIT'],
            name: 'action'
        });
        return answer;
    }
    catch (error) {
        console.log(error);
    }
};

async function promptAddDepartment() {
    try {
        department = await inquirer.prompt({
            name: 'department',
            type: 'input',
            message: 'What is the department name?'
        })
        return department;
    }
    catch (error) {
        console.log(error);
    }
}

async function promptAddEmployee() {
    try {
        employee = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the employee\'s first name?'
        }, 
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the employee\'s last name?'
        },
        ])
        return employee;
    }
    catch (error) {
        console.log(error);
    }
}

async function promptAddRole() {
    try {
        role = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the role called?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary for this role?'
        },
        ])
        return role;
    } catch (error) {
        console.log(error);
    }           
}

module.exports = {
    promptChoices,
    promptAddDepartment,
    promptAddEmployee,
    promptAddRole
};