import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

console.log("start");
const db = await sqlite.open({
    filename: "./101.db",
    driver: sqlite3.Database
});

await db.migrate();

//create a function that returns all the greetings from the db
 export async function getGreetings(){
  const result = await db.all(`SELECT * FROM greetings`);
  return result;
}

const result = await getGreetings();
console.log(result);

//Create a function that delete a specific greeting
export async function deleteGreeting(id){
  const sql = `DELETE FROM greetings WHERE id = ?`;
  await db.run(sql, [id]);
}
// console.log("=====================")
// await deleteGreeting(56);
// await deleteGreeting(57);
// console.log("=====================")

// const result2 = await getGreetings()
// console.log(result2);


//Create a function that adds a new greeting
export async function addGreeting(language, greeting){
  const sql = `INSERT INTO greetings (language, greeting) VALUES (?, ?)`
  await db.run(sql, [language, greeting]);
}

// const result1 = await getGreetings()
// console.log(result1);

// console.log("=====================")
// await addGreeting('IsiZulu', 'Sawubona');
// await addGreeting('English', 'Hello');
// console.log("=====================")

// const result2 = await getGreetings()
// console.log(result2);

//Create a function that updates a given greeting
export async function updateGreeting(language, greeting, id){
  const sql = `UPDATE greetings SET language = ?, greeting = ? WHERE id = ?`;
  await db.run(sql, [language, greeting, id])
}

// const result1 = await getGreetings()
// console.log(result1);

// console.log("=====================")
// await updateGreeting('Sepedi', 'Thobela', 4);
// console.log("=====================")

// const result2 = await getGreetings()
// console.log(result2);




//call the query using a promise
// db.all(`SELECT * FROM greetings`)
//   .then(result => {
//     console.log(result)
//   })

  const countResult = await db.get(`SELECT COUNT(*) AS count FROM greetings`);
  console.log(countResult);

console.log("end");