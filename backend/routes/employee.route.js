const express = require('express');
const employeeRoute = express.Router();
const app = express();

// employee model
let employee = require('../models/Employee.js')

//ad employee
employeeRoute.route('/create').post((req, res,next) =>{
    Employee.create(req.body, (error, date) =>{
        if (error){
            return next (error)
        }else{
            res.json(data)
        }
    })
});

//get all employees
employeeRoute.route('/').get((req, res) =>{
    Employee.find((error, data) => {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

//get single employee
employeeRoute.route('/read/:id').get((req, res) =>{
    Employee.findById(req,params.id, (error, date) =>{
        if(error) {
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) =>{
        if (error) {
            return next(error);
            console.log(err)
        }else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// delete employee
employeeRoute.route('delete/:id').delete((req, res, next) => {
    Employee.findByIdAndRemove(req.params.id, (error, data) =>{
        if (error) {
            return next(error);
        }else (
            res.status(200).json({
                msg: data
            })
        )
    })
})
module.exports = employeeRoute;