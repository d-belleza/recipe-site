// function can still be edited based on how html is written since dashboard has not yet been created

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    // splits ingredients & steps by the comma and puts into an array
    const ingredients = document.querySelector('input[name="ingredients"]').value.split(",");
    const recipe_steps = document.querySelector('input[name="recipe-steps"]').value.split(",");
    const image_url = document.querySelector('input[name="post-url"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);
  