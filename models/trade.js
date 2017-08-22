

// Trade model
// ============== 
// Require mongoose
var mongoose = require("mongoose");
// Create a schema class using mongoose's schema method 
var Schema = mongoose.Schema;
// Create the tradeSchema with our schema class 
var tradeSchema = new Schema({
    // Article, a string, must be entered   
    title: {
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
    url: {
        type: String,
        required: true
    }
});
// Create the Trade model using the ArticleSchema 
var Trades = mongoose.model("Trades", tradeSchema);
// Export the Articles model
module.exports = Trades;

