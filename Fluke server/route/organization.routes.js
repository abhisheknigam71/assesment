const express = require("express");
const router = express.Router();

const org = require('../controller/organization.controller');

// Retrieve all orgnizations
    router.get('/', org.get);

// Retrieve orgnizations by id
    router.get('/:id', org.getById);

// Insert orgnization
    router.post('/save', org.post);

// Update orgnization
router.post('/update/:id', org.update);

// Delete orgnization by id
    router.delete('/delete/:id', org.deleteById); 

module.exports = router;