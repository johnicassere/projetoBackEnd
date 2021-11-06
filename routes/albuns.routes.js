const express = require('express');
const router = express.Router();

const albuns = [
    {
        id : 1,
        artista : "Legião Urbana",    
        titulo : "Tempestade",
        imagem : "https://upload.wikimedia.org/wikipedia/pt/1/14/Legi%C3%A3o_Urbana_-_A_Tempestade_ou_O_Livro_dos_Dias.jpg",
        genero : "Rock",
        nota : 0, 
        assistido : false, 
    },
    {
        id : 2,
        artista : "Legião Urbana" ,   
        titulo : "As Quatro estações",
        imagem:"https://upload.wikimedia.org/wikipedia/pt/e/e9/Legi%C3%A3o_Urbana_-_As_Quatro_Esta%C3%A7%C3%B5es.jpg",
        genero : "Rock",
        nota : 0, 
        assistido : false, 
    },
    {
        id : 3,
        artista : "Marilia Mendonça",   
        titulo : "Ao vivo",
        imagem : "https://i.scdn.co/image/ab67616d0000b2737b4293f65f8fe7003c29279c",
        genero : "Sertanejo",
        nota : 10, 
        assistido : false, 
    },
    {
        id : 4,
        artista : "Capital Inicial",    
        titulo : "Acustico MTV",
        imagem : "https://estaticos.globoradio.globo.com/fotos/2019/04/b02172ed-e2b1-4f88-bbd2-30492ca8cb48.jpg",
        genero : "Rock",
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
res.send({
albuns,
message: `Album ${incluir.titulo} Cadastrado com Sucesso !`,});
});

router.put('/edit/:id',(req,res) =>{
    const idParam = req.params.id;
    const novoAlbum = req.body;
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index] = {
        ...albuns[index],
        ...novoAlbum
    }
    res.send({
        albuns,
        message:'Editado com Sucesso'
    })
});

router.put('/:status/:id',(req,res) =>{
    const idParam = req.params.id;
    const okParams = req.params.status;
    let okParamsBolean = (okParams == 'true'); 
    let index = albuns.findIndex(album => album.id == idParam);
    albuns[index].assistido = okParamsBolean;
    const statusEditado = albuns[index];    
    res.send({
        statusEditado
    })
        
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


