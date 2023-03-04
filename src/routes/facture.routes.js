const express = require('express');
const facture_model = require("../models/facture.model")
const facture_routes_http = express.Router();

facture_routes_http.post("/", (req, res) => {
    const new_facture = facture_model(req.body);
        new_facture
            .save()
            .then((data)=>res.json(data))
            .catch((err)=> res.json({message: err}));
    });

facture_routes_http.get("/", (req, res) => {
    facture_model
        .find()
        .then((data)=>res.json(data))
        .catch((err)=> res.json({message: err}));
    });

facture_routes_http.get("/:factureId", (req, res) => {
    const {factureId} = req.params
    facture_model
        .findById ({ _id: factureId})
        .then((data)=>res.json(data))
        .catch((err)=> res.json({message: err}))
})
facture_routes_http.put("/:factureId", (req, res) => {
    const{factureId} = req.params;
    const{clientname, identification, facturenumber, address, Order} = req.body;
    facture_model
        .updateOne({_id:factureId}, {clientname, identification, facturenumber, address, Order})
        .then((data)=>res.json(data))
        .catch((err)=> res.json({message: err}))
})
facture_routes_http.delete("/:factureId", (req, res) => {
    const{factureId} = req.params;
    facture_model
        .deleteOne({ _id: factureId})
        .then((data)=>res.json(data))
        .catch((err)=> res.json({message: err}))
});
facture_routes_http.delete("/", (req, res) =>{
    const query = { facture: {$regex: ""}};
    facture_model
        .deleteMany(query)
        .then((data)=> res.json(data))
        .catch((err)=> res.json({message: err}))
})

module.exports = facture_routes_http;