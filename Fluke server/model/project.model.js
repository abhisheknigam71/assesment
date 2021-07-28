const mongoose = require('mongoose');


var project = new mongoose.Schema({

    id: {
        type: String,
        required: 'This field is mandatory.'
    },
    organization_id: {
        type: String,
        required: 'This field is mandatory.'
    },
    user_id: {
        type: String,
        required: 'This field is mandatory.'
    },
    name: {
        type: String,
        required: 'This field is mandatory.'
    },
    created_at: {
        type: String,
        required: 'This field is mandatory.'
    }
});

module.exports = mongoose.model('Project', project);