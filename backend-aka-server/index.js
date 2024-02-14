import cors from 'cors'
import {config} from 'dotenv'
import express from 'express'
import {getProductsTable} from './database.js'

config();
const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.get('/products', async (req, res)=>{
    res.send(await getProductsTable())
})

app.listen(PORT, ()=>{
    console.log(`The code is running on http://localhost:${PORT}`)
})