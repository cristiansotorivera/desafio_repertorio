import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import repertorioRouter from './routes/repertorio.route.js'


const app = express()

//habilitar cors publico
app.use(cors())

//habilitar req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//habilitar  los archivos estaticos
app.use(express.static('./public'))
//ruta
app.use('/repertorio', repertorioRouter)

//levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running on on PORT ${PORT}`)
})