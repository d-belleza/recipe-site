const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Golden Chicken Tenders',
    ingredients: '1 (9 ounce) package chicken tenderloins, ½ cup finely crushed dry stuffing mix, 2 tablespoons melted butter',
    recipe_steps: 'Preheat oven to 350 degrees F (175 degrees C) Line a 9x13 inch baking dish with foil. Rinse and pat dry the chicken and place in the baking dish., Combine the stuffing mix with the melted butter or margarine. Place stuffing mixture on top of the chicken tenders., Bake in the preheated oven for 40 minutes.',
    category: 'Entrée',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'Easy No-Bake Strawberry Ice Cream Cake',
    ingredients: '1 (10 inch) prepared angel food cake, 2 pints strawberry ice cream, 1 (8 ounce) container thawed frozen whipped topping, 6 large fresh strawberries, sliced (optional), 1 sprig fresh mint, leaves picked (optional)',
    recipe_steps: 'Using a long serrated knife or bread knife slice angel food cake into 3 equal horizontal layers. Place the bottom layer onto a freezer-proof plate., Remove packaging from the ice cream and slice about 1-inch thick. Working quickly place ice cream slices on the bottom cake layer filling the gaps with ice cream and leaving the center unfilled. Lightly press the ice cream pieces together to form a solid layer the same size as the cake layer. Repeat with the second cake layer and remaining ice cream. Top with the final layer of cake and freeze until the ice cream is firm again, about 1 hour., Frost the entire cake with whipped topping. Garnish with fresh strawberry slices and mint. Serve immediately.',
    category: 'Dessert',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 3
  },
  {
    title: 'Cardamom Maple Salmon',
    ingredients: '1 ½ teaspoons salt, 1 teaspoon paprika,1 teaspoon ground cardamom, 1 teaspoon ground coriander, ½ teaspoon ground black pepper, ¼ cup grapeseed oil, 2 tablespoons maple syrup, 1 (2 pound) salmon fillet, cut into 3-inch pieces',
    recipe_steps: 'Stir salt paprika cardamom coriander and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined., Preheat a non-stick frying pan over medium-high heat about 350 degrees F (175 degrees C)., Dredge salmon pieces through the maple syrup mixture until evenly coated on all sides., Cook salmon in the preheated pan until fish flakes easily with a fork 5 to 7 minutes per side.',
    category: 'Entrée',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 1
  },
  {
    title: 'Strawberry Bruschetta',
    ingredients: '24 slices French baguette, 1 tablespoon butter softened, 2 cups chopped fresh strawberries, ¼ cup white sugar',
    recipe_steps: 'Preheat your ovens broiler. Spread a thin layer of butter on each slice of bread. Arrange bread slices in a single layer on a large baking sheet., Place bread under the broiler for 1 to 2 minutes just until lightly toasted. Spoon some chopped strawberries onto each piece of toast then sprinkle sugar over the strawberries., Place under the broiler again until sugar is caramelized, 3 to 5 minutes. Serve immediately.',
    category: 'Appetizers',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 6
  },
  {
    title: 'Fluffy French Toast',
    ingredients: '¼ cup all-purpose flour, 1 cup milk, 1 pinch salt, 3 large eggs eggs, ½ teaspoon ground cinnamon, 1 teaspoon vanilla extract, 1 tablespoon white sugar, 12 thick slices bread',
    recipe_steps: 'Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt eggs cinnamon vanilla extract and sugar until smooth., Heat a lightly oiled griddle or frying pan over medium heat., Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot.',
    category: 'Breakfast',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 4
  },
  {
    title: 'Cheesy Ham and Hash Brown Casserole',
    ingredients: '1 (32 ounce) package frozen hash brown potatoes, 8 ounces cooked diced ham, 2 (10.75 ounce) cans condensed cream of potato soup, 1 (16 ounce) container sour cream, 2 cups shredded sharp Cheddar cheese, 1 ½ cups grated Parmesan cheese',
    recipe_steps: 'Preheat oven to 375 degrees F (190 degrees C). Lightly grease a 9x13 inch baking dish., In a large bowl mix hash browns ham cream of potato soup sour cream and Cheddar cheese. Spread evenly into prepared dish. Sprinkle with Parmesan cheese. Bake 1 hour in the preheated oven or until bubbly and lightly brown. Serve immediately.',
    category: 'Breakfast',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 7
  },
  {
    title: 'Bacon and Date Appetizer',
    ingredients: '1 (8 ounce) package pitted dates, 4 ounces almonds, 1 pound sliced bacon',
    recipe_steps: 'Preheat the broiler., Slit dates. Place one almond inside each date. Wrap dates with bacon using toothpicks to hold them together., Broil 10 minutes, or until bacon is evenly brown and crisp.',
    category: 'Appetizers',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Chocolate Covered Strawberries',
    ingredients: '16 ounces milk chocolate chips, 2 tablespoons shortening, 1 pound fresh strawberries with leaves',
    recipe_steps: 'In a double boiler melt the chocolate and shortening stirring occasionally until smooth. Holding them by the toothpicks dip the strawberries into the chocolate mixture., Insert toothpicks into the tops of the strawberries., Turn the strawberries upside down and insert the toothpick into styrofoam for the chocolate to cool.',
    category: 'Dessert',
    image_url: 'https://nasa.gov/donec.json',
    user_id: 5
  },
  {
    title: 'Mo Bros Burgers',
    ingredients: '1 pound ground beef, ¼ cup Worcestershire sauce, ¼ cup Italian bread crumbs, ½ tablespoon steak sauce, ½ tablespoon liquid smoke flavoring, 4 slices sharp Cheddar cheese, 4 eaches hamburger buns, split',
    recipe_steps: 'Preheat an outdoor grill for medium-high heat and lightly oil the grate., Mix together in a bowl using your hands. Form mixture into 4 hamburger patties., Grill burgers for 5 minutes on the preheated grill. Flip and grill to your desired degree of doneness., Remove burgers from grill and cover each with a slice of Cheddar cheese. Serve on hamburger buns. ',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6310095.jpg',
    user_id: 5
  },
  {
    title: 'Campfire Pepperoni Pizza',
    ingredients: '1 pound refrigerated pizza dough, ¼ cup pizza sauce, ½ cup shredded mozzarella cheese, ½ cup sliced pepperoni',
    recipe_steps: 'Place pizza stone on grill directly over wood fire. Place it on the pizza stone and cook 10 minutes on one side until golden., mozzarella cheese evenly on top of the sauce followed by the pepperoni slices. Place uncooked side down, back on the pizza stone. Cover with a foil tent and cook until cheese has melted.',
    category: 'Entrée',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1130239.jpg',
    user_id: 5
  },
  {
    title: 'Slow Cooker Buffalo Chicken Dip',
    ingredients: '2 8 ounce skinless, boneless chicken breasts, ½ teaspoon salt, ¼ teaspoon ground black pepper, ¼ teaspoon garlic powder, 1 8 ounce package reduced-fat cream cheese, 1 8 ounce container sour cream, ½ cup Buffalo wing sauce, ½ cup shredded sharp Cheddar cheese',
    recipe_steps: 'Season chicken breasts with salt pepper and garlic powder. Place in the slow cooker and cover with the lid. Cook on Low until chicken is cooked through about 3 hours. Drain accumulated juices. Shred chicken using a hand mixer. Add cream cheese sour cream Buffalo wing sauce and Cheddar cheese. Cook on Low for 1 more hour. Stir to combine.',
    category: 'Appetizers',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6250130.jpg',
    user_id: 5
  }

];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;