/**
 * Reverse a string without using built-in methods
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    let reversed = '';
    
    // Iterate from the end of the string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

// Alternative implementation using two pointers
function reverseStringTwoPointers(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    let left = 0;
    let right = str.length - 1;
    let result = str.split(''); // Convert to array for manipulation
    
    while (left < right) {
        // Swap characters
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        
        left++;
        right--;
    }
    
    return result.join('');
}

// Test cases
console.log('=== Reverse String Tests ===');
console.log('reverseString("hello"):', reverseString("hello")); // "olleh"
console.log('reverseString("world"):', reverseString("world")); // "dlrow"
console.log('reverseString("a"):', reverseString("a")); // "a"
console.log('reverseString(""):', reverseString("")); // ""

console.log('\n=== Two Pointers Method ===');
console.log('reverseStringTwoPointers("hello"):', reverseStringTwoPointers("hello")); // "olleh"
console.log('reverseStringTwoPointers("world"):', reverseStringTwoPointers("world")); // "dlrow"

module.exports = { reverseString, reverseStringTwoPointers };
