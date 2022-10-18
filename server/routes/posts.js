const express = require('express');
const router = express.Router();
const Posts = require('../models').Posts;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Post
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'post_add').then((rolePerm) => {
        if (!req.body.post_name || !req.body.post_description || !req.body.post_image) {
            res.status(400).send({
                msg: 'Please pass Post name, description, image.'
            })
        } else {
            Posts
                .create({
                    post_name: req.body.post_name,
                    post_description: req.body.post_description,
                    post_image: req.body.post_image,
                })
                .then((post) => res.status(201).send(post))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get List of Posts
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'post_get_all').then((rolePerm) => {
        Posts
            .findAll()
            .then((post) => res.status(200).send(post))
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get Post by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'post_get').then((rolePerm) => {
        Posts
            .findByPk(req.params.id)
            .then((post) => res.status(200).send(post))
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Update a Post
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'post_update').then((rolePerm) => {
        if (!req.body.post_name || !req.body.post_description || !req.body.post_image) {
            res.status(400).send({
                msg: 'Please pass Post name, description or image.'
            })
        } else {
            Posts
                .findByPk(req.params.id)
                .then((post) => {
                    Posts.update({
                        post_name: req.body.post_name || user.post_name,
                        post_description: req.body.post_description || user.post_description,
                        post_image: req.body.post_image || user.post_image,
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Post updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Delete a Post
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'post_delete').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass post ID.'
            })
        } else {
            Posts
                .findByPk(req.params.id)
                .then((post) => {
                    if (post) {
                        Posts.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Post deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Post not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

module.exports = router;