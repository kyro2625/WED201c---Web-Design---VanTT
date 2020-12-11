var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits() {
    document.getElementbyId("fruits").innerHTML = fruits;
}

function myFunction() {
    var fruit = prompt("What is your favortie fruit? ");
    fruits.push(fruit);
    fruits.sort();
    document.getElementById("fruits").innerHTML = fruits;
}