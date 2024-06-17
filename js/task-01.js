const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const header = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  
  console.log(`\nCategory: ${header}`);
  console.log(`Elements: ${elementsCount}`);
});
