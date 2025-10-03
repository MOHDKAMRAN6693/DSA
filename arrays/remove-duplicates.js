/**
 * Remove duplicates from an array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const seen = new Set();
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Alternative implementation using object for counting
function removeDuplicatesObject(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const seen = {};
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!seen.hasOwnProperty(arr[i])) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Implementation that preserves order and works with any data type
function removeDuplicatesGeneric(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        // Check if current element already exists in result
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr[i]) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Implementation for sorted arrays (more efficient)
function removeDuplicatesSorted(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length <= 1) return arr;
    
    const result = [arr[0]];
    let lastUnique = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== lastUnique) {
            result.push(arr[i]);
            lastUnique = arr[i];
        }
    }
    
    return result;
}

// Test cases
console.log('=== Remove Duplicates Tests ===');
const testArray1 = [1, 2, 2, 3, 4, 4, 5];
const testArray2 = ['a', 'b', 'b', 'c', 'a', 'd'];
const testArray3 = [1, 1, 1, 1];
const testArray4 = [];

console.log('Array:', testArray1);
console.log('removeDuplicates:', removeDuplicates(testArray1));
console.log('removeDuplicatesObject:', removeDuplicatesObject(testArray1));
console.log('removeDuplicatesGeneric:', removeDuplicatesGeneric(testArray1));

console.log('\nArray:', testArray2);
console.log('removeDuplicates:', removeDuplicates(testArray2));

console.log('\nArray:', testArray3);
console.log('removeDuplicates:', removeDuplicates(testArray3));

console.log('\nArray:', testArray4);
console.log('removeDuplicates:', removeDuplicates(testArray4));

console.log('\n=== Sorted Array Test ===');
const sortedArray = [1, 1, 2, 2, 3, 4, 4, 5, 5];
console.log('Sorted Array:', sortedArray);
console.log('removeDuplicatesSorted:', removeDuplicatesSorted(sortedArray));

module.exports = { 
    removeDuplicates, 
    removeDuplicatesObject, 
    removeDuplicatesGeneric, 
    removeDuplicatesSorted 
};
