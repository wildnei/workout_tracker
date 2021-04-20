const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    }, exercises: [
        {
            name: { type: String, trim: true, required: true },
            type: { type: String, trim: true, required: true },
            weight: { type: Number },
            sets: { type: Number },
            reps: { type: Number },
            duration: { type: Number, Required: "Please enter your exercise duration" },
            distance: { type: Number }
        }
    ]
}, {
    toJSON: {
        virtuals: true
    }
});


workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
