require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()
const sequelize = require('./db')
const cors = require('cors')
const errorHandler = require('./src/middlewares/ErrorHandler')
const {routes} = require('./src/routes/index')

app.use(cors())
app.use(express.json())
app.use(errorHandler)
app.use("/files", express.static("files"))
routes.forEach(element => {
    app.use(`/api/${element}`, require(`./src/routes/${element}`))
});


async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('server start on port: ' + PORT))
    } catch (error) {
    
    }
}

start()