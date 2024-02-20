// Function to alert the first letter of a given name
function firstLetterName(name) {
    var firstLetter = name.charAt(0); // Gets the first letter of the name
    alert("The name " + name + " starts with the letter " + firstLetter);
}

// Function to check if a number is divisible by two
function divisibleByTwo(number) {
    return number % 2 === 0; // Check if the remainder when dividing by 2 is zero
}

// Function to find the largest number in an array
function largestNum(arr) {
    var largest = arr[0]; // Initialize the largest number with the first element of the array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Updates the largest number if a larger one is found
        }
    }
    return largest;
}

// Call each function with appropriate arguments
firstLetterName("Dionne");
console.log(divisibleByTwo(6)); // Should return true
console.log(largestNum([3, 7, 2, 9, 5])); // Should return 9