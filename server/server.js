const controller = require("./controller")

const path = require ("path")
const express = require ("express") 
const app = express () 

const cors = require ("cors")
app.use (cors())

app.use(express.json())

app.use(express.static(path.join(__dirname,"../public"))) 

const{getCity}= controller


app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"../public/index.html")))

app.get('/api/city',getCity)

const port = process.env.PORT|| 4000
app.listen(port,()=>console.log(`server listening on port ${port}`)) 

