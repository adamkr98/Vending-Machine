 
// Array Operations:

// // Create an array of numbers and find the sum of all even numbers.
// const allNb = [1,2,3,4,5,6,7,8];
// const evenNb = [];
// let sumEvenNb = 0;

// allNb.forEach(nb => {
//     if(nb % 2 == 0 ){
//         evenNb.push(nb);
//         console.log(evenNb);
        
//     };
// });

// evenNb.forEach(nb => {
//     sumEvenNb += nb;
//     console.log(sumEvenNb);
// });


// // Find the average of the elements in an array.
// let average = 0;
// let sumAllNb = 0;

// allNb.forEach(nb => {
//     sumAllNb += nb;
// });

// average = sumAllNb / allNb.length;
// console.log("the average of all numbers is:" + average); 


// Remove duplicate elements from an array without using a set.// to re do !!!!!!!!!!!

// const duplicatedNbs = [1,2,2,5,6,8,8,10,5];
// const noDuplicates = [];

// duplicatedNbs.forEach(nb => {
//     if(noDuplicates.indexOf(nb) === -1) {
//         noDuplicates.push(nb);
//     }
// }
// );
// console.log(noDuplicates);

// Array Transformation:

// Create a new array by squaring each element of an existing array.

// const existingArr = [1,4,10,33,2];

// const newArray = [];

// existingArr.forEach(nb => {
//     let squareNb = Math.pow(nb, 2);
//     newArray.push(squareNb);
// })
// console.log(newArray);

// Rotate the elements of an array to the right by a given number of positions. to re do !!!!


// const initArr = [1,2,3,4,5];
// const changedArr = [];

// const moveValue = (positionNb, arr) => {
   
//     const arrLength = arr.length;
//     arr.forEach((nb, index) => {
//         let targetIndex = (index + positionNb) % arrLength; 
//         changedArr.push(arr[targetIndex]);
//     });

//     console.log(changedArr);
// }

// moveValue(2, initArr);


// Implement a function that performs a custom sorting logic on an array.

// ???????


// Objects:
// Object Operations:

// Create an object representing a book with properties like title, author, and publication year.


// const book1 = {
//     title: 'Harry Potter',
//     author: 'J.K.Rowling',
//     year:1999
// };

// const book2 = {
//     title: 'Narnia',
//     author: 'xx',
//     year:2005
// };

// // Implement a function that compares two book objects for equality.


// const compareBooks = (a, b) => {
//     return (
//         a.title === b.title,
//         a.author === b.author,
//         a.year === b.year

//         //à finir
//     )
// };

// compareBooks(book1, book2)

// Combine two objects into a new object without mutating the original objects.

// Object Transformation:

// Convert an object with nested arrays into a flat array.
// Create a function that deep clones an object, including nested objects.


//Vending machine

const machine = document.querySelector('.vendingMachine');
let pad = document.getElementById("pad");

const confirm = document.querySelector(".confirm");

const vendingMachine = {

    listItems: {
        1: {
                itemName: "paprika chips",
                price: 2.50,
                quantity: 8,
        },
        2: {
                itemName: "onion chips",
                price: 2.50,
                quantity: 7,
        },
        3: {
                itemName: "wassabi chips",
                price: 3.25,
                quantity: 10,
        },
        4: {
                itemName: "coca cola",
                price: 4.50,
                quantity: 10,
        },
        5: {
                itemName: "twix",
                price: 3.00,
                quantity: 5,
        },
        6: {
                itemName: "apple gum",
                price: 3.25,
                quantity: 8,
        },
        7: {
                itemName: "strawberry gum",
                price: 3.25,
                quantity: 5,
        },
        8: {
                itemName: "water",
                price: 4.25,
                quantity: 5,
        },
        9: {
                itemName: "orange juice",
                price: 5.50,
                quantity: 7,
        },
        10: {
                itemName: "capri sun",
                price: 4.55,
                quantity: 6,
        },
        11: {
                itemName: "chocolate",
                price: 4.15,
                quantity: 3,
        }, 
        12: {
                itemName: "tic tac",
                price: 4.25,
                quantity: 5,
        },
        13: {
                itemName: "sprite",
                price: 4.25,
                quantity: 4,
        }, 
        14: {
                itemName: "croissant",
                price: 3.80,
                quantity: 5,
        },
    },
}

const allProducts = vendingMachine.listItems;

const showProducts = () => {
    let allProductList = "";
    for (const key in allProducts) {
        console.log(allProducts[key].itemName + ": " + allProducts[key].quantity);
        allProductList += key + ". " + allProducts[key].itemName + "<br>";
    };
    machine.innerHTML = allProductList;

}



const showSelectedItemName = (selectedItem) => {
    console.log(allProducts[selectedItem].itemName);
    let selectedItemName = allProducts[selectedItem].itemName;
    machine.textContent = selectedItemName;
};

const showSelectedItemQuantity = (selectedItem) => {
    console.log(allProducts[selectedItem].quantity);
};

const removeItem = (selectedItemNb) => {
    allProducts[selectedItemNb].quantity--;
    console.log(allProducts[selectedItemNb].itemName + " costs: " + allProducts[selectedItemNb].price + " euros.");
}

// let selectedItem = prompt("Choose your product.")
pad.addEventListener("input", (e) => {
    console.log(e.target.value);
})
console.log(pad.value)
let selectedItem = pad;

showProducts();



// switch(selectedItem) {
//     case "1":
//         showSelectedItem(selectedItem);
//         removeItem(1);
//         break;
//     case "2":
//         showSelectedItem(selectedItem);
//         removeItem(1);
//         break;
//     case "3":
//         showSelectedItem(selectedItem);
//         removeItem(1);
//         break;

// }

// if(selectedItem === "1" || "2" || "3" || "4" ||)

const itemNumber = Object.keys(vendingMachine.listItems);

if(itemNumber.includes(selectedItem)) {
    showSelectedItemName(selectedItem);
    removeItem(1);
    showSelectedItemQuantity(selectedItem)
    alert('it works!');
};


