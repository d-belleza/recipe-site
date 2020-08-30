const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');

// need to update this so that it only pulls the most recent recipes
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
              model: User,
              attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
          const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
          res.render('homepage', {
            recipes,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// get single post
router.get('/recipe/:id', (req,res) => {
  Recipe.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'ingredients',
        'recipe_steps',
        'category',
        'image_url',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'recipe_id', 'created_at'],
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const recipe = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-recipe', {
        recipe,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

module.exports = router;