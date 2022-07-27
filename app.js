const mongoose = require("mongoose");

//  connect to database + create database
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// create Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This is requied']
    },
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

//  Create Model
const Fruits = mongoose.model('Fruit', fruitSchema);

//  assign value to Schema
const apple = new Fruits({
    name: "Apple",
    rating: 8,
    review: "Its ok."
});

// another Schema People
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema  // update this 
});



const kiwi = new Fruits({
    name: "Kiwi",
    rating:10,
    review:"Greet"
});

const mango = new Fruits({
    name: "Mongo",
    rating:10,
    review:"Too sweet"
});

const banana = new Fruits({
    name: "Banana",
    rating:9,
    review:"Nice Fruit"
});

// // insert data to database
// Fruits.insertMany([kiwi, mango, banana], function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("add to database");
//     }
// })


// Model
const Person = mongoose.model('Person', personSchema);

//  updating fruits for person Sechma
const pineapple = new Fruits({
    name: "Pineapple",
    rating:7,
    review:"Thats good."
});
const grapefruit = new Fruits({
    name: "Grapefruit",
    rating:5,
    review: "ist so so ...."
})
// pineapple.save();
// grapefruit.save();

// put data to Schema
const orhan = new Person({
    name: "Orhan",
    age: 2,
    // favouriteFruit: grapefruit
});

const farah = new Person({
    name: "Farah",
    age: 28,
    favouriteFruit: pineapple
});


// orhan.save();
// farah.save();


// // read data from database
// Fruits.find(function (error, fruits) {
//     if(error){
//         console.log(error);
//     }else{
//         mongoose.connection.close();
//         fruits.forEach(function (fruit) {  // onlly name of fruits from array 
//             console.log(fruit.name);
//         });
//     }
// })

// // undating document
// Fruits.updateOne({_id:"62e1ac123e436700f77041b8"},{name: "Banana"}, function (error) {
//     if(error){
//         console.log(error);
//     }else {
//         console.log("Succesfully update the document.");
//     };
// })

//  update orhan document
Person.updateOne({name: "Orhan"}, {favouriteFruit: grapefruit}, function (error) {
    if(error){
        console.log(error);
    }else {
        console.log("Succesfully update the document.");
    };
})

// //  Delete entry in document
// Fruits.deleteMany({_id: ["62e1ac123e436700f77041b8","62e1ac123e436700f77041b7"]}, function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Succesfully deleted entry in the document.");
//     };
// })

// // Delete all documents 
// Person.deleteMany({}, function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Succesfully deleted entry in the document.");
//     };
// })

// Fruits.deleteMany({}, function (error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Succesfully deleted entry in the document.");
//     };
// })