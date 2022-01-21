const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codo_a_codo',
})

connection.connect((error) => {
    if(error) {
        throw error
    }
})

module.exports = connection