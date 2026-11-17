// const sqaure = function (x) {
//   return x * x;
// };

// Arrow function
// const sqaure = (x) => {
//   return x * x;
// };

// const sqaure = (x) => x * x;
// console.log(sqaure(2));

// const event = {
//   name: "Birthday Party",
//     printGuestList: function () {
//       console.log("Guest List for " + this.name);
//     },

// };
// event.printGuestList();

// With arrow function, the block of code above will print undefined because arrow functions don't bind their own 'this' value.

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest List for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
