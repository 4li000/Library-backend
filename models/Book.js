const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        authors: {
            type: Array,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        publishedData: {
            type: Date,
            required: true
        },
        isbn: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Book", bookSchema);