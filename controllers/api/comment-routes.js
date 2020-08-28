const router = require('express').Router();
const { Comment } = require('../../models');
//const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        recipe_id: req.body.recipe_id

      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
});

module.exports = router;