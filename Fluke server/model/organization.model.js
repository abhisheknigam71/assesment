const mongoose = require('mongoose');

var org = new mongoose.Schema({
    organization_id: {
        type: String,
        required: 'This field is mandatory.'
    },
    name: {
        type: String,
        required: 'This field is mandatory.'
    }
});

module.exports = mongoose.model('Organization', org);