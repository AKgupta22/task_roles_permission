const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
require('./services/dbConnect.services')
const router = require('./routes/fileUpload.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))