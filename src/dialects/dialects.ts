import { mssqlOptions } from "./mssql";
import { mysqlOptions } from "./mysql";
import { postgresOptions } from "./postgres";
import { sqliteOptions } from "./sqlite";
import { db2Options } from "./db2";
import { snowflakeOptions } from "./snowflake";
import { DialectOptions } from "./dialect-options";
import { Dialect } from "@sequelize/core";

export const dialects: { [name in Dialect]: DialectOptions } = {
  mssql: mssqlOptions,
  mysql: mysqlOptions,
  mariadb: mysqlOptions,
  postgres: postgresOptions,
  sqlite: sqliteOptions,
  db2: db2Options,
  snowflake: snowflakeOptions
};
