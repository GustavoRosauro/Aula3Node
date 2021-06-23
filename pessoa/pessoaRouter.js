const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    let validar = req.body.idade >= 18?'Usuário é maior de idade':'Usuário é menor de idade'
    res.json(validar); 
})
router.get('/',(req,res)=>{
    let lista = [
        {
            nome:'Gustavo',
            idade:29
        },
        {
            nome:'Maria',
            idade:10
        },
        {
            nome:'Alcides',
            idade:44
        }
    ]
    res.json(lista)
})
module.exports = router;