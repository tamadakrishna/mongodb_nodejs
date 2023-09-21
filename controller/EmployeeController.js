const EmployeeModel = require('../model/employee')

const SaveEmployeeDetails = (req,res)=>{
    EmployeeModel.employeeDetails({
        "name":"KRISHNA",
        "age":22,
        "city":"VSP",
        "role":"SOFTWARE ENGINEER-1",
        "salary":40000
    }).save()
        .then(()=>{
            res.send("Successfully Saved...")
        })
        .catch(()=>{
            res.send("Failed to Save Details")
        })

    res.send('SAVE EMPLOYEE DETAILS')
}

module.exports = {SaveEmployeeDetails}