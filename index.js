const express = require('express')
const cors = require("cors")


// App
const app = express()
app.use(cors())
app.set('trust proxy', true);
const port = 3000

app.get('/', (req, res) => {
    res.send("Hola")
})

app.get('/clientes',(req,res) =>{
    res.json([

            {"id":1,"dominio":"productossarita.com"},
            {"id":2,"dominio":"5vid.pe"},
            {"id":3,"dominio":"aaalima.pe"},
            {"id":4,"dominio":"inkahosting.com"},
            {"id":5,"dominio":"hostinger.com"}
    ]
    )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})