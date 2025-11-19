
import express from "express";

import tecnologiaRouter from "../src/routes/tecnologia.route.js";


const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', tecnologiaRouter)


app.listen(PORT, ()=>{
    console.log('SERVER CORRIENDO BIEN');
    
})