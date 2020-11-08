const db = require('../models');

module.exports = function(app, path) {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(data => {
      console.log(data);
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
  });

  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
  });

  app.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
  });

  app.put('/api/workouts/:id', (req, res) => {
    const body = req.body;
    db.Workout.findByIdAndUpdate(req.params.id, 
      {
        $push: {
          exercises: body
        }
      }, {new: true})
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json(err)
    })
  });
};




