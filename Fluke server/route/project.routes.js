const express = require("express");
const router = express.Router();

const project = require('../controller/project.controller');

// Retrieve all projects
    router.get('/', project.get);

// Retrieve project by project-id
    router.get('/:id', project.getById);

// Retrieve project by organization-id
router.get('/:id', project.getByOrgId);

// Insert project
    router.post('/save', project.post);

// Update project
router.post('/update/:id', project.update);

// Delete project by id
    router.delete('/delete/:id', project.deleteById);

module.exports = router;