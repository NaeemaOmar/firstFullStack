import mysql from 'mysql2'
import {config} from 'dotenv'

config();

const pool = mysql.createPool({
    host: process.env.HOST, 
    user:process.env.USER,
    password: process.env.PASSWORD,
    database : process.env.DATABASE
}).promise()

const getProductsTable = async () => {
    const [result] = await pool.query(`
    SELECT * FROM products
    `)
    return result
}

export {getProductsTable}