/**
 * Count vowels and consonants in a string
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function countVowelsAndConsonants(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount = 0; // spaces, numbers, special characters
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (isLetter(char)) {
            consonantCount++;
        } else {
            otherCount++;
        }
    }
    
    return {
        vowels: vowelCount,
        consonants: consonantCount,
        others: otherCount,
        total: str.length
    };
}

// Helper function to check if character is a letter
function isLetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

// Alternative implementation using Set for vowels
function countVowelsAndConsonantsSet(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (vowelSet.has(char)) {
            vowelCount++;
        } else if (isLetter(char)) {
            consonantCount++;
        } else {
            otherCount++;
        }
    }
    
    return {
        vowels: vowelCount,
        consonants: consonantCount,
        others: otherCount,
        total: str.length
    };
}

// Case-insensitive version
function countVowelsAndConsonantsCaseInsensitive(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const lowerStr = str.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount = 0;
    
    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (isLetter(char)) {
            consonantCount++;
        } else {
            otherCount++;
        }
    }
    
    return {
        vowels: vowelCount,
        consonants: consonantCount,
        others: otherCount,
        total: str.length
    };
}

// Implementation that returns detailed breakdown
function countVowelsAndConsonantsDetailed(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const vowels = 'aeiouAEIOU';
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    
    const result = {
        vowels: 0,
        consonants: 0,
        numbers: 0,
        spaces: 0,
        special: 0,
        total: str.length,
        breakdown: {
            vowelChars: [],
            consonantChars: [],
            numberChars: [],
            spaceChars: [],
            specialChars: []
        }
    };
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (vowels.includes(char)) {
            result.vowels++;
            result.breakdown.vowelChars.push(char);
        } else if (consonants.includes(char)) {
            result.consonants++;
            result.breakdown.consonantChars.push(char);
        } else if (char >= '0' && char <= '9') {
            result.numbers++;
            result.breakdown.numberChars.push(char);
        } else if (char === ' ') {
            result.spaces++;
            result.breakdown.spaceChars.push(char);
        } else {
            result.special++;
            result.breakdown.specialChars.push(char);
        }
    }
    
    return result;
}

// Test cases
console.log('=== Count Vowels and Consonants Tests ===');

const testStrings = [
    "Hello World!",
    "Programming is fun",
    "AEIOUaeiou",
    "123456789",
    "!@#$%^&*()",
    "The quick brown fox jumps over the lazy dog",
    ""
];

testStrings.forEach((str, index) => {
    console.log(`\nTest ${index + 1}: "${str}"`);
    console.log('Basic count:', countVowelsAndConsonants(str));
    console.log('Set method:', countVowelsAndConsonantsSet(str));
    console.log('Case insensitive:', countVowelsAndConsonantsCaseInsensitive(str));
    
    if (index < 3) { // Show detailed breakdown for first few tests
        console.log('Detailed breakdown:', countVowelsAndConsonantsDetailed(str));
    }
});

// Performance comparison
console.log('\n=== Performance Test ===');
const longString = "The quick brown fox jumps over the lazy dog".repeat(1000);
const iterations = 1000;

console.time('Basic Method');
for (let i = 0; i < iterations; i++) {
    countVowelsAndConsonants(longString);
}
console.timeEnd('Basic Method');

console.time('Set Method');
for (let i = 0; i < iterations; i++) {
    countVowelsAndConsonantsSet(longString);
}
console.timeEnd('Set Method');

console.time('Case Insensitive');
for (let i = 0; i < iterations; i++) {
    countVowelsAndConsonantsCaseInsensitive(longString);
}
console.timeEnd('Case Insensitive');

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    countVowelsAndConsonants(123);
} catch (e) {
    console.log('Non-string error:', e.message);
}

module.exports = { 
    countVowelsAndConsonants, 
    countVowelsAndConsonantsSet, 
    countVowelsAndConsonantsCaseInsensitive, 
    countVowelsAndConsonantsDetailed 
};
