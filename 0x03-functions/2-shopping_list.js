/*
- A function that makes a shopping list with defaault parameters.
*/

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
//Implementation method 1
makeShoppingList();
//Implementation method 2
makeShoppingList((item1 = "Beef"), (item2 = "Fish"), (item3 = "Banana"));

//Implementation method 3
makeShoppingList("Beef", "Banana", "Fish");
