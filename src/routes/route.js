const express = require('express');
const router = express.Router();


const authorController = require("../controllers/authorControllers")

router.get('/test-me', function (req, res) {
    loggerModule.welcomeMessage()
 
    res.send('My first ever api!')
});
router.post("/creatAuthor" , authorController.creatAuthor)





module.exports = router;
// adding this comment for no reason