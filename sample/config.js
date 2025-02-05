const path = require('path');
const output = path.join(__dirname, "./models");
const options = { directory: output, caseFile: 'l', caseModel: 'p', caseProp: 'c', lang: 'ts', useDefine: false, singularize: true, spaces: true, indentation: 2 };

// Edit the configuration below for your database dialect

// sqlite
const storage = path.join(__dirname, "./northwind.sqlite");
const sqlite = {
  dbname: 'northwind',
  user: '',
  pass: '',
  options: { dialect: 'sqlite', storage: storage },
  autoOptions: { dialect: 'sqlite', storage: storage, ...options }
};

// mssql
const mssql = {
  dbname: 'northwind',
  user: 'mssql',
  pass: 'mssql',
  options: { dialect: 'mssql' },
  autoOptions: { dialect: 'mssql', ...options }
};

// mysql
const mysql = {
  dbname: 'northwind',
  user: 'mysql',
  pass: 'mysql',
  options: { dialect: 'mysql' },
  autoOptions: { dialect: 'mysql', ...options }
};

// postgres
const postgres = {
  dbname: 'Northwind',
  user: 'postgres',
  pass: 'postgres',
  options: { dialect: 'postgres' },
  autoOptions: { dialect: 'postgres', ...options }
};

// db2
const db2 = {
  dbname: 'Northwind',
  user: 'db2',
  pass: 'db2',
  options: { dialect: 'db2' },
  autoOptions: { dialect: 'db2', ...options }
};

// ibmi
const ibmi = {
  dbname: 'Northwind',
  user: 'ibmi',
  pass: 'ibmi',
  options: { dialect: 'ibmi' },
  autoOptions: { dialect: 'ibmi', ...options }
};

// snowflake
const snowflake = {
  dbname: 'Northwind',
  user: 'snowflake',
  pass: 'snowflake',
  options: { dialect: 'snowflake' },
  autoOptions: { dialect: 'snowflake', ...options }
};

// Change to export appropriate config for your database
module.exports = sqlite;
