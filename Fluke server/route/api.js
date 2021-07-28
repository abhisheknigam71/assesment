const router = require('express').Router();

router.use('/project', require('./project.routes'));
router.use('/organization', require('./organization.routes'));

module.exports = router;