const express = require('express');

const router = express.Router();

router.get("/", async (req, res, next) => {
    const sql = require('mssql');
    const dbconfig = {
        user: "sa",
        password: "csdl",
        server: "DESKTOP-S56ISQL",
        database: "bookstore_node_v1",
        port: 1433,
        encrypt: false
    }
    sql.connect(dbconfig, (err) => {
        if (err) console.error("DB connection is interrupted: ", err);

        const sqlRequest = new sql.Request();
        const sqlScript = 'select * from Book';

        sqlRequest.query(sqlScript, (err, recordSet) => {
            if (err) console.error(`Failed to executed script ${sqlScript} with detail ${err}`);
            res.send(recordSet.recordset);
        });
    });
});

router.get(':/id', async (req, res, next) => {

});

module.exports = router;