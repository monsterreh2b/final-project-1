

// Trade model
// ============== 
// Require mongoose
var mongoose = require("mongoose");
// Create a schema class using mongoose's schema method 
var Schema = mongoose.Schema;
// Create the tradeSchema with our schema class 
var tradeSchema = new Schema({
    // Article, a string, must be entered   
    stock: {
        type: String,
        required: true, 
        unique: true 
    },

    // date is just a string   
    date: String,
    saved: { 
        type: Boolean,
        default: false 
    },
    sellPrice: {
        type: Float,
        required: true
    }, 
    lossPrice: {
        type: Float,
        required: true
    },
    maxStockQty:{
        type: Float,
        required: true
    },
     totalCost:{
        type: Float,
        required: true
    },
     compStat:{
        type: String,
        required: true
    },
     compStat:{
        type: String,
        required: true
    },
    currentGains:{
        type: Float,
        required: true
    },
    currentLosses:{
        type: Float,
        required: true
    },
    aveGains:{
        type: Float,
        required: true
    },
    aveLooses:{
        type: Float,
        required: true
    }
});
// Create the Trade model using the ArticleSchema 
var Trades = mongoose.model("Trades", tradeSchema);
// Export the Articles model
module.exports = Trades;

