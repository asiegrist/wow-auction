console.log('test')
const fs = require('fs')
const getItemRecipes = require('./utils/getItemRecipes.js')
const getSpells = require('./utils/getSpells.js')
const getItems = require('./utils/getItems.js')
const getRecipeItems = require('./utils/getRecipeItems.js')

// needed items to craft an item details (recipes content)
fs.readFile('./data/DB/profession.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  // console.log(parsedData);

  const itemRecipes = getItemRecipes(parsedData);
  const spells = getSpells(parsedData);

  fs.writeFile('./data/generatedDB/itemRecipes.json', JSON.stringify(itemRecipes), 'utf8', (err) => {
    if (err) throw err;
  });

  fs.writeFile('./data/generatedDB/spells.json', JSON.stringify(spells), 'utf8', (err) => {
    if (err) throw err;
  });
});

// all items
fs.readFile('./data/DB/item.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  // console.log(parsedData);

  const items = getItems(parsedData);

  fs.writeFile('./data/generatedDB/items.json', JSON.stringify(items), 'utf8', (err) => {
    if (err) throw err;
  });
});

// needed items to craft an item details (recipes content)
fs.readFile('./data/DB/recipe.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  // console.log(parsedData);

  const recipes = getRecipeItems(parsedData);

  fs.writeFile('./data/generatedDB/recipes.json', JSON.stringify(recipes), 'utf8', (err) => {
    if (err) throw err;
  });
});