DROP DATABASE IF EXISTS employeeManagement_db;

CREATE DATABASE employeeManagement_db;

USE employeeManagement_db;

CREATE TABLE employee (
    id int not null Auto_Increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int null, 
    manager_id int null,
    primary key(id)
);

CREATE TABLE role (
    id int not null Auto_Increment,
    title varchar(30) null,
    salary decimal(20, 2) null,
    department_id int not null,
    primary key(id)
);

CREATE TABLE department (
    id int not null Auto_Increment,
    name varchar(30) null,
    primary key(id)
);