const addtodb = (item) => {
  const db = getDb();
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  saveToDb(db);
};
const removeFromDb = (item) => {
  const removeDb = getDb();
  delete removeDb[item];
  saveToDb(removeDb)
};
const saveToDb = (db) => {
  const dbJson = JSON.stringify(db);
  localStorage.setItem("shopping-cart", dbJson);
};
const getDb = () => {
  let savedDb = localStorage.getItem("shopping-cart");
  savedDb = JSON.parse(savedDb);

  return savedDb;
};
