const {exec} = require('../db/mysql')

const loginCheck = (username, password) => {
    const sql = `select username, realname from user where username = '${username}' and password = '${password}';`
    return exec(sql).then(rows => rows[0] || {})
}

module.exports = {
    loginCheck
}