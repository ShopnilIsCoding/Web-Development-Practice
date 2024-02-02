var friends = [1,2,3,4];
const n=5;
var arr = new Array(n);
arr.push(50);
arr.shift(0);
arr.shift(10);
arr.shift(20);
var joinedFriends = friends.join('+');
console.log(joinedFriends);
console.log(arr);
console.log(friends);
console.log(friends.indexOf(3)+'00');
friends.unshift(0);
console.log(friends);
console.log(Array.isArray(arr));
var concat=friends.concat(joinedFriends);
console.log(concat);
console.log(concat.slice(4,6));
console.log(concat.splice(4,2));
console.log(concat);

var fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


console.log(fruits[2]); 


fruits[1] = 'jambura';


console.log(fruits);
var books = ['The Great Gatsby', 'To Kill a Mockingbird', 'JavaScript: The Good Parts', 'Harry Potter and the Sorcerer\'s Stone', 'The Hobbit'];

var containsJavaScriptBook = books.includes('JavaScript: The Good Parts');

if (containsJavaScriptBook) {
  console.log('The array contains a JavaScript book.');
} else {
  console.log('The array does not contain a JavaScript book.');
}

