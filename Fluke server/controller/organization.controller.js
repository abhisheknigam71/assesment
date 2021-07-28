const Organization = require('../model/organization.model');

// Retrieve all Organizations
exports.get = function(req, res, next) {
    Organization.find(function(err, record) {
        if(err) {
            console.log('Organization controller get record error: ', err);
            res.send(err);
        }
        res.send(record);
    });
}

// Retrieve Organizations by Organization-id

exports.getById = function(req, res, next) {
    Organization.findById(req.params.id, (err, record) => {
        if(err) {
            res.send(err);
        }
        res.send(record);
    });
}

// Insert Organization

exports.post = function(req, res) {
    var OrganizationId = new Organization({
      organization_id: req.body.id,
      name: req.body.name
    });

    OrganizationId.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            res.send(null);
        }
    });
}

// Update Organization
exports.update = function(req, res) {
    var OrganizationId = new Organization({
      organization_id: req.body.id,
      name: req.body.name
    });

    Organization.findByIdAndUpdate(req.params.id, { $set: OrganizationId}, {new: true}, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            console.log('Erro in Organization update: ' + err);
        }
    });
}

// Delete Organization by id
exports.deleteById = function(req, res, next) {
    Organization.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) {
            res.send(err);
        }
        res.send(doc);
    });
}