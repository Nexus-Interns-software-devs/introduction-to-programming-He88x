
// Complete 15 coding challenges using arrays, objects, and sets:

// ### Array Challenges (5)
// 1. Find the missing number in a sequence
let arr = [1, 2, 3, 5, 6];
function findMissingNumber(arr) {
  const n = arr.length + 1; // Total numbers including the missing one
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
// 2. Find second largest number
let numbers = [10, 5, 8, 12, 3];
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}
// 3. Rotate array by N positions
function rotateArray(arr, n) {
  n = n % arr.length;
  return [...arr.slice(-n), ...arr.slice(0, -n)];
}
// 4. Flatten nested array
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
// 5. Group array items by property
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
function groupByProperty(arr, property) {
  return arr.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
// ### Object/Dictionary Challenges (5)
// 6. Count character frequency in string
function countCharacterFrequency(str) {
  return str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
// 7. Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// 8. Convert array to object
function convertArrayToObject(arr, keyProperty) {
  return arr.reduce((acc, obj) => {
    acc[obj[keyProperty]] = obj;
    return acc;
  }, {});
}
// 9. Count vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}
// 10. Group students by grade
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" }
];

function groupStudentsByGrade(studentsArray) {
  return studentsArray.reduce((acc, student) => {
    const key = student.grade;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(student);
    return acc;
  }, {});
}

// ### Set Challenges (3)
// 11. Find intersection of two arrays
function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}
// 12. Find union of two arrays
function findUnion(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1, ...set2];
}
// 13. Find difference of two arrays
function findDifference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

// ### Mixed Challenges (2)
// 14. Implement basic phone book (object + array)
let phoneBook = {};
function addContact(name, phone) {
  phoneBook[name] = phone;
}
// 15. Shopping cart with quantities (object + methods)
let shoppingCart = {};
function addItem(item, quantity) {
  if (shoppingCart[item]) {
    shoppingCart[item] += quantity;
  } else {
    shoppingCart[item] = quantity;
  }
}
