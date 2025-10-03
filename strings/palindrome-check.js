/**
 * Check if a string is a palindrome
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }
    
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Alternative implementation using recursion
function isPalindromeRecursive(str, left = 0, right = str.length - 1) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Base case: if left >= right, we've checked all characters
    if (left >= right) {
        return true;
    }
    
    // Skip non-alphanumeric characters
    while (left < right && !isAlphanumeric(str[left])) {
        left++;
    }
    while (left < right && !isAlphanumeric(str[right])) {
        right--;
    }
    
    // Compare characters (case-insensitive)
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
        return false;
    }
    
    // Recursive call
    return isPalindromeRecursive(str, left + 1, right - 1);
}

function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') || 
           (char >= 'A' && char <= 'Z') || 
           (char >= '0' && char <= '9');
}

// Test cases
console.log('=== Palindrome Check Tests ===');
console.log('isPalindrome("racecar"):', isPalindrome("racecar")); // true
console.log('isPalindrome("A man a plan a canal Panama"):', isPalindrome("A man a plan a canal Panama")); // true
console.log('isPalindrome("hello"):', isPalindrome("hello")); // false
console.log('isPalindrome(""):', isPalindrome("")); // true
console.log('isPalindrome("a"):', isPalindrome("a")); // true
console.log('isPalindrome("Madam"):', isPalindrome("Madam")); // true

console.log('\n=== Recursive Method ===');
console.log('isPalindromeRecursive("racecar"):', isPalindromeRecursive("racecar")); // true
console.log('isPalindromeRecursive("hello"):', isPalindromeRecursive("hello")); // false

module.exports = { isPalindrome, isPalindromeRecursive };
