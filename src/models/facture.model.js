const mongoose = require("mongoose");
const facture_schema = mongoose.Schema({
    clientname:{type:String, require:true},
    identification: {type:String, require:true, unique:true},
    facturenumber: {type:String, require:true, unique:true},
    address:{
        type:Object,
        require:true,
        city: {type:String, require:true},
        code_zip: {type:String, require:true},
    },
    Order:{
        type:Array,
        require:true,
        product: {
            type:Object, 
            require:true,
            ordernumber: {type:String, require:true},
            productname: {type:String, require:true},
            quantity: {type:Number, require:true},
            price: {type:String, require:true},
            warranty: {type:String, require:true}
        },
    },

});
module.exports = mongoose.model("FactureCollection", facture_schema);