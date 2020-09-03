const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Golden Chicken Tenders',
    ingredients: '1 (9 ounce) package chicken tenderloins, ½ cup finely crushed dry stuffing mix, 2 tablespoons melted butter',
    recipe_steps: 'Preheat oven to 350 degrees F (175 degrees C) Line a 9x13 inch baking dish with foil. Rinse and pat dry the chicken and place in the baking dish.',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F176417.jpg',
    user_id: 2
  },
  {
    title: 'Easy No-Bake Strawberry Ice Cream Cake',
    ingredients: '1 (10 inch) prepared angel food cake, 2 pints strawberry ice cream, 1 (8 ounce) container thawed frozen whipped topping, 6 large fresh strawberries',
    recipe_steps: 'Using a long serrated knife or bread knife slice angel food cake into 3 equal horizontal layers. Place the bottom layer onto a freezer-proof plate.',
    category: 'Dessert',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6877011.jpg',
    user_id: 3
  },
  {
    title: 'Cardamom Maple Salmon',
    ingredients: '1 ½ teaspoons salt, 1 teaspoon paprika,1 teaspoon ground cardamom, 1 teaspoon ground coriander, ½ teaspoon ground black pepper, ¼ cup grapeseed oil',
    recipe_steps: 'Stir salt paprika cardamom coriander and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined.',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1122495.jpg',
    user_id: 1
  },
  {
    title: 'Strawberry Bruschetta',
    ingredients: '24 slices French baguette, 1 tablespoon butter softened, 2 cups chopped fresh strawberries, ¼ cup white sugar',
    recipe_steps: 'Preheat your ovens broiler. Spread a thin layer of butter on each slice of bread. Arrange bread slices in a single layer on a large baking sheet.',
    category: 'Appetizers',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1281203.jpg',
    user_id: 6
  },
  {
    title: 'Fluffy French Toast',
    ingredients: '¼ cup all-purpose flour, 1 cup milk, 1 pinch salt, 3 large eggs eggs, ½ teaspoon ground cinnamon, 1 teaspoon vanilla extract, 1 tablespoon white sugar, 12 thick slices bread',
    recipe_steps: 'Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt eggs cinnamon vanilla extract and sugar until smooth., Heat a lightly oiled griddle or frying pan over medium heat. ',
    category: 'Breakfast',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F672031.jpg',
    user_id: 4
  },
  {
    title: 'Cheesy Ham and Hash Brown Casserole',
    ingredients: '1 (32 ounce) package frozen hash brown potatoes, 8 ounces cooked diced ham, 2 (10.75 ounce) cans condensed cream of potato soup',
    recipe_steps: 'Preheat oven to 375 degrees F (190 degrees C). Lightly grease a 9x13 inch baking dish., In a large bowl mix hash browns ham cream of potato soup sour cream and Cheddar cheese. Spread evenly into prepared dish. ',
    category: 'Breakfast',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F843087.jpg',
    user_id: 7
  },
  {
    title: 'Bacon and Date Appetizer',
    ingredients: '1 (8 ounce) package pitted dates, 4 ounces almonds, 1 pound sliced bacon',
    recipe_steps: 'Preheat the broiler., Slit dates. Place one almond inside each date. Wrap dates with bacon using toothpicks to hold them together., Broil 10 minutes, or until bacon is evenly brown and crisp.',
    category: 'Appetizers',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F695887.jpg',
    user_id: 8
  },
  {
    title: 'Chocolate Covered Strawberries',
    ingredients: '16 ounces milk chocolate chips, 2 tablespoons shortening, 1 pound fresh strawberries with leaves',
    recipe_steps: 'In a double boiler melt the chocolate and shortening stirring occasionally until smooth. ',
    category: 'Dessert',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3976072.jpg',
    user_id: 5
  },
  {
    title: 'Mo Bros Burgers',
    ingredients: '1 pound ground beef, ¼ cup Worcestershire sauce, ¼ cup Italian bread crumbs, ½ tablespoon steak sauce, ½ tablespoon liquid smoke flavoring, 4 slices sharp Cheddar cheese, 4 eaches hamburger buns, split',
    recipe_steps: 'Preheat an outdoor grill for medium-high heat and lightly oil the grate., Mix together in a bowl using your hands.  ',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6310095.jpg',
    user_id: 5
  },
  {
    title: 'Campfire Pepperoni Pizza',
    ingredients: '1 pound refrigerated pizza dough, ¼ cup pizza sauce, ½ cup shredded mozzarella cheese, ½ cup sliced pepperoni',
    recipe_steps: 'Place pizza stone on grill directly over wood fire. Place it on the pizza stone and cook 10 minutes on one side until golden.',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1130239.jpg',
    user_id: 5
  },
  {
    title: 'Slow Cooker Buffalo Chicken Dip',
    ingredients: '2 8 ounce skinless, boneless chicken breasts, ½ teaspoon salt, ¼ teaspoon ground black pepper, ¼ teaspoon garlic powder, 1 8 ounce package reduced-fat cream cheese, 1 8 ounce container sour cream',
    recipe_steps: 'Season chicken breasts with salt pepper and garlic powder. Place in the slow cooker and cover with the lid. ',
    category: 'Appetizers',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6250130.jpg',
    user_id: 5
  },
  {
    title: 'Wacky Cake VIII',
    ingredients: '1 ½ cups all-purpose flour, 1 cup white sugar, 4 tablespoons unsweetened cocoa powder, 1 teaspoon baking soda, ½ teaspoon salt, 1 teaspoon vanilla extract, 1 tablespoon cider vinegar',
    recipe_steps: 'Sift flour sugar salt soda and cocoa together into an 8x8 inch ungreased cake pan. Make three depressions. ',
    category: 'Dessert',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2540121.jpg',
    user_id: 5
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;