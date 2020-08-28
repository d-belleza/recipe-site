const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session)
    Recipe.findAll({
        attributes: [
            'id',
            'title',
            'ingredients',
            'recipe_steps',
            'category',
            'image_url'
        ],
        order: [['created_at', 'DESC']], 
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'user_id', 'recipe_id'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
          //console.log(dbPostData[0]);
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;