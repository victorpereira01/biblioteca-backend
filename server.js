const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/biblioteca-backend',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir('./src/models');

const Obra = mongoose.model('Obra');


app.get('/', (req, res) => {
    Obra.create({
        titulo: 'Harry Potter',
        editora: 'Rocco',
        foto: 'https://i.imgur.com/UH3IPXw.jpg',
        autores: [
            'JKRowling',
            'Tony Hawk'
        ]
    })
res.send("HELLO");
})

app.listen(3001);