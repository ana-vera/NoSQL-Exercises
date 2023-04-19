//es buena practica que en server se configuran todas las config globales del servidor
//ahorita solo tenemos port, middlewares, routes, pero un servidor mas grandes tendria más configuraciones

import express from "express"

const app = express()

//settings
app.set("port",3000)


//Middlewares

//Routes

export default app