//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "Brandy",
    sugars: 3,
    ready: true,
};

console.log("Name is: " + customerOrder.name);
console.log("Sugars is: " + customerOrder.sugars);

if (customerOrder.ready) {
    console.log("Ready for pickup.");
} else {
    console.log("Still in order queue.");
}