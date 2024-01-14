const express = require('express');
const router = express.Router();
const data = {};
data.employees = require('../../data/employees.json');

router.route('/').get(function(req, res) {
  res.json(data.employees);
}).post(function(req, res) {
  res.json({
    'firstname': req.body.firstname,
    'lastname': req.body.lastname
  })
}).put(function(req, res) {
  res.json({
    'firstname': req.body.firstname,
    'lastname': req.body.lastname
  })
}).delete(function(req, res) {
  res.json({'id': req.body.id})
});

router.route('/:id').get(function(req, res) {
  res.json({'id': req.params.id});
});

module.exports = router;