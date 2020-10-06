const employeeCtrl = {};

const Employee = require('../models/employee');

employeeCtrl.getEmployees = async (req, res) =>{
    const employees = await Employee.find();
    res.json(employees);
};
employeeCtrl.createEmployee = async (req, res) =>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({message:'Employee Created'});
};
employeeCtrl.getEmployee = async (req, res) =>{
    const result = await Employee.findById(req.params.id);
    res.send(result);
    
};
employeeCtrl.editEmployee = async(req, res) =>{
    
    await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({status: 'Employee Update'});

};
employeeCtrl.deleteEmployee = async (req, res) =>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;