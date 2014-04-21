module.exports = function(app) {
  return {
    index: function(req, res, next) {
      app.Models.Notebook.list({userId: req.user.id, projectId: req.project.id})
        .then(function(notebooks) {
          res.json(notebooks);
        })
        .catch(next);
    },

    create: function(req, res, next) {
      app.Models.Notebook.save({userId: req.user.id,
        projectId: req.project.id,
        name: req.body.name,
        data: JSON.parse(req.body.data)
      })
        .then(function() {
          res.json(200);
        })
        .catch(next);
    },

    get: function(req, res, next) {
      app.Models.Notebook.load({userId: req.user.id,
        projectId: req.project.id,
        name: req.params.notebook_name
      })
        .then(function(data) {
          res.json(data);
        })
        .catch(next);
    },

    notebookContents: function(req, res, next) {
      app.Models.Notebook.load({userId: req.user.id,
        projectId: req.project.id,
        name: req.params.notebook_name
      })
        .then(function(data) {
          res.json(data.data);
        })
        .catch(next);
    },

    update: function(req, res, next) {
      app.Models.Notebook.update({userId: req.user.id,
        projectId: req.project.id,
        name: req.params.notebook_name,
        data: JSON.parse(req.body.data)
      })
        .then(function() {
          res.json(200);
        })
        .catch(next);
    }
  };
};
