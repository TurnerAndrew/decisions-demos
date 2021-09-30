//We will pick up with Jon being allowed to flee his fight with Jamie.

// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []

// Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backpack.push("sword")
backpack.push("shield")
backpack.push("food")

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

backpack.splice(0, 1)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = "fur coat"

backpack.push(furCoat)

// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.

backpack.pop()

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.

let itemCount = backpack.length

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush")

// Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

var backpack2 = backpack.splice(2, 5)

// Using bracket syntax, console.log the first item in backpack2

console.log(backpack2[0])

// This, of course, is not a effective way to look at each item. We could console.log the entire array, but how do we handle looking at each item in the array, one at a time? This is where loops come in!

// LOOPS
// Let's see the contents of Jon's backpacks. Use a for loop on each backpack to console.log each item.

for (i =0; i < backpack.length; i++) {
  console.log(backpack[i])
}

for (i=0; i < backpack2.length; i++) {
  console.log(backpack2[i])
}

// How could you rewrite this to only show you the first 3 items of a given backpack?

for (i =0; i < 3; i++) {
  console.log(backpack[i])
}

// What if you ran the above for-loop, but did not have 3 items in the array? We could add a level of safety to it, by wrapping it in an if-else statement.

if (backpack.length >= 3) {
  for (i =0; i < 3; i++) {
    console.log(backpack[i])
  }
} else {
  for (i =0; i < backpack.length; i++) {
    console.log(backpack[i])
  }
}

//CONTROL FLOW

//Using Example 2 from the lecture demonstrate the use of console logs in managing your control flow.

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('----------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.')
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}.`)
}