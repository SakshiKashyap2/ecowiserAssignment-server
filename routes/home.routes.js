const express = require('express');
const router=express.Router();

const {welcomeMessage}=require('../controllers/homeController')

router.get('/', welcomeMessage)

module.exports=router;