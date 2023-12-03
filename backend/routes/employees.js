const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

router.get('/', employeesController.getEmployees);
router.post('/', employeesController.addEmployee);

// Add routes for update, view, and delete

module.exports = router;
