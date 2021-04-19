var path = require("path")
var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/api/workouts", function (req, res) {
        db.regimen.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", function ({ body, params }, res) {
        db.regimen.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.regimen.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.regimen.find({}).limit(5)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};



// const db = require("../models");

// module.exports = function (app) {
//     app.get("/api/workouts", function (req, res) {
//         db.regimen.find({})
//             .then(function(results) {
//                 res.json(results)
//             })
//             .catch(function(err) {
//                 res.json(err)
//             });
//     })

//     app.put("/api/workouts/:id", function (req, res) {
//         db.regimen.findByIdAndUpdate({id: req.params.id}, { $push:{exercises: req.body}})
//             .then(function (results) {
//                 res.json(results)
//             })
//             .catch(function(err) {
//                 res.json(err)
//             });
//     })

//     app.post("/api/workouts", function (req, res) {
//         db.regimen.create(req.body)
//             .then(function (req, res) {
//                 res.json(results)
//             })
//             .catch(function(err) {
//                 res.json(err)
//             });
//     })

//     app.get("/api/workouts/range", function (req, res) {
//         db.regimen.find({ id: req.params})
//             .then(function (results) {
//                 res.json(results)
//             })
//             .catch(function(err) {
//                 res.json(err)
//             });
//     })
// }

