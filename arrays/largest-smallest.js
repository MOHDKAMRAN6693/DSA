/**
 * Find the largest and smallest number in an array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findLargestAndSmallest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    
    let largest = arr[0];
    let smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return { largest, smallest };
}

// Alternative implementation that returns indices
function findLargestAndSmallestIndices(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    
    let largestIndex = 0;
    let smallestIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[largestIndex]) {
            largestIndex = i;
        }
        if (arr[i] < arr[smallestIndex]) {
            smallestIndex = i;
        }
    }
    
    return {
        largest: arr[largestIndex],
        largestIndex,
        smallest: arr[smallestIndex],
        smallestIndex
    };
}

// Implementation using reduce
function findLargestAndSmallestReduce(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    
    return arr.reduce((acc, current) => {
        return {
            largest: Math.max(acc.largest, current),
            smallest: Math.min(acc.smallest, current)
        };
    }, { largest: arr[0], smallest: arr[0] });
}

// Test cases
console.log('=== Largest and Smallest Tests ===');
const testArray1 = [3, 7, 2, 9, 1, 5];
const testArray2 = [1];
const testArray3 = [5, 5, 5, 5];

console.log('Array:', testArray1);
console.log('findLargestAndSmallest:', findLargestAndSmallest(testArray1));
console.log('findLargestAndSmallestIndices:', findLargestAndSmallestIndices(testArray1));
console.log('findLargestAndSmallestReduce:', findLargestAndSmallestReduce(testArray1));

console.log('\nArray:', testArray2);
console.log('findLargestAndSmallest:', findLargestAndSmallest(testArray2));

console.log('\nArray:', testArray3);
console.log('findLargestAndSmallest:', findLargestAndSmallest(testArray3));

module.exports = { 
    findLargestAndSmallest, 
    findLargestAndSmallestIndices, 
    findLargestAndSmallestReduce 
};
