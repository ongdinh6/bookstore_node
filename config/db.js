const mssql = require("mssql");

const dbconfig = {
    user: "sa",
    password: "csdl",
    server: "localhost",
    database: "bookstore_node_v1"
}

mssql.connect(dbconfig, (error) => {
    if (error) console.error("Connect to SQL Server is interrupted by: ", error);
});

module.exports = mssql;
