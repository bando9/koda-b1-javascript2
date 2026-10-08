// Declaratif Function
function createProfile(name, age = 18) {
  return {
    fullName: name,
    age,
    category: age >= 18 ? "Dewasa" : "Anak-anak",
  };
}

console.log(createProfile("Budi", 20));

// Arrow Function
const addProfile = (name, age = 18) => {
  const category = age >= 18 ? "Dewasa" : "Anak-anak";
  return {
    name,
    age,
    category,
  };
};

console.log(addProfile("Bando", 27));

// Anonymous
const newProfile = function (name, age = 18) {
  const category = age >= 18 ? "Dewasa" : "Anak-anak";
  return {
    name,
    age,
    category,
  };
};

console.log(newProfile("Kayla", 8));
