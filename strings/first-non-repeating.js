/**
 * Find the index of the first non-repeating character in a string
 * Time Complexity: O(n)
 * Space Complexity: O(1) - at most 26 characters for lowercase letters
 */

function firstNonRepeatingChar(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charCount = {};
    
    // First pass: count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: find first character with count 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return i;
        }
    }
    
    return -1; // No non-repeating character found
}

// Alternative implementation that returns the character and index
function firstNonRepeatingCharWithChar(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charCount = {};
    
    // Count occurrences
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first non-repeating character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return { character: str[i], index: i };
        }
    }
    
    return { character: null, index: -1 };
}

// Implementation using Map for better performance with large strings
function firstNonRepeatingCharMap(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charCount = new Map();
    
    // Count occurrences
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first non-repeating character
    for (let i = 0; i < str.length; i++) {
        if (charCount.get(str[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}

// Case-insensitive version
function firstNonRepeatingCharCaseInsensitive(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charCount = {};
    const originalChars = []; // Store original characters to return correct case
    
    // Count occurrences (case-insensitive)
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        originalChars[i] = str[i]; // Store original case
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first non-repeating character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i].toLowerCase()] === 1) {
            return i;
        }
    }
    
    return -1;
}

// Test cases
console.log('=== First Non-Repeating Character Tests ===');
const testString1 = "leetcode";
const testString2 = "loveleetcode";
const testString3 = "aabb";
const testString4 = "a";
const testString5 = "";

console.log('String:', testString1);
console.log('firstNonRepeatingChar:', firstNonRepeatingChar(testString1)); // 0 (l)
console.log('firstNonRepeatingCharWithChar:', firstNonRepeatingCharWithChar(testString1));
console.log('firstNonRepeatingCharMap:', firstNonRepeatingCharMap(testString1));

console.log('\nString:', testString2);
console.log('firstNonRepeatingChar:', firstNonRepeatingChar(testString2)); // 2 (v)

console.log('\nString:', testString3);
console.log('firstNonRepeatingChar:', firstNonRepeatingChar(testString3)); // -1 (no non-repeating)

console.log('\nString:', testString4);
console.log('firstNonRepeatingChar:', firstNonRepeatingChar(testString4)); // 0 (a)

console.log('\nString:', testString5);
console.log('firstNonRepeatingChar:', firstNonRepeatingChar(testString5)); // -1 (empty)

console.log('\n=== Case-Insensitive Test ===');
const testString6 = "AaBbCc";
console.log('String:', testString6);
console.log('firstNonRepeatingCharCaseInsensitive:', firstNonRepeatingCharCaseInsensitive(testString6)); // 0 (A)

module.exports = { 
    firstNonRepeatingChar, 
    firstNonRepeatingCharWithChar, 
    firstNonRepeatingCharMap, 
    firstNonRepeatingCharCaseInsensitive 
};
