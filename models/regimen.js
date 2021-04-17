const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regimenSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            name: {
                type: String,
                trim: true,
                required: "Exercise Name"
            },
            type: {
                type: String,
                trim: true,
                required: "Exercise Type"
            },
            weight: {
                type: Number
            },
            Sets: {
                type: Number
            },
            Reps: {
                type: Number
            },
            Duration: {
                type: Number
            },
            Distance: {
                type: Number
            }
        }
    ]
});


const Regimen = mongoose.model("Regimen", regimenSchema);

module.exports = Note;
