let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (const key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
