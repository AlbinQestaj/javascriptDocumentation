// const dogsKate = [4,1,15,8,3];
// const dogsJulia = [3, 5, 2, 12, 7];

// function checkDogs(arr1, arr2){
//   updatedArr = arr2.slice(1,3);

//   totalArr = [...arr1, ...updatedArr];

//   totalArr.forEach(function(age, i){
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   })
// }

// checkDogs(dogsKate, dogsJulia);

// const num = [1,2,3]
// num.map(v => v * 2);

// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()
// Constructor function implementation
// const Person = function(name, age, country){
//   this.name = name;
//   this.age = age;
//   this.country = country;
// };
// Person.prototype.personDetails = function(){
//   console.log(`My name is ${this.name}, i'm ${this.age} year's old and i come from ${this.country}`)
// };

// const albin = new Person('Albin', 25, 'Kosovo');
// const ardi = new Person('Ardi', 27, 'Albania');

// ardi.personDetails();

// ES6 Class implementation
// class Person{
//   constructor(name, age, country){
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   personDetails(){
//     console.log(`My name is ${this.name}, i'm ${this.age} year's old and i come from ${this.country}`)
//   }
// }
// const albin = new Person('Albin', 25, 'Kosovo');
// const ardi = new Person('Ardi', 27, 'Albania');
// albin.personDetails();

// class Rectangle{
//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   }
//   calcArea(){
//     return this.width * this.height;
//   }
//   calcPerimeter(){
//     return 2 * this.width + 2 * this.height;
//   }
// }

// const rec = new Rectangle(5, 4);
// const area = rec.calcArea();
// const perimeter = rec.calcPerimeter();

// const Rectangle = function(width, height){
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.calcArea = function(){
//   return this.width * this.height;
// } 

// const rec = new Rectangle(3,4)
// const area = rec.calcArea();
// console.log(area)


// class Vehicle {
//   constructor(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   diplayVehicle(){
//     console.log(`This is a ${this.make}, model ${this.model} manifacturet at ${this.year}`)
//   }
// }
// class Car extends Vehicle{
//   constructor(make, model, year, doors){
//     super(make, model, year);
//     this.doors = doors;
//   }

//   diplayVehicle(){
//     super.diplayVehicle();
//     console.log(`Doors: ${this.doors}`)
//   }
// }

// const myCar = new Car('Honda', 'Civic', 2020, 4);
// myCar.diplayVehicle()

// const BankAccount = function(accNum, balance){
//   this.accNumber = accNum;
//   this.balance = balance;

//   deposit = function(amount){
//     this.balance += amount;
//   };

//   withdraw = function(amount){
//     this.balance -= amount;
//   };
// };

// BankAccount.prototype.deposit = function(amount){
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function(amount){
//   this.balance -= amount;
// };

// const account1 = new BankAccount(123456789, 1000);
// const account2 = new BankAccount(1234598745, 1200);

// // console.log(account1.__proto__ === BankAccount.prototype)
// // account1.deposit(100);
// // account1.withdraw(200);

// console.log(account1)

// class BankAccount{
//   constructor(accNumber, balance){
//     this.accNumber = accNumber;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }

//   width() {
//     return this.balance
//   }
// };

// const account1 = new BankAccount(123456789, 1000);
// account1.deposit(200)
// console.log(account1)

// const Shape = function(){}
// Shape.prototype.calcArea = function(width, height){
//   return width * height;
// };

// const Rectangle = function(width, height){
//   Shape.call(this);
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype = Object.create(Shape.prototype);\

// Rectangle.prototype = Object.apply

// function Shape(){};

// Shape.prototype.calcArea = function(){
//   console.log("This method will be owervritten")
// };
// function Circle(radius){
//   Shape.call(this);
//   this.radius = radius;
// };
// function Triangle(base, height){
//   Shape.call(this);
//   this.base = base;
//   this.height = height;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// Circle.prototype.calcArea = function(){
//   return Math.PI * this.radius * this.radius;
// };

// Triangle.prototype.calcArea = function(){
//   return (this.base * this.height) / 2;
// }

// const aShape = new Shape();
// const aCircle = new Circle(5)

// aShape.calcArea()
// console.log(aCircle.calcArea())

// class Employee{
//   constructor(name, salary){
//     this.name = name;
//     this.salary = salary;
//   }

//   calcAnnualSalary(){
//     return this.salary * 12;
//   }
// }

// class Manager extends Employee{
//   constructor(name, salary, department){
//     super(name, salary);
//     this.department = department;
//   }
//   calcAnnualSalary(){
//     const baseSalary = super.calcAnnualSalary();
//     const bonus = 0.1;
//     return (baseSalary * bonus) + baseSalary;
//   }
// }

// const Albin = new Manager('Albin', 1000, 'Rhenum');
// console.log(Albin.calcAnnualSalary())




// Parent class Employee
// function Employee(name, salary){
//   this.name = name;
//   this.salary = salary;
// };
// Employee.prototype.calcAnnualSalary = function(){
//   return this.salary * 12;
// }
// // Child class Manager
// function Manager(name, salary, department){
//   Employee.call(this, name, salary);
//   this.department = department;
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.calcAnnualSalary = function(){
//   const baseSalary = Employee.prototype.calcAnnualSalary.call(this);
//   const bonus = 0.1;
//   return (baseSalary * bonus) + baseSalary;
// }

// const Albin = new Manager('Albin', 1000, 'Rhenum');
// console.log(Albin.calcAnnualSalary())

// class Book{
//   constructor(title, author, pubYear){
//     this.title = title;
//     this.author = author;
//     this.pubYear = pubYear;
//   }

//   displayBook(){
//     console.log(`${this.title} was written by ${this.author} and was published in ${this.pubYear}`)
//   }
// }

// class Ebook extends Book{
//   constructor(title, author, pubYear, price){
//     super(title, author, pubYear);
//     this.price = price;
//   }
//   displayBook(){
//     console.log(`${this.title} was written by ${this.author} and was published in ${this.pubYear}, priced at $${this.price}`)
//   }
// }

// const tunnel = new Ebook('The tunnel', "Albin", 1998, 30);
// tunnel.displayBook()

// class Animal{
//   constructor(species, sound){
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound(){
//     console.log(`Ham ham ham`)
//   }
// }

// class Dog extends Animal{
//   constructor(species, sound, color){
//     super(species, sound);
//     this.color = color;
//   }

//   makeSound(){
//     console.log(`Dogs bark: ${this.sound}`)
//   }
// }

// const doggie = new Dog('Dog', 'ham ham ham', 'ginger')
// doggie.makeSound()

// class Bank{
//   constructor(names, branches){
//     this.names = names;
//     this.branches = branches;
//   }
//   addBranch(branch){
//     return this.branches.push(branch);
//   }
//   displayBranches(){
//     this.branches.forEach((item, i)=> {
//       console.log(`${i + 1}: ${item}`)
//     });
//   }
//   removeBranch(branch){
//     return this.branches = this.branches.filter(item => item !== branch);
//   }
// }

// const BPB = new Bank("Banka Ekonomike e Kosoves", ["Pejton", "Lakrishte"]);
// BPB.addBranch('Qafa')
// BPB.addBranch('New Born')
// BPB.removeBranch("Qafa")
// BPB.displayBranches()

// class Product{
//   constructor(ID, name, price){
//     this.ID = ID;
//     this.name = name;
//     this.price = price;
//   }
//   calcTotalPrice(quantity){
//     return quantity * this.price;
//   }
// }

// class PersonalCareProduct extends Product{
//   constructor(ID, name, price, warrentyPeriod){
//     super(ID, name, price);
//     this.warrentyPeriod = warrentyPeriod;
//   }

//   calcTotalPrice(quantity){
//     const totalPrice = super.calcTotalPrice(quantity);
//     return totalPrice;
//   }
// }

// const myProduct = new PersonalCareProduct(1568, "Taft", 20, '3 months');
// console.log(myProduct.calcTotalPrice(3))

// class BankAccount{
//   constructor(accNumber, accHolderName, balance){
//     this.accNumber = accNumber;
//     this.accHolderName = accHolderName;
//     this.balance = balance;
//   }

//   deposit(amount){
//     return this.balance += amount;
//   }

//   withdraw(amount){
//     return this.balance -= amount;
//   }

//   transfer(amount, sendingAcc, receivingAcc){
//     const newSendingAccBalance = sendingAcc.balance - amount;
//     const newReceivingAccBalance = receivingAcc.balance + amount;

//     console.log(`Transacting $${amount} from ${sendingAcc.accHolderName} to ${receivingAcc.accHolderName}`);
//     console.log(`${sendingAcc.accHolderName}'s new balance: ${newSendingAccBalance}`);
//     console.log(`${receivingAcc.accHolderName}'s new balance: ${newReceivingAccBalance}`);
//   }
// }

// const AlbinsAcc = new BankAccount(569874, "Albin Qestaj", 1200);
// const AltinsAcc = new BankAccount(645978, "Altin Sadrija", 2000);
// // console.log(AlbinsAcc.deposit(100))

// AlbinsAcc.transfer(100, AlbinsAcc, AltinsAcc);

// class University{
//   constructor(universityName, departments){
//     this.universityName = universityName;
//     this.departments = departments;
//   }
//   addDepartment(uniToAdd){
//     this.departments.push(uniToAdd);
//     return this.departments;
//   }

//   removeDepartment(uniToRemove){
//     const filtered = this.departments.filter(item => item !== uniToRemove);
//     return filtered;
//   }
//   displayAllDepartments(){
//     this.departments.forEach((item, i) => {
//       console.log(`${i + 1}: ${item}`)
//     });
//   }
// }

// const uniHasanPrishtina = new University("Hasan Prishtina", ["Physics", "Maths", "Geography", "CS"]);
// // uniHasanPrishtina.displayAllDepartments();
// console.log(uniHasanPrishtina.addDepartment('Literature'));
// console.log(uniHasanPrishtina.removeDepartment('Physics'));

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result)


// class Catalogue{
//   constructor(title, author, isbn){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }

//   adBook(title, author, isbn){

//   }

//   removeBook(book){

//   }
//   listBooks(isbn){

//   }
// }

// const book1 = new Catalogue("book1", "Altin Sadrija", 564298);
// const book2 = new Catalogue("book2", "Altin Sadrija", 554511);
// const book3 = new Catalogue("book3", "Altin Sadrija", 564293);
// const book4 = new Catalogue("book4", "Altin Sadrija", 564294);


// console.log(book1)

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     // Implement this method to add a book to the library.
//     this.books.push(book);
//   }

//   removeBook(isbn) {
//     // Implement this method to remove a book from the library by its ISBN.
//     this.books = this.books.filter(item => item.isbn !== isbn);
//   }

//   listBooks() {
//     // Implement this method to list all the books in the library.
//     this.books.forEach((item, i) => {
//       console.log(`${i + 1}: ${item.title}`)
//     });
//   }
// }

// // Example usage:
// const library = new Library();
// const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-7");
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");

// library.addBook(book1);
// library.addBook(book2);

// console.log("All books in the library:");
// library.listBooks();

// library.removeBook("978-0-316-76948-7");
// console.log("Books after removal:");
// library.listBooks();


// const str = 'thequickbrownfoxjumpsoverthelazydog';
// const uniqueArr = [...new Set(str)];
// const originalArr = str.split('');
// console.log(uniqueArr)

// const obj = {};
// uniqueArr.forEach((item, i) => {
//   const count = originalArr.filter(item => item === uniqueArr[i]).length;
//   obj[item] = count;
// });
// console.log(obj)


// const points = new Array(2,3,4);
// const point = new Array(4);
// console.log(points)
// console.log(point)

// const student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
// };

// const len = student.length;
// console.log(len)

// console.log(student);
// delete student.rollno;
// console.log(student);

// const objValues = Object.values(student).forEach((item, i) => console.log(`${i + 1}: ${item}`));
// const objKeys = Object.keys(student);
// const objEntries = Object.entries(student);

// console.log('objValues: ', objValues)
// console.log('objKeys: ', objKeys)
// console.log('objEntries: ', objEntries)

// const library = [ 
//   {
//       author: 'Bill Gates',
//       title: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       author: 'Steve Jobs',
//       title: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       author: 'Suzanne Collins',
//       title:  'Mockingjay: The Final Book of The Hunger Games', 
//       readingStatus: false
// }];

// library.forEach((book, i) => {
//   const {author, title, readingStatus} = book;
//   console.log(`${author} wrote ${title}, the current reading status is ${readingStatus}.`)
// });

// const str = "dog";
// const strArr = str.split('');
// const newArr = [];

// // console.log(strArr.slice(0,2))
// strArr.forEach((item, index) => {
//   for (i = index; i < strArr.length; i++){
//     newArr.push(strArr.slice(index, i + 1))
//   }
// });

// console.log(newArr);

// const obj = {
//   author: 'Steve Jobs',
//   title: 'Walter Isaacson',
//   readingStatus: true
// }
// const newObj = {}
// const objArr = Object.entries(obj).forEach(key => newObj[key[1]] = key[0]);

// console.log(newObj)

// const obj = {
//   author: 'Steve Jobs',
//   title: 'Walter Isaacson',
//   readingStatus: true
// }
// const properties = Object.keys(obj);
// console.log(properties)

// const obj = {
//   author: 'Steve Jobs',
//   title: 'Walter Isaacson',
//   readingStatus: true
// }

// function convert(obj) {
//   const objArr = Object.entries(obj);
//   let obj1 = {}
//   objArr.forEach(( value, key) => 
//   // console.log(value)
//   obj1[value[1]] = value[0]
//   ) 

//   return obj1
// }

// console.log(convert(obj))
// convert(obj)

// const originalObject = { a: 1, b: 2, c: 3 };

// const mappedObject = Object.fromEntries(
//   Object.entries(originalObject).map(([key, value]) => [value, key])
// );

// console.log(mappedObject); // { a: 2, b: 4, c: 6 }

// const keyValuePairs = [
//   ['prop1', 'value1'],
//   ['prop2', 'value2'],
//   ['prop3', 'value3']
// ];

// const myObject = Object.fromEntries(keyValuePairs);

// console.log(myObject);

// const data = { a: 1 };

// const isPlainObj = element => typeof element === 'object' && !Array.isArray(element) && element !== null;
// isPlainObj()

// const arr = string.split(' ').map(item => item.length);
// const maxVal = Math.max(...arr);
// const desiredString = arr.filter(item => item.length === maxVal)

// console.log(desiredString)

// const string = 'Web Development Tutorial';
// const letters = 6;

// const needed = string.split('').slice(0, letters).join('');
// console.log(needed)

// const str = "robin_singh@example.com";
// const [first, second] = str.split('@');

// console.log(first);

// const str = "JavaScript Exercises";
// const strArr = str
//               .split(" ")
//               .map(item => item[0].toLocaleUpperCase() + item.slice(1).toLocaleLowerCase())
//               .join('')

// console.log(strArr)


// const strArr = [[0,1],
//                  [1,0],
//                   [0,1],
//                    [1,0],
//                     [0,1],
//                      [1,0], [0,1], [1,0]];
// const SearchingChallenge = function(){

// }

// const strArr =  ["10111", 
//                  "10101", 
//                  "11101", 
//                  "11111"]
                 
// let count = 0;
// for (let i = 0; i < strArr.length; i++){
//   for (let j = 0; j < strArr[0].length; j++){
//     // check for holes horizontally
//     if(strArr[i][j] === '0' && strArr[i][j + 1] === '0'){
//       count++
//     } 
//     // check for holes vertically
//     if(strArr[i][j] === '0' && strArr[i + 1][j] === '0'){
//       count++
//     } 
//   }
// }


// const arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];
// function ArrayChallange(arr){
//   const sumDouble = arr.reduce((acc, val) => acc += val) * 2;
//   const sortArr = arr.sort((a, b) => a - b).slice(-2);
//   const biggestMultiple = sortArr[0] * sortArr[1];
//   return biggestMultiple > sumDouble ? 'false' : 'true';
// }
// console.log(ArrayChallange(arr))

// function invokeAfterDelay(callback){
//   setTimeout(callback, 3000)
// }

// function displayMessage(){
//   console.log('Hello world')
// }

// invokeAfterDelay(displayMessage)

// callback based function
// function callbackBasedFunction(arg1, arg2, callback){
//   setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0){
//       callback(null, result)
//     } else {
//       callback(new Error('Result is not odd!'), null);
//     }
//   }, 1000)
// }

// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// const generateRandNum = () => (Math.floor(Math.random() * 7) + 1)

// let randIndexArr = [];
// while (randIndexArr.length < color.length){
//   const randNum = generateRandNum();
//   randIndexArr.includes(randNum) ? '' : randIndexArr.push(color[randNum]);
// }

// console.log(randIndexArr);

// 7,8,9,10,11,12,13,14

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
// const arr = Array.from({ length: 100000000 }, (_, index) => index + 1);
// const findMidVal = (array) => {
//   if (array.length === 1) return [array[0]];

//   if (array.length % 2 === 1){
//     return [Math.ceil(array.length / 2)];
//   } else {
//     return [array[array.length / 2 - 1], array[array.length / 2]];
//   }
// }

// const binarySearch = (arr, val) => {
//   const mid = findMidVal(arr);
//   const isMidTheVal = mid.includes(val);

//   if (isMidTheVal){
//     const foundVal = mid.filter(item => item === val)
//     return console.log('I Found:', foundVal);
//   }

//   if (val > Math.max(...mid)){
//     const findIndex = arr.indexOf(Math.max(...mid))
//     const searchRight = arr.slice(findIndex + 1)
//     binarySearch(searchRight, val)
//   }

//   if (val < Math.min(...mid)){
//     const findIndex = arr.indexOf(Math.min(...mid))
//     const searchLeft = arr.slice(0, findIndex);
//     binarySearch(searchLeft, val);
//   }
// }
// binarySearch(arr, 5);
// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2,5,6];
// const m = 3;
// const n = 3;

// const merge = function(nums1, m, nums2, n) {
//    const newArr = nums1.filter(item => item !== 0);
//    nums1 = [];
//    nums1 = [...newArr, ...nums2]
//    console.log(nums1)
// };

// merge(nums1, m, nums2, n)

// const nums = [-1,0,3,5,9,12];
// var search = function(nums, target) {
//     let midIndex = Math.ceil(nums.length / 2) - 1;
//     let midVal = nums[midIndex]

//     if(target === midVal) return midIndex;

//     if(target > midVal) {
//       const result =  search(nums.slice(midIndex + 1), target);
//       // return result === -1 ? -1 : midIndex + 1 + result;
//       if (result !== -1) {
//         return midIndex + 1 + result;
//       }
//     }

//     else {
//       const result = search(nums.slice(0, midIndex + 1), target);
//       // return result !== -1 ? result : -1
//       if (result !== -1) {
//         return result;
//       }
//     }
//     return -1
// };

// // search(nums,14)
// console.log(search(nums,2))

// const nums = [-1,0,3,5,9,12];

// var search = function(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while(left <= right){
//     const mid = Math.floor((right + left) / 2);
//     const midVal = nums[mid]

//     if (midVal === target) {
//       return mid;
//     }
    
//     if (midVal < target) {
//       left = mid + 1;
//     }
    
//     if (midVal > target) {
//       right = mid - 1;
//     }
//   };
//   return -1;
// };

// console.log(search(nums, 2))
// const nums = [1,2,3,4,5,6,7];

// var rotate = function(nums, k) {
//   k = k % nums.length; // Handle cases where k is greater than the array length
//   const startRot = nums.length - k;
//   const secPart = nums.slice(startRot);

//   // const firstPart = nums.slice(0, startRot);
//   // const myArr = secPart.concat(firstPart);
//   // return nums = myArr;
// };


// // console.log(rotate(nums, 3))
// const nums = [0];
// var canJump = function(nums) {
//     // index = nums.length - 1
//     let index = 0;
//     while (index <= nums.length){
//       index += nums[index];

//       if(nums.length === 1) return true;
      
//       if(index >= nums.length){
//         return true;
//       };

//       if (nums[index] === 0) return false;
//     };
//     return false;
// };
// console.log(canJump(nums))

// var canJump = function(nums) {
//   let maxReach = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (i > maxReach) {
//           return false;
//       }
//       maxReach = Math.max(maxReach, i + nums[i]);
//   }
//   return true; 
// };

// const nums = [3,2,2,3];
// var removeElement = function(nums, val) {
//   nums.forEach((item, index) => {
//       if(item !== val){
//           const el = nums.splice(index,1)
//           nums.unshift(el[0])
//       }
//   })
//   return nums;
// };


// console.log(removeElement(nums, 3))
// const nums = [1,1,1,2,2,3];
// var removeDuplicates = function(nums) {

//   const temp = [];

//   for(let i = nums.length - 1; i >= 0; i--){

//     if (temp[temp.length - 1] !== nums[temp.length - 2]){
//       temp.push(nums[i])
//       nums.pop(nums[i])
//       nums.unshift(nums[i])
//     };
//   };

//   return nums;
// };

// console.log(removeDuplicates(nums));
// const nums = [4,3,2,1,2];


// var productExceptSelf = function(nums) {
//   const product = []
//   for (let i = 0; i < nums.length; i++){
//     const temp = nums.reduce((acc, val, index) => index !== i ? acc * val : acc, 1);
//     product.push(temp);
//   }
//   return product;
// };

// console.log(productExceptSelf(nums))
// var hIndex = function(citations) {
    
// };

// const board = 
//   [["5","3",".",".","7",".",".",".","."]
//   ,["6",".",".","1","9","5",".",".","."]
//   ,[".","9","8",".",".",".",".","6","."]
//   ,["8",".",".",".","6",".",".",".","3"]
//   ,["4",".",".","8",".","3",".",".","1"]
//   ,["7",".",".",".","2",".",".",".","6"]
//   ,[".","6",".",".",".",".","2","8","."]
//   ,[".",".",".","4","1","9",".",".","5"]
//   ,[".",".",".",".","8",".",".","7","9"]];

// var isValidSudoku = function(board) {
//   let col = 0;
//     for (let i = 0; i < board.length; i++){
//       col++;
//       const uniquNumsAndDot = new Set(board[i]);
//       const numsOnly = board[i].filter(item => item !== '.');

//       // First condition done!
//       if (!board[i].includes('.') && uniquNumsAndDot.size !== numsOnly.length) return false;
//       if (board[i].includes('.') && uniquNumsAndDot.size -1 !== numsOnly.length) return false;

//       // console.log(board[col][i])
//       // for (let j = 0; j < board.length; j++){
//       //   console.log(board[i][j])
//       // }
//     }
// };
// isValidSudoku(board);

// const matrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]];

// // {
// //   [0,0], [0,1], [0,2],
// //   [1,0], [1,1], [1,2],
// //   [2,0], [2,1], [2,2]
// // }

// var rotate = function(matrix) {
//   for (let i = 0; i < matrix.length; i++){
//     for (let j = 0; j < matrix.length; j++){
//       [matrix[i][j], matrix[i][j]] = [matrix[j][i], matrix[j][i]];
//     };
//   };
//   return matrix;
// };

// console.log(rotate(matrix));

// const gas = [1,2,3,4,5];
// const cost = [3,4,5,1,2];

// var canCompleteCircuit = function(gas, cost) {
    
// };

// canCompleteCircuit(gas, cost);
// function numberToWords(amount) {
//   const ones = ['', 'një', 'dy', 'tre', 'katër', 'pesë', 'gjashtë', 'shtatë', 'tetë', 'nëntë'];
//   const teens = ['', 'njëmbëdhjetë', 'dymbëdhjetë', 'trembëdhjetë', 'katërmbëdhjetë', 'pesëmbëdhjetë', 'gjashtëmbëdhjetë', 'shtatëmbëdhjetë', 'tetëmbëdhjetë', 'nëntëmbëdhjetë'];
//   const tens = ['', 'dhjetë', 'njëzet', 'tridhjetë', 'katërdhjetë', 'pesëdhjetë', 'gjashtëdhjetë', 'shtatëdhjetë', 'tetëdhjetë', 'nentëdhjetë'];

//   function convertLessThanOneThousand(num) {
//     if (num === 0) {
//       return '';
//     } else if (num < 10) {
//       return ones[num];
//     } else if (num < 20) {
//       return teens[num - 10];
//     } else {
//       const digit = num % 10;
//       const ten = Math.floor(num / 10) % 10;
//       const hundred = Math.floor(num / 100);

//       let result = '';

//       if (hundred > 0) {
//         result += ones[hundred] + 'qind ';
//       }

//       if (ten > 0) {
//         result += tens[ten];
//       }

//       if (digit > 0 && ten >= 2) {
//         result += ' e ';
//       }

//       if (digit > 0) {
//         result += ones[digit];
//       }

//       return result.trim();
//     }
//   }

//   function convertEuros(num) {
//     if (num === 0) {
//       return 'zero euro';
//     }

//     const thousand = Math.floor((num % 1000000) / 1000);
//     const remainder = num % 1000;

//     let result = '';

//     if (thousand > 0) {
//       result += convertLessThanOneThousand(thousand) + ' mijë ';
//     }

//     if (remainder > 0) {
//       result += convertLessThanOneThousand(remainder);
//     }

//     return result.trim() + ' euro';
//   }

//   const convertCents = (num) => num === 0 ? 'zero cent' : convertLessThanOneThousand(num) + ' cent';

//   const euros = Math.floor(amount);
//   const cents = Math.round((amount - euros) * 100);

//   return convertEuros(euros) + (convertEuros(euros) && convertCents(cents) ?
//     ' dhe ' + convertCents(cents) :
//     convertCents(cents));
// }

// // Example usage:
// const amountInWords = numberToWords(1755.53);
// console.log(amountInWords);

// const s = "the sky is blue";

// var reverseWords = function(s) {
//   const arr = s.split(' ').filter(item => item !== '');

//   return arr.reverse().join(' ')
// };

// console.log(reverseWords(s));

// const s = "PAYPALISHIRING";
//            PAHNAPLSIIGYIR
//            4,4,4,4
//            1,1,1,1
//            4,4,4

// const numRows = 3;
// var convert = function(s, numRows) {
//     generatedString = [];
//     const jump = numRows + 1;

//     while (jump <= s.length){

//     }

// };

// const s = "   fly me   to   the moon  ";

// var lengthOfLastWord = function(s) {
//     const last = s.split(' ').filter(item => item !== '').slice(-1)[0];
//     return last.length
// };

// console.log(lengthOfLastWord(s))

// const strs = ["flower","flow","flight"];

// var longestCommonPrefix = function(strs) {
//     const small = strs.sort((a, b) => a.length - b.length)[0];

//     for (let i = small.length; i > 1; i--){
//       // console.log('Prefix', small.slice(0, i))
//       // console.log('Item', strs[i - 1])


//     }
// };

// longestCommonPrefix(strs)

// const s = "PAYPALISHIRING";
// const numRows = 3
// // console.log(s.length / 3)

// function convertToZigzag(s, numRows) {
//   const resultRows = Array.from({ length: Math.min(numRows, s.length) }, () => '');
//   let currentRow = 0; // Track the current row
//   let direction;

//   for (const char of s) {
//     resultRows[currentRow] += char; // Append the current character to the corresponding row
//     if (currentRow === 0 || currentRow === numRows - 1) {
//       // Change direction when reaching the top or bottom row
//       direction = -direction;
//     }
//     currentRow += direction; // Move to the next row
//   }
//   return resultRows.join('');
// }

// const result = convertToZigzag(s, numRows);
// console.log(result); // Output: "PAHNAPLSIIGYIR"


// const s = "egg";
// const t = "add"

// var isIsomorphic = function(s, t) {
//   const sSet = new Set(...s.split());
//   const tSet = new Set(...t.split());

//   return sSet.size === tSet.size;
// };


// console.log(isIsomorphic(s, t));

// const s = "A man, a plan, a canal: Panam";

// var isPalindrome = function(s) {

//   const alphaNumeric = []
//   s.split('').forEach(el => {
//     /^[0-9a-zA-Z]+$/.test(el) ? alphaNumeric.push(el.toLowerCase()) : '';
//   });
//   const reverseAlphaNumeric = alphaNumeric.slice().reverse();

//   return alphaNumeric.every((value, index) => value === reverseAlphaNumeric[index]);
// };


// console.log(isPalindrome(s));
// const s = "abc";
// const t = "ahbgdc";

// var isSubsequence = function(s, t) {
//     let sIndex = 0;
//     let tIndex = 0;

//     while (sIndex < s.length && tIndex < t.length) {
//         if (s[sIndex] === t[tIndex]) {
//             sIndex++;
//         }
//         tIndex++;
//     }

//     return sIndex === s.length;
// };

// console.log(isSubsequence(s, t));


// var getMinimumDifference = function(root) {
//   let minArr = [];

//   for(let i = 0; i < root.length; i++){
//     for(let j = 0; j < root.length; j++){
//       min = root[j] - root[i]
//       min > 0 ? minArr.push(Math.abs(min)) : '';
//     }
//   }
//   return Math.min(...minArr);
// };

// const root = [4,2,6,1,3];
// var getMinimumDifference = function(root) {
//   let minArr = [];

//   for(let i = 0; i < root.length; i++){
//     for(let j = 0; j < root.length; j++){
//       min = root[j] - root[i]
//       min > 0 ? minArr.push(Math.abs(min)) : '';
//     }
//   }
//   return Math.min(...minArr);
// };


// // getMinimumDifference(root);
// console.log(getMinimumDifference(root))

// const matrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]];

// var spiralOrder = function(matrix) {
//   for (let i = 0; i < matrix.length; i++){
//     for (let j = 0; j < matrix[i].length; j++){
//       // console.log(matrix[i][j])
      
//     }
//   }
// };

// spiralOrder(matrix);
// const arr = [
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1]
// ];


// function hourglassSum(arr) {
//   // Write your code here
//   const sumArr = [];
//   for(let i = 0; i <= arr.length - 2; i++){
//       for(let j = 0; j <=  arr[i].length - 2; j++){
//           let sum = 
//             arr[i][j] 
//           + arr[i][j + 1] 
//           + arr[i][j + 2]
          
//           + arr[i + 1][j + 1]
          
//           + arr[i + 2][j] 
//           + arr[i + 2][j + 1] 
//           + arr[i + 2][j + 2];
//           console.log(sum)
//           sumArr.push(sum);
//       }
//   }
//   return Math.max(...sumArr);
// }

// hourglassSum(arr)

// const arr = [
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1]
// ];

// function hourglassSum(arr) {
//   const sumArr = [];
//   for (let i = 0; i <= arr.length - 3; i++) {
//     for (let j = 0; j <= arr[i].length - 3; j++) {
//       let sum =
//         arr[i][j] +
//         arr[i][j + 1] +
//         arr[i][j + 2] +
//         arr[i + 1][j + 1] +
//         arr[i + 2][j] +
//         arr[i + 2][j + 1] +
//         arr[i + 2][j + 2];
//       // console.log(sum);
//       sumArr.push(sum);
//     }
//   }
//   return Math.max(...sumArr);
// }

// hourglassSum(arr);
// const gas = [1,2,3,4,5];
// const cost = [3,4,5,1,2];

// const arr = [1,2,3,4,5];

// const circleArr = function(arr, startIndex){
//   const result = [];

//   for(let i = 0; i < gas.length; i++){
//     const index = (startIndex + i) % arr.length;
//     result.push(arr[index])
//   };
//   return result;
// };

// var canCompleteCircuit = function(gas, cost) {
//   let start = 0;

//   for(let i = 0; i < gas.length; i++){
//     console.log(circleArr(gas, 2));
//   }
// };
// canCompleteCircuit(gas, cost)

// console.log(circleArr(gas, 2));
// console.log(circleArr(cost, 2));

// const arr = [1,2,3,4,5,6,9,8,9];

// function diagonalDifference(arr) {

//   function getDiagonals(len, diagonal){
//       const square = Math.sqrt(len);
//       const diagonalArr = [];
//       let sum = diagonal == 'first' ? 0 : square - 1;

//       for (let i = 0; i < square; i++){
//         diagonalArr.push(sum);
//         diagonal == 'first' ? sum += square + 1 : sum += square - 1;
//       };

//       return diagonalArr;
//   };

//   const firstDiagonalIndeces =  getDiagonals(arr.length, 'first');
//   const secondDiagonalIndeces =  getDiagonals(arr.length, 'second');

//   const firstDiagonalSum = arr.filter((item, i) => firstDiagonalIndeces.includes(i)).reduce((acc, val) => acc + val);
//   const secondDiagonalSum = arr.filter((item, i) => secondDiagonalIndeces.includes(i)).reduce((acc, val) => acc + val);

//   return Math.abs(firstDiagonalSum - secondDiagonalSum);
// };

// console.log(diagonalDifference(arr));
// function diagonalDifference(arr) {
//   // Write your code here
//   // first: 0, 4, 8
//   // second: 2, 4, 6

// function getDiagonals(len, diagonal){
//     const square = Math.sqrt(len);
//     const diagonalArr = [];
//     let sum = diagonal == 'first' ? 0 : square - 1;

//     for (let i = 0; i < square; i++){
//       diagonalArr.push(sum);
//       diagonal == 'first' ? sum += square + 1 : sum += square - 1;
//     };

//     return diagonalArr;
// };

// const firstDiagonalIndeces =  getDiagonals(arr.length, 'first');
// const secondDiagonalIndeces =  getDiagonals(arr.length, 'second');

// const firstDiagonalSum = arr.filter((item, i) => firstDiagonalIndeces.includes(i)).reduce((acc, val) => acc + val);
// const secondDiagonalSum = arr.filter((item, i) => secondDiagonalIndeces.includes(i)).reduce((acc, val) => acc + val);

// return Math.abs(firstDiagonalSum - secondDiagonalSum);
// };

// console.log(diagonalDifference(arr));
// const dateStr = '2024-03-01';
// const date = new Date(dateStr);

// function getContractTerminationDate(signDate){
//   const today = new Date('2025-04-04');
//   const contract = {};
//   if (isNaN(signDate) || signDate.toString() === 'Invalid Date') return false;

//   // Function to add a specified number of years to a date
//   function addYearsToDate(date, yearsToAdd) {
//     const newDate = new Date(date);
//     // Calculate the new year
//     newDate.setFullYear(newDate.getFullYear() + yearsToAdd);
//     // If the original date is on February 29 of a leap year, and the new year is not a leap year, adjust the day to February 28
//     if (newDate.getMonth() === 1 && newDate.getDate() === 29 &&
//       !((newDate.getFullYear() % 4 === 0 && newDate.getFullYear() % 100 !== 0) || (newDate.getFullYear() % 400 === 0))) {
//       newDate.setDate(28);
//     }
//     newDate.setDate(newDate.getDate());
//     return newDate;
//   }

//   // First case: signDate equal or before 31/12/2023
//   const endOf2024 = new Date('2023-12-31');
//   const startOf2024 = new Date('2024-01-01');

//   if (signDate < startOf2024){
//     contract.startOfContract = startOf2024;
//     contract.endOfContract = endOf2024;
//   } 
//   // // Second Case: for every contract starting after the start of 2024
//   if (signDate >= startOf2024){
//     contract.startOfContract = signDate;
//     contract.endOfContract = addYearsToDate(signDate, 1);
//   } 
//   if (today > contract.endOfContract && contract.endOfContract >= startOf2024){
//     contract.startOfContract = contract.endOfContract;
//     contract.endOfContract = addYearsToDate(contract.endOfContract, 1);
//   } 
//   return contract;
// }

// console.log(getContractTerminationDate(date))

// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// let firstDiagonal = 0;
// let secondDiagonal = 0;
// const n = arr.length;

// for (let i = 0; i < n; i++){
//   firstDiagonal += arr[i][i];
//   secondDiagonal += arr[i][n - i - 1];
// }
// console.log(firstDiagonal)
// console.log(secondDiagonal)

// 0 -> 2; i = 0; n=3; 1
// 1 -> 1; i = 1; n=3; 1
// 2 -> 0; i = 2; n=3; 1

// const n = 4;
// function staircase(n) {
//   let result;
//   for (let i = 0; i < n; i++) {
//     result = " ".repeat(n - i - 1) + "#".repeat(i + 1);
//     console.log(result)
//   } 
// }
// staircase(4)

// a = [1, 2, 3]
// b = [3, 2, 1]

// function compareTriplets(a, b) {
//     let aPoints = 0;
//     let bPoints = 0;
//     const points = [];
//     for(let i = 0; i < 3; i++){
//         if(a[i] > b[i]) aPoints++;
//         if(a[i] < b[i]) bPoints++;
//     }
//     points.splice(0,0,aPoints, bPoints);
//     return points;
// }
// console.log(compareTriplets(a,b))

// function roundNearest5(num) {
//   return Math.ceil(num / 5) * 5;
// }

// console.log(roundNearest5(12)); // 👉️ 10
// console.log(roundNearest5(13)); // 👉️ 15
// console.log(roundNearest5(-13)); // 👉️ -15
// console.log(roundNearest5(-12)); // 👉️ -10
// console.log(roundNearest5(32.4)); // 👉️ 30
// console.log(roundNearest5(32.5)); // 👉️ 35
// const grades = [ 73, 67, 38, 33 ];
// function gradingStudents(grades) {
//   // Write your code here
//   const finalGrades = [];
//   for (let i = 0; i < grades.length; i++){
//       const rounded = Math.ceil(grades[i] / 5) * 5

//       if(grades[i] < 38) {
//         finalGrades.push(grades[i]);
//       } else if (rounded - grades[i] > 2){
//         finalGrades.push(grades[i]);
//       } else {
//         finalGrades.push(rounded);
//       }
//   }
//   return finalGrades;
// }
// console.log(gradingStudents(grades));

// const arr = [[1,2,3], [4,5,6], [7,8,9]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//   sum += arr[i][i];
//   for (let j = 0; j < arr[0].length; j++){
//   }
// }

// console.log(sum)
// const a = [0,0,1,2,1]
// function lonelyinteger(a) {
//   // Write your code here
//     for(let i = 0; i < a.length; i++){
//       const checkUnique = a.filter(item => item === a[i]).length;
//       if(checkUnique === 1) return a[i]
//     }
// };
// console.log(lonelyinteger(a));
// const arr = [[1,2,3], [4,5,6],[9,8,9]]
// function diagonalDifference(arr) {
//   // Write your code here
//   const n = arr.length;
//   let firstDiag = 0, secondDiag = 0;
//   for(let i = 0; i < n; i++){
//     console.log(i)
//       firstDiag += arr[i][i];
//       secondDiag += arr[i][n - i - 1];
//   }
//   return Math.abs(firstDiag - secondDiag);
// };
// diagonalDifference(arr)

// const arr = [
 
//   [3, 7, 2, 4],
//   [5, 1, 9, 4],
//   [10, 6, 8, 2],
//   [8, 9, 1, 7]
// ];

// const len = arr.length;
// const loop = len % 2 === 0 ? len/2 : (len - 1)/2;

// // reverse Ror
// function rowReverse(arr, row) {
//   arr[row].reverse();
//   return arr;
// }

// // reverse column
// function colReverse(arr, col){
//   for(let i = 0; i < loop; i++){
//     [arr[i][col], arr[len - i - 1][col]] = [arr[len - i - 1][col], arr[i][col]];
//   }
//   return arr; 
// }
// // console.log(rowReverse(arr, 0))
// console.log(colReverse(arr, 0))

// ----------------------------------------

// if(arr[0][0] < arr[0][len - 1]){
//   rowReverse(arr, 0)
//   // console.log(arr)
// } 
// if (arr[0][0] < arr[len-1][len-1]){
//   colReverse(arr, len-1)
//   rowReverse(arr, 0)
//   // console.log(arr)

// } 
// if (arr[0][0] < arr[len-1][0]){
//   colReverse(arr, 0)
//   // console.log(arr)
// }


// // -------------------------------------------
// if(arr[0][1] < arr[0][2]){
//   colReverse(arr, 2)
//   rowReverse(arr, len-1)
//   colReverse(arr, 1)
//   // console.log(arr)
// } 
// if (arr[0][0] < arr[len-1][1]){
//   rowReverse(arr, len-1)
//   colReverse(arr, 1)
//   // console.log(arr)

// } 
// if (arr[0][0] < arr[len-1][2]){
//   colReverse(arr, 1)
//   // console.log(arr)
// }

// const grid = [ 'abc', 'hjk', 'mpq', 'rtv' ]
// function gridChallenge(grid) {
//   // Write your code here
//   console.log(grid)
//   const constructedArr = [];
//   for(let i = 0; i < grid.length; i++){
//       const str = grid[i].split('').sort();
//       constructedArr.push(str);
//   };
  
//   console.log(constructedArr)
  
//   // const cols = [];
//   for(let i = 0; i < grid.length; i++){
//       let str = '';
//       for(let j = 0; j < grid.length; j++){
//         constructedArr[j][i] ?  str += constructedArr[j][i] : '';
//       }
//       // str !== '' ? cols.push(str) : null;
//       if(str.split('').sort().join('') !== str) return "NO";
//   }
//   return "YES";
//   console.log(cols)
// }
// console.log(gridChallenge(grid));

// const n = '148'
// function superDigit(n, k) {
//   // Write your code here
//   const arr = n.split('').map(num => parseInt(num)).sort((a, b) => a - b);
//   return arr.reduce((acc, item) => acc + item)
//   // console.log(arr)
// }
// console.log(superDigit(n, 3))

// const q = [1,2,5,3,7,8,6,4];
// function minimumBribes(q) {
//   // Write your code here
//   const sorted = q.slice().sort((a, b) => a - b);
//   // console.log('Original', q)
//   const bribes = sorted.map((item, index) => Math.abs(index - q.indexOf(item)));

//   if(Math.max(...bribes) > 2){
//        console.log( "Too chaotic");
//   } else {
//     console.log(bribes.reduce((acc, val) => acc + val) / 2)
//   }
// };

// console.log(minimumBribes(q))

// const arr = ['a', 'b', 'c', 'd', 'f'];
//    gas;
// }

// console.log(checkCircle(petrol, 1));
// console.log(end)
// ;
// rotate(arr, 2)
// console.log('modulo',5%5)
// const nums = [0,0,1,1,1,1,2,3,3]
// const nums = [1,1,1,2,2,3]
// var removeDuplicates = function(nums) {

//   // let count;
//   for(let i = 0; i < nums.length; i++){
//       if(nums[i + 2] && nums[i + 2] === nums[i]){
//           nums.splice(i, 1);
//           nums.push(nums[i]);
//           i--;
//           // count++
//       }
//   }
//   return nums.slice(0,  nums.length - 1);
// };
// console.log(removeDuplicates(nums));
// Creating a hash table
// // Creating a hash table using Map
// const hashTable = new Map();

// // Inserting values into the hash table
// hashTable.set(function(){console.log('hello worlld')}, 'value1');
// hashTable.set('key2', 'value2');
// hashTable.set('key3', 'value3');

// // console.log(hashTable.delete('key3'))
// // console.log(hashTable)
// const obj = {name: 'Albin', surname: "Qestaj"};



// const objKeys = hashTable.keys();
// console.log(objKeys)

// class Bank{
//   constructor(name, branches){
//     this.name = name;
//     this.branches = branches;
//   }
//   addBranch(branch){
//     this.branches.push(branch)
//   }
//   removeBranch(branch){
//     const itemToRemove = this.branches.indexOf(branch);
//     this.branches.splice(itemToRemove, 1);
//   }
//   displayBranches(){
//     this.branches.forEach((item, index) => console.log(`${index + 1}. ${item}`));
//   }
// }

// const branches = ["qafa", 'pejton', 'ulpiane'];
// const Raiffeisen = new Bank('Raiffeisen', branches);

// Raiffeisen.addBranch('qender');
// // Raiffeisen.displayBranches();
// Raiffeisen.removeBranch('qafa')
// Raiffeisen.displayBranches();

// class Product{
//   constructor(prodId, number, price){
//     this.prodId = prodId;
//     this.number = number;
//     this.price = price;
//   };

//   calcTotalPrice(quantity){
//     return this.price * quantity;
//   }
// }

// class PersonalCareProduct extends Product{
//     constructor(prodId, number, price, warrentyPeriod){
//       super(prodId, number, price);
//       this.warrentyPeriod = warrentyPeriod;
//     }

//     calcTotalPrice(){
//       const price = super.calcTotalPrice();
//       console.log(`product ${this.prodId} has a warrenty period for ${this.warrentyPeriod}, for ${this.quantity} items price is ${this.price}`)
//     }
// }

// const Person = function(name, birthYear){
//   this.name = name;
//   this.birthYear = birthYear;
// };

// // Method
// Person.prototype.calcAge = function(){
//   return 2024 - this.birthYear;
// }

// const albin = new Person('Albin', 1998);
// console.log('proto', Person.prototype)

// class Bank {
//   constructor(balance, Id, name){
//     this.balance = balance;
//     this.Id = Id;
//     this.name = name
//   };
//   display(){
//     console.log(`${this.name}'s balance is ${this.balance}`)
//   }
//   deposit(amount){
//     return this.balance += amount;
//   }
//   withdraw(amount){
//     return this.balance -= amount;
//   }
// }

// const albins = new Bank(1000, 499406, 'albin');
// albins.deposit(500);
// albins.withdraw(100);

// albins.display()

// class APIFeatures{
//   constructor(query, queryStr){
//     // queryStr = req.body
//     // query = Tour.find()
//     this.query = query;
//     this.queryStr = queryStr;
//   }
//   sort(){
//     if(this.queryStr.sort){
//       const sortBy = this.queryStr.sort.split(',').join(' ');
//       this.query = this.query.sort(sortBy);
//     } else {
//       this.query = this.query.sort('-createdAt');
//     }
//     return this
//   }
//   filter(){

//   }
//   limit(){

//   }
//   paginate(){

//   }
// }

// function func2(){
//   for(var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i),2000);
//   }
// }
// func2();


// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2);
//   setTimeout(()=> console.log(3),0);
//   console.log(4);
// })();

// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(){
//     this.head = null;
//     this.size = 1;
//   }

//   // Insert first
//   inserrFirst(newNode){
//     this.head = new Node(newNode)
//   }
//   // Insert node
//   insertNode(data){
//     const newNode = new Node(data);
//     let node = this.head;
//     if (!node) {
//       node = newNode;
//       return;
//     }
//     while(node.next){
//       node = node.next;
//     }
//     node.next = newNode;
//     this.size++
//   }

//   // Print list data
//   printLinkedLst(){
//     let node = this.head;
//     let str = ''
//     while(node){
//       str += node.data + '->';
//       node = node.next;
//     }
//     str += 'NULL'
//     console.log(str);
//   }

//   displayReverse(){

//   }

// }
// const n1 = new LinkedList();
// n1.inserrFirst(1);
// n1.insertNode(2);
// n1.insertNode(3);
// n1.insertNode(4);
// n1.printLinkedLst()


// // console.log(n1)

// const arr = [1,2,3,4,5,6];

// class Car {
//   constructor(make, speed){
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate(){
//     this.speed += 10;
//     console.log(`New speed: ${this.speed + 10}`)
//   }
//   brake(){
//     this.speed -= 10;
//     console.log(`New speed: ${this.speed - 10}`)
//   }
//   get speedUs(){
//     return this.speed / 1.6;
//   }
//   set speedUs(){

//   }
// }

// const Car1 = new Car(1998, 100);
// Car1.accelerate()
// Car1.accelerate()
// Car1.accelerate()
