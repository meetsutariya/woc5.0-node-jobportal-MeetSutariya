const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/', services.HomeRoutes)
route.get('/student-login', services.student_login)
route.get('/student-signup', services.student_signup)
route.get('/company-login', services.company_login)
route.get('/company-signup', services.company_signup)
route.get('/student-company', services.student_company)

// API
route.post('/api/student', controller.create_student)
route.post('/api/company', controller.create_company)
route.get('/api/student/:username', controller.find_student)
route.get('/api/company/:company_name', controller.find_company)


module.exports = route