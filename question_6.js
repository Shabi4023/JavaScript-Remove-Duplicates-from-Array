// Create a function to remove duplicate elements from an array

const colors = ["Red", "Green", "Blue", "Red", "Yellow", "Blue"]

console.log(colors);

function removeDuplicates(data) {
    return [...new Set(data)]
}

console.log(removeDuplicates(colors));