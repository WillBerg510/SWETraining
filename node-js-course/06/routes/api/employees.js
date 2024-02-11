const express = require('express');
const router = express.Router();
const empContorller = require('../../controllers/employeesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
  .get(empContorller.getAllEmployees)
  .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empContorller.createNewEmployee)
  .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empContorller.updateEmployee)
  .delete(verifyRoles(ROLES_LIST.Admin), empContorller.deleteEmployee);

router.route('/:id').get(empContorller.getEmployee);

module.exports = router;