const express = require('express')

require('dotenv').config()

const cors = require('cors')

const app = express()



// make the app to use json file
app.use(express.json())

//make the app to perform cors
app.use(cors())



// init the port
const PORT = process.env.PORT


app.listen(PORT, () => console.log(`server up on port ${PORT}`))

