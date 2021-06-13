const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodel')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const securePasswordConf = await bcrypt.hash(request.body.passwordConf, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userId:request.body.userId,
        email:request.body.email,
        password:securePassword,
        passwordConf:securePasswordConf,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router