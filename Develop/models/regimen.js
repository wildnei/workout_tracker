const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regimenSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercise: [
        {
            name: { type: String, trim: true, required: true },
            type: { type: String, trim: true, required: true },
            weight: { type: Number },
            sets: { type: Number },
            reps: { type: Number },
            duration: { type: Number },
            distance: { type: Number }
        }
    ]
});


const Regimen = mongoose.model("Regimen", regimenSchema);

module.exports = Regimen;
