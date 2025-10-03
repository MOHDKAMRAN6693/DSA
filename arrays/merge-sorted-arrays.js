/**
 * Merge two sorted arrays
 * Time Complexity: O(m + n) where m and n are lengths of the arrays
 * Space Complexity: O(m + n) for the result array
 */

function mergeSortedArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both inputs must be arrays');
    }
    
    const merged = [];
    let i = 0; // pointer for arr1
    let j = 0; // pointer for arr2
    
    // Merge elements while both arrays have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    // Add remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// Alternative implementation that modifies one of the arrays in-place
function mergeSortedArraysInPlace(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both inputs must be arrays');
    }
    
    // Create a copy of arr1 to avoid modifying the original
    const result = [...arr1];
    let i = result.length - 1; // pointer for result array (from end)
    let j = arr2.length - 1;   // pointer for arr2 (from end)
    let k = result.length + arr2.length - 1; // position to place next element
    
    // Merge from the end
    while (i >= 0 && j >= 0) {
        if (result[i] > arr2[j]) {
            result[k] = result[i];
            i--;
        } else {
            result[k] = arr2[j];
            j--;
        }
        k--;
    }
    
    // Add remaining elements from arr2
    while (j >= 0) {
        result[k] = arr2[j];
        j--;
        k--;
    }
    
    return result;
}

// Implementation that handles duplicates
function mergeSortedArraysWithDuplicates(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both inputs must be arrays');
    }
    
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        } else {
            // Equal elements - add both
            merged.push(arr1[i]);
            merged.push(arr2[j]);
            i++;
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// Implementation that removes duplicates
function mergeSortedArraysUnique(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both inputs must be arrays');
    }
    
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (merged.length === 0 || merged[merged.length - 1] !== arr1[i]) {
                merged.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (merged.length === 0 || merged[merged.length - 1] !== arr2[j]) {
                merged.push(arr2[j]);
            }
            j++;
        } else {
            // Equal elements - add only one
            if (merged.length === 0 || merged[merged.length - 1] !== arr1[i]) {
                merged.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) {
        if (merged.length === 0 || merged[merged.length - 1] !== arr1[i]) {
            merged.push(arr1[i]);
        }
        i++;
    }
    
    while (j < arr2.length) {
        if (merged.length === 0 || merged[merged.length - 1] !== arr2[j]) {
            merged.push(arr2[j]);
        }
        j++;
    }
    
    return merged;
}

// Generic implementation that works with any comparable data
function mergeSortedArraysGeneric(arr1, arr2, compareFn = (a, b) => a - b) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Both inputs must be arrays');
    }
    
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (compareFn(arr1[i], arr2[j]) <= 0) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// Test cases
console.log('=== Merge Sorted Arrays Tests ===');

const testCases = [
    { arr1: [1, 3, 5], arr2: [2, 4, 6] },
    { arr1: [1, 2, 3], arr2: [4, 5, 6] },
    { arr1: [4, 5, 6], arr2: [1, 2, 3] },
    { arr1: [1, 3, 5, 7], arr2: [2, 4, 6] },
    { arr1: [1, 2, 3, 3, 5], arr2: [2, 3, 4, 6] },
    { arr1: [], arr2: [1, 2, 3] },
    { arr1: [1, 2, 3], arr2: [] },
    { arr1: [], arr2: [] }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array 1:', testCase.arr1);
    console.log('Array 2:', testCase.arr2);
    console.log('Merged:', mergeSortedArrays(testCase.arr1, testCase.arr2));
    console.log('In-place:', mergeSortedArraysInPlace(testCase.arr1, testCase.arr2));
    console.log('With duplicates:', mergeSortedArraysWithDuplicates(testCase.arr1, testCase.arr2));
    console.log('Unique:', mergeSortedArraysUnique(testCase.arr1, testCase.arr2));
});

// Test with objects
console.log('\n=== Object Array Tests ===');
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 35 }
];
const people2 = [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 40 }
];

const mergedPeople = mergeSortedArraysGeneric(people1, people2, (a, b) => a.age - b.age);
console.log('Merged people by age:', mergedPeople);

// Test with strings
console.log('\n=== String Array Tests ===');
const words1 = ['apple', 'cherry', 'grape'];
const words2 = ['banana', 'date', 'elderberry'];

const mergedWords = mergeSortedArraysGeneric(words1, words2, (a, b) => a.localeCompare(b));
console.log('Merged words alphabetically:', mergedWords);

// Performance test
console.log('\n=== Performance Test ===');
const largeArr1 = Array.from({ length: 10000 }, (_, i) => i * 2);
const largeArr2 = Array.from({ length: 10000 }, (_, i) => i * 2 + 1);

console.time('Merge Large Arrays');
const result = mergeSortedArrays(largeArr1, largeArr2);
console.timeEnd('Merge Large Arrays');
console.log('Result length:', result.length);

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    mergeSortedArrays([1, 2, 3], 'not an array');
} catch (e) {
    console.log('Non-array error:', e.message);
}

module.exports = { 
    mergeSortedArrays, 
    mergeSortedArraysInPlace, 
    mergeSortedArraysWithDuplicates, 
    mergeSortedArraysUnique, 
    mergeSortedArraysGeneric 
};
