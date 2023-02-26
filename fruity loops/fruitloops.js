// array fruits has the elements to be evaluated. Their values are strings( one of the primitive data types)// 

const fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"];

// this is a for in loop through the array operation. It will iterate through the array fruits and display all strings on the console  // 
for (const index in fruits) {
  const fruit = fruits[index];
console.log(fruits[index])
  
  // firstletter const is set to evaluate the first letters on each string from the array fruits(charAt(0), and then put the first letter to lowecase so the letters can be evaluated on the for loop below // 
  const firstLetter = fruit.charAt(0).toLowerCase();

  // the constant startsWithVowel(which will be later used as an argument) is equal to the vowels aeiou.includes(firstletter)
  const startsWithVowel = "aeiou".includes(firstLetter);
  
  // index starts at 0 = apple for the loop below //
  let vowels = 0;
  let consonants = 0;

  // for loop iterating the array . The char variable means that the loop will check each letter. on the else if part there is a char = !== which means if not equal to a space. It will also checck the spaces on the strings as they also count as characters // 
  for (const char of fruit.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vowels++;
    } else if (char !== " ") { 
      consonants++;
    }
  }

  // Print the results on the console. string interpolations for the quantity of vowels, consonants in each fruit. There are 2 console logs because some fruits starts with vowels and some start with consonants. // 
  if (startsWithVowel) {
    console.log(`There are ${vowels} vowels and ${consonants} consonants in an ${fruit}.`);
  } else {
    console.log(`There are ${vowels} vowels and ${consonants} consonants in a ${fruit}.`);
  }
}



