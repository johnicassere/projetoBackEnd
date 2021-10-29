const express = require('express');
const router = express.Router();

const albuns = [
    {
        id : 1,
        artista : "Legião Urbana",    
        titulo : "Dois",
        imagem : "https://www.vagalume.com.br/legiao-urbana/discografia/dois.jpg",
        genero : "Rock",
        nota : 0, 
        assistido : false, 
    },
    {
        id : 2,
        artista : "Racionais MC'S" ,   
        titulo : "Sobrevivendo no Inferno",
        imagem:"https://www.vagalume.com.br/racionais-mcs/discografia/sobrevivendo-no-inferno.jpg",
        genero : "Rap",
        nota : 0, 
        assistido : false, 
    },
    {
        id : 3,
        artista : "Milionário e José Rico",   
        titulo : "Sentimental Demais",
        imagem : "https://www.vagalume.com.br/milionario-e-jose-rico/discografia/sentimental-demais.jpg",
        genero : "Sertanejo",
        nota : 10, 
        assistido : false, 
    },
    {
        id : 4,
        artista : "Djavan",    
        titulo : "Lilas",
        imagem : "https://www.vagalume.com.br/djavan/discografia/lilas.jpg",
        genero : "Mpb",
        nota : 6, 
        assistido : false, 
    }
    
    ];
module.exports = router;

router.get("/", (req,res) =>{
res.send(albuns);
});

router.get("/:id", (req,res) =>{
const idParam = req.params.id;
const album = albuns.find(album => album.id == idParam); 
res.send(album);
});

router.post('/add',(req,res) =>{
const incluir = req.body;
incluir.id = albuns[albuns.length -1].id + 1;
albuns.push(incluir);
res.send(albuns);
});

router.put('/edit/:id',(req,res) =>{
    const idParam = req.params.id;
    const novoAlbum = req.body;
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index] = {
        ...albuns[index],
        ...novoAlbum
    }
    res.send(albuns);
});

router.put('/status/:id',(req,res) =>{
    const idParam = req.params.id;
    let index = albuns.findIndex(album => album.id == idParam);
    if(albuns[index].assistido === false){
        albuns[index].assistido = true
    }else{
        albuns[index].assistido = false
    }
    res.send(albuns);
});

router.delete('/delete/:id',(req,res) =>{
    const idParam = req.params.id;
    const index = albuns.findIndex(album => album.id == idParam);
    const nome = albuns[index];
    albuns.splice(index, 1);
    res.send({
        message: `Album ${nome.titulo} excluido com sucesso !`,
    })
});


