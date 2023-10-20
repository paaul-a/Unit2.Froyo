// A visitor receives a prompt upon opening the website 
// to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing 
// how many of each flavor they have ordered. In this case, they will 
// be able to observe that they have ordered three vanilla, two coffee, 
// and one strawberry froyo.

const userInputString = prompt(
  "Please enter some desired ice cream flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(',');


// console.log(stringArray);

// for (let i = 0; i < stringArray.length; i++) {
//   console.log(stringArray[i]);

// }

// for in loop using object will give you the keys

// for (let i in stringArray) {
//   console.log(stringArray[i]);
// }

function creatOrderObjects(str) {

  // 1. split the string into an array of flavors
  const flavorsArray = str.split(',');

  const order = {

  }
  // let unknown = 'vanilla'

  // order[unknown] = 1

  for ( let i = 0; i < stringArray.length; i++) {
    let newFlavor = stringArray[i].trim(); // .trim removes spaces
    
    if (newFlavor in order) {// order exists 
      order[newFlavor]++


    }
    else {
      order[newFlavor] = 1

    }
     
  }

  return order

}

let froyoOrder = creatOrderObjects(userInputString)
console.table(froyoOrder);


// const flavorCount = [];
// for (let i = 0; i < stringArray.length; i++){
//   const flavors = stringArray[i];
//   if (flavors in flavorCount){
//     flavorCount[flavors]++;
//   }
//   else {
//     flavorCount[flavors] = 1;
//   }
// };

// console.table(flavorCount);


