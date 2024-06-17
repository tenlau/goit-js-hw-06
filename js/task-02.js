const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Get the reference to the ul#ingredients element
const ingredientsList = document.getElementById('ingredients');

// Create a document fragment to hold the list items
const fragment = document.createDocumentFragment();

// Loop through the ingredients array
ingredients.forEach(ingredient => {
  // Create a new <li> element
  const listItem = document.createElement('li');
  
  // Set the text content to the ingredient name
  listItem.textContent = ingredient;
  
  // Add the class 'item' to the <li> element
  listItem.classList.add('item');
  
  // Append the <li> to the fragment
  fragment.appendChild(listItem);
});

// Append the fragment to the ul#ingredients in a single operation
ingredientsList.appendChild(fragment);
