const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Golden Chicken Tenders',
    ingredients: '1 (9 ounce) package chicken tenderloins, ½ cup finely crushed dry stuffing mix, 2 tablespoons melted butter',
    recipe_steps: 'Preheat oven to 350 degrees F (175 degrees C), Line a 9x13 inch baking dish with foil. Rinse and pat dry the chicken and place in the baking dish., Combine the stuffing mix with the melted butter or margarine. Place stuffing mixture on top of the chicken tenders., Bake in the preheated oven for 40 minutes.',
    category: 'Main Course',
    user_id: 2
  },
  {
    title: 'Easy No-Bake Strawberry Ice Cream Cake',
    ingredients: '1 (10 inch) prepared angel food cake, 2 pints strawberry ice cream, 1 (8 ounce) container thawed frozen whipped topping, 6 large fresh strawberries, sliced (optional), 1 sprig fresh mint, leaves picked (optional)',
    recipe_steps: 'Using a long serrated knife or bread knife, slice angel food cake into 3 equal horizontal layers. Place the bottom layer onto a freezer-proof plate., Remove packaging from the ice cream and slice about 1-inch thick. Working quickly, place ice cream slices on the bottom cake layer, filling the gaps with ice cream and leaving the center unfilled. Lightly press the ice cream pieces together to form a solid layer the same size as the cake layer. Repeat with the second cake layer and remaining ice cream. Top with the final layer of cake and freeze until the ice cream is firm again, about 1 hour., Frost the entire cake with whipped topping. Garnish with fresh strawberry slices and mint. Serve immediately.',
    category: 'Dessert',
    user_id: 3
  },
  {
    title: 'Cardamom Maple Salmon',
    ingredients: '1 ½ teaspoons salt, 1 teaspoon paprika,1 teaspoon ground cardamom, 1 teaspoon ground coriander, ½ teaspoon ground black pepper, ¼ cup grapeseed oil, 2 tablespoons maple syrup, 1 (2 pound) salmon fillet, cut into 3-inch pieces',
    recipe_steps: 'Stir salt, paprika, cardamom, coriander, and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined., Preheat a non-stick frying pan over medium-high heat, about 350 degrees F (175 degrees C)., Dredge salmon pieces through the maple syrup mixture until evenly coated on all sides., Cook salmon in the preheated pan until fish flakes easily with a fork, 5 to 7 minutes per side.',
    category: '',
    user_id: 1
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 6
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 4
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 7
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 8
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 5
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 9
  },
  {
    title: '',
    ingredients: '',
    recipe_steps: '',
    category: '',
    user_id: 10
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;