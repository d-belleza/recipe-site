// function can still be edited based on how html is written since dashboard has not yet been created

async function newFormHandler(event) {
    event.preventDefault();
    console.log('submit is working')
  
    const title = document.querySelector('#title').value;
    // splits ingredients & steps by the comma and puts into an array
    const ingredients = document.querySelector('#ingredients').value.split(",");
    const recipe_steps = document.querySelector('#steps').value.split(",");
    const image_url = document.querySelector('#image_link').value;
    
    // how do we grab the category?

    console.log('title', title);
    console.log('ingredients', ingredients);
    console.log('steps', recipe_steps);
    console.log('url', image_url);

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ingredients,
        recipe_steps, 
        image_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
  