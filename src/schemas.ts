import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
});
const Quote = mongoose.model('Quote', quotesSchema);
export default Quote;