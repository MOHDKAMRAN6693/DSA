/**
 * Longest substring without repeating characters
 * Time Complexity: O(n)
 * Space Complexity: O(min(m, n)) where m is the size of the charset
 */

function lengthOfLongestSubstring(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        
        charMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Alternative implementation using Set
function lengthOfLongestSubstringSet(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, charSet.size);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    
    return maxLength;
}

// Implementation that returns the actual substring
function longestSubstring(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    let maxStart = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        
        charMap.set(char, end);
        
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }
    
    return s.substring(maxStart, maxStart + maxLength);
}

// Implementation that returns all longest substrings
function allLongestSubstrings(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    const substrings = new Set();
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        
        charMap.set(char, end);
        const currentLength = end - start + 1;
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
            substrings.clear();
            substrings.add(s.substring(start, end + 1));
        } else if (currentLength === maxLength) {
            substrings.add(s.substring(start, end + 1));
        }
    }
    
    return Array.from(substrings);
}

// Implementation with case-insensitive comparison
function lengthOfLongestSubstringCaseInsensitive(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const lowerS = s.toLowerCase();
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < lowerS.length; end++) {
        const char = lowerS[end];
        
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        
        charMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Implementation that handles Unicode characters
function lengthOfLongestSubstringUnicode(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        if (charMap.has(char) && charMap.get(char) >= start) {
            start = charMap.get(char) + 1;
        }
        
        charMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Test cases
console.log('=== Longest Substring Tests ===');

const testStrings = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "abcdefg",
    "a",
    "",
    "dvdf",
    "tmmzuxt",
    "Hello World!",
    "🚀🌟💻🎯" // Unicode test
];

testStrings.forEach((str, index) => {
    console.log(`\nTest ${index + 1}: "${str}"`);
    console.log('Length:', lengthOfLongestSubstring(str));
    console.log('Set method:', lengthOfLongestSubstringSet(str));
    console.log('Substring:', longestSubstring(str));
    console.log('All longest:', allLongestSubstrings(str));
    console.log('Case insensitive:', lengthOfLongestSubstringCaseInsensitive(str));
});

// Performance test
console.log('\n=== Performance Test ===');
const longString = "abcdefghijklmnopqrstuvwxyz".repeat(1000);
const iterations = 100;

console.time('Map Method');
for (let i = 0; i < iterations; i++) {
    lengthOfLongestSubstring(longString);
}
console.timeEnd('Map Method');

console.time('Set Method');
for (let i = 0; i < iterations; i++) {
    lengthOfLongestSubstringSet(longString);
}
console.timeEnd('Set Method');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Empty string:', lengthOfLongestSubstring(""));
console.log('Single character:', lengthOfLongestSubstring("a"));
console.log('All same characters:', lengthOfLongestSubstring("aaaa"));
console.log('No repeats:', lengthOfLongestSubstring("abcdef"));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    lengthOfLongestSubstring(123);
} catch (e) {
    console.log('Non-string error:', e.message);
}

module.exports = { 
    lengthOfLongestSubstring, 
    lengthOfLongestSubstringSet, 
    longestSubstring, 
    allLongestSubstrings, 
    lengthOfLongestSubstringCaseInsensitive, 
    lengthOfLongestSubstringUnicode 
};
