const express = require("express");
const facture_routes_access = require ("./facture.routes")
const routes = express.Router();

const app_routes_system = (app) => {
    app.use("/api/v1", routes);
    routes.use("/factures", facture_routes_access)
};

module.exports = app_routes_system;