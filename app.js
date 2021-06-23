const express = require('express')
const app = express();
const pessoaRouter = require('./pessoa/pessoaRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/pessoa',pessoaRouter)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pessoa/pessoa.html')
})

app.listen(8080,()=>{
    console.log('rodando na porta 8080')
})