const express = require('express');
const db = require('../models');

module.exports = function(app, path) {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(data => {
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
};




