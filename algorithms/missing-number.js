/**
 * Find the missing number in an array of 1...n
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const n = arr.length + 1; // Expected length including missing number
    const expectedSum = (n * (n + 1)) / 2; // Sum of 1 to n
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

// Alternative implementation using XOR (bit manipulation)
function findMissingNumberXOR(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const n = arr.length + 1;
    let xor1 = 0; // XOR of all numbers from 1 to n
    let xor2 = 0; // XOR of all numbers in array
    
    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xor1 ^= i;
    }
    
    // XOR all numbers in array
    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i];
    }
    
    return xor1 ^ xor2;
}

// Implementation that finds multiple missing numbers
function findMissingNumbers(arr, n) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (typeof n !== 'number' || n <= 0) {
        throw new Error('n must be a positive number');
    }
    
    const present = new Set(arr);
    const missing = [];
    
    for (let i = 1; i <= n; i++) {
        if (!present.has(i)) {
            missing.push(i);
        }
    }
    
    return missing;
}

// Implementation using sorting (when array is not guaranteed to be 1 to n-1)
function findMissingNumberSorted(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length === 0) {
        return 1;
    }
    
    // Sort the array
    const sorted = [...arr].sort((a, b) => a - b);
    
    // Check for missing number at the beginning
    if (sorted[0] !== 1) {
        return 1;
    }
    
    // Check for missing number in the middle
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] > 1) {
            return sorted[i - 1] + 1;
        }
    }
    
    // If no missing number found, return the next number
    return sorted[sorted.length - 1] + 1;
}

// Implementation that handles duplicates
function findMissingNumberWithDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const n = arr.length + 1;
    const count = new Array(n + 1).fill(0);
    
    // Count occurrences of each number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 1 && arr[i] <= n) {
            count[arr[i]]++;
        }
    }
    
    // Find the missing number
    for (let i = 1; i <= n; i++) {
        if (count[i] === 0) {
            return i;
        }
    }
    
    return -1; // No missing number found
}

// Implementation using mathematical approach for range [start, end]
function findMissingNumberInRange(arr, start, end) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        throw new Error('Invalid range');
    }
    
    const n = end - start + 1;
    const expectedSum = (n * (start + end)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

// Test cases
console.log('=== Missing Number Tests ===');

const testCases = [
    { arr: [1, 2, 4, 5], expected: 3 },
    { arr: [1, 2, 3, 4, 6, 7, 8], expected: 5 },
    { arr: [2, 3, 4, 5], expected: 1 },
    { arr: [1, 2, 3, 4, 5], expected: 6 },
    { arr: [1], expected: 2 },
    { arr: [2], expected: 1 },
    { arr: [], expected: 1 }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array:', testCase.arr);
    console.log('Expected missing:', testCase.expected);
    console.log('Sum method:', findMissingNumber(testCase.arr));
    console.log('XOR method:', findMissingNumberXOR(testCase.arr));
    console.log('Sorted method:', findMissingNumberSorted(testCase.arr));
});

// Test with duplicates
console.log('\n=== Duplicates Test ===');
const duplicateArray = [1, 2, 2, 4, 5];
console.log('Array with duplicates:', duplicateArray);
console.log('Missing with duplicates:', findMissingNumberWithDuplicates(duplicateArray));

// Test multiple missing numbers
console.log('\n=== Multiple Missing Numbers Test ===');
const multipleMissing = [1, 3, 5, 7];
console.log('Array:', multipleMissing);
console.log('Missing numbers (1-8):', findMissingNumbers(multipleMissing, 8));

// Test with custom range
console.log('\n=== Custom Range Test ===');
const customRangeArray = [10, 12, 13, 14];
console.log('Array:', customRangeArray);
console.log('Missing in range [10-14]:', findMissingNumberInRange(customRangeArray, 10, 14));

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 999999 }, (_, i) => i + 1);
largeArray.splice(500000, 1); // Remove one element

console.time('Sum Method');
const missingSum = findMissingNumber(largeArray);
console.timeEnd('Sum Method');

console.time('XOR Method');
const missingXOR = findMissingNumberXOR(largeArray);
console.timeEnd('XOR Method');

console.log('Missing number found:', missingSum, missingXOR);

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    findMissingNumber('not an array');
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    findMissingNumberInRange([1, 2, 3], 5, 3);
} catch (e) {
    console.log('Invalid range error:', e.message);
}

module.exports = { 
    findMissingNumber, 
    findMissingNumberXOR, 
    findMissingNumbers, 
    findMissingNumberSorted, 
    findMissingNumberWithDuplicates, 
    findMissingNumberInRange 
};
