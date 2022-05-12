const db = require('../db/connection');
class Department {
    constructor () {}

    viewAll() {
        const sql = `SELECT * FROM department`;

        db.query(sql, (err, rows) => {
            if(err) {
                console.log(err.message);
            }
            console.table(rows);
        });
    }
}

module.exports = Department;