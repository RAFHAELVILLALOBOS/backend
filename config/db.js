import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: "localhost",
  user: "root"
  ,password: "RAFHAELpogi8989",
  database: "librarydb",
})

export default pool;