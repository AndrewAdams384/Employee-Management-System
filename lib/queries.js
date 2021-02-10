async function viewAllDepartments(connection) {
    const SQL_STATEMENT = `SELECT * FROM employeeManagement_db.department;`

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
};

async function viewAllEmployees(connection) {
        // const SQL_STATEMENT = `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, role.title, role.salary, employee.manager_id, department.name
        // from((employee
        //     inner join role on employee.role_id = role.id)
        //     inner join department on role.department_id = department.id);`
    const SQL_STATEMENT = `SELECT * from employee;`
    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
};


async function addDepartment(connection, departmentName) {
    const SQL_STATEMENT = `insert into department(name) values (?);`

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, departmentName);
    } catch (error) {
        console.log(error);
    }
};

async function addEmployee(connection, firstName, lastName, role) {
    const SQL_STATEMENT = `insert into employee(first_name, last_name, role_id) values(?, ?, ?);`

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [firstName, lastName, role]);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    viewAllDepartments,
    viewAllEmployees,
    addDepartment,
    addEmployee
}