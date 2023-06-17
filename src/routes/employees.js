const express = require('express');
const EmployeesController = require('../controllers/EmployeesController');
const MachinesController = require('../controllers/MachinesController');

const router = express.Router();



router.get('/employees',EmployeesController.index);
router.get('/create',EmployeesController.create);
router.post('/create',EmployeesController.store);
router.post('/employees/delete',EmployeesController.destroy);
router.get('/employees/edit/:rut',EmployeesController.edit);
router.post('/employees/edit/:rut',EmployeesController.update);
router.get('/machines',MachinesController.index);
router.get('/create_machines',MachinesController.create);
router.post('/create_machines',MachinesController.store);
router.post('/machines/delete',MachinesController.destroy);
router.get('/machines/edit/:id',MachinesController.edit);
router.post('/machines/edit/:id',MachinesController.update);

module.exports = router;
