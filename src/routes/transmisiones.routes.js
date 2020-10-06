const { Router } = require('express');
const router = Router();
const employeesCtrl =  require('../controllers/transmisiones.controllers')

//Listar empleados
router.get('/',employeesCtrl.getEmployees);

//Crear Empleados
router.post('/',employeesCtrl.createEmployee);

//Listar un solo empleado
router.get('/:id',employeesCtrl.getEmployee);

//Editar Empleados
router.put('/:id',employeesCtrl.editEmployee);

//Eliminar empleados
router.delete('/:id',employeesCtrl.deleteEmployee);



module.exports = router;