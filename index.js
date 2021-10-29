const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const port = 3000;
//albuns[albuns.length -1].id + 1
const albunsRouter = require('./routes/albuns.routes');
app.use("/albuns",albunsRouter); 

app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`);
});