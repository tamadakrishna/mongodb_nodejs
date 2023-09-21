const express = require('express')
const router = express.Router()
const EmployeeController = require('../controller/EmployeeController')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.post('/SaveEmployeeDetails',EmployeeController.SaveEmployeeDetails)

module.exports = router