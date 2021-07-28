const Project = require('../model/project.model');

// Retrieve all projects

exports.get = function(req, res, next) {

    Project.find(function(err, record) {
        if(err) {
            console.log('Project controller get record error: ', err);
            res.send(err);
        }
        res.send(record);
    });
}

// Retrieve projects by project-id
exports.getById = function(req, res, next) {

    Project.findById(req.params.id, (err, record) => {
        if(err) {
            res.send(err);
        }
        res.send(record);
    });

}

// Retrieve projects by organization-id
exports.getByOrgId = function(req, res, next) {
    Project.findById(req.params.organization_id, (err, record) => {
        if(err) {
            res.send(err);
        }
        res.send(record);
    });
}

// Insert project

exports.post = function(req, res) {
    var projectId = new Project({
      id: req.body.id,
      organization_id: req.body.organization_id,
      user_id: req.body.user_id,
      name: req.body.name,
      created_at: req.body.created_at
    });

    projectId.save((err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            res.send(null);
        }
    });
}

// Update project
exports.update = function(req, res) {
    var projectId = new Project({
      id: req.body.id,
      organization_id: req.body.organization_id,
      user_id: req.body.user_id,
      name: req.body.name,
      created_at: req.body.created_at
    });

    Project.findByIdAndUpdate(req.params.id, { $set: projectId}, {new: true}, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
                console.log('Erro in project update: ' + err);
        }
    });
}

// Delete project by id

exports.deleteById = function(req, res, next) {
    Project.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) {
            res.send(err);
        }res.send(doc);
    });
}