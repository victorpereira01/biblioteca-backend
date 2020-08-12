const mongoose = require('mongoose');

const Obra = mongoose.model('Obra');

module.exports = {

    async findAll(req, res) {
        const obras = await Obra.find();
        return res.json(obras);
    },

    async create(req, res) {
        const obra = await Obra.create(req.body);
        return res.json(obra);
    },

    async update(req, res) {
        const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(obra);
    },

    async delete(req, res) {
        await Obra.findByIdAndDelete(req.params.id); 
        return res.send();
    }
}