const mysql = require('mysql2');
const {promptChoices, promptAddDepartment, promptAddEmployee, promptAddRole} = require('./lib/prompts');
const {viewAllDepartments, viewAllEmployees, addDepartment, addEmployee, viewAllRoles, addRole} = require('./lib/queries');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employeeManagement_db',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('Connected as id' + connection.threadId);
    await runPrompt();
    connection.end();
})

async function runPrompt() {
    let answer, employee, role, department, info;
    answer = await promptChoices();
    console.log(answer);
    switch (answer.action) {
        case 'Add a Department':
            await viewAllDepartments(connection);
            department = await promptAddDepartment();
            addDepartment(connection, department.department);
            await viewAllDepartments(connection);
            await runPrompt();
            break;
        case 'Add an Employee':
            await viewAllEmployees(connection);
            employee = await promptAddEmployee();
            addEmployee(connection, employee.firstName, employee.lastName, employee.role);
            await viewAllEmployees(connection);
            await runPrompt();
            break;
        case 'Add a Role':
            await viewAllRoles(connection);
            role = await promptAddRole();
            addRole(connection, role.title, role.salary);
            await viewAllRoles(connection);
            await runPrompt();
            break;
        case 'View All Employees':
            await viewAllEmployees(connection);
            await runPrompt();
            break;
        case 'View All Departments':
            await viewAllDepartments(connection);
            await runPrompt();
            break;
        case 'View All Roles':
            await viewAllRoles(connection);
            await runPrompt();
            break;        
    }
}


// var updateEmployeeRoles = 
// {
//     type: 'list',
//     message: 'Whose role would you like to update?',
//     choices: [],
// } 

// var newEmployee = 
// {
//     type: 'input',
//     message: 'What is the name of the new employee?',
//     name: 'employeeName'
// },  {
//     type:  

// }


async function AddEmployee(){
    
}