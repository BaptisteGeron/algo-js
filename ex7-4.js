const readlineSync = require("readline-sync");
const fs = require('fs');

let pizzaList = [];
let existingMenu = "";

function pizzaMenu() {
    pizzaList = JSON.parse(readPizza());

    let n = readlineSync.question("\nHello! Welcome to the Pizza Flavors Manager.\nPlease choose your actions:\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program\nEnter your action's number: ");
    if (n=="1") {
        if (pizzaList==""){
            console.log("\nthere are no pizzas available for the moment");
            pizzaMenu();
        }
        else {
            console.log("\nPizzas available:\n")
            pizzaList.forEach(elem => {
            console.log(elem);     
            });
            pizzaMenu();
        }
            
        }
    
    else if (n=="2"){
       let pizza = readlineSync.question("\nEnter a new pizza flavor: ");
       pizzaList.push(pizza);
       store(pizzaList);
       pizzaMenu();
    }
    else if (n=="3") {
        for (i=0;i<pizzaList.length;i++ ){
            console.log("N° " + i + ": " + pizzaList[i]);}
            
        let removePizza = readlineSync.question("\nEnter the number of the pizza you want to remove from the list: ");
        if (removePizza==""){
            pizzaMenu();
        }
        else {
        pizzaList.splice(removePizza, 1);
        store(pizzaList);
        pizzaMenu();
        }
    }
    
    else if (n=="4") {

    }
    else {
        pizzaMenu();
    }
}

function store(matrix){
fs.writeFileSync('pizzalist.json', JSON.stringify(matrix), function (err) {
    if(err) {
        console.log(err);
    }
});
}

function readPizza() {
existingMenu =fs.readFileSync('pizzalist.json', function(err) {
    console.log(error);
});
return existingMenu;
};


pizzaMenu();
