const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// gets all recipes posted by user that is currently logged in
router.get('/', (req, res) => {
    console.log(req.session.user_id)
    Recipe.findAll({
      where: {
        user_id: req.session.user_id
      },
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
    const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
    res.render('dashboard', { recipes, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});


// when clicking on edit post, will be redirected to this page
router.get('/edit/:id', (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'ingredients',
            'recipe_steps',
            'category',
            'image_url'
        ],
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
            model: User,
            attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]}
    )
        .then(dbPostData => {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
        post,
        loggedIn: true
        });

        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
})

module.exports = router;