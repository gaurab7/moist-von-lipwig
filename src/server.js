import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))
const PORT = process.env.PORT || 8848

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})  