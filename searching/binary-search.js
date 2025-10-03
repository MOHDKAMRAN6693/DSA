/**
 * Implement binary search
 * Time Complexity: O(log n)
 * Space Complexity: O(1) for iterative, O(log n) for recursive
 */

function binarySearch(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}

// Recursive implementation
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (left > right) {
        return -1;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Implementation that finds first occurrence
function binarySearchFirst(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Implementation that finds last occurrence
function binarySearchLast(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Implementation that finds insertion position
function binarySearchInsertion(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

// Implementation that finds closest element
function binarySearchClosest(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (arr.length === 0) {
        return -1;
    }
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    // Check which element is closer
    if (left > 0 && Math.abs(arr[left - 1] - target) < Math.abs(arr[left] - target)) {
        return left - 1;
    }
    
    return left;
}

// Implementation for range search
function binarySearchRange(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    const first = binarySearchFirst(arr, target);
    const last = binarySearchLast(arr, target);
    
    return { first, last, count: first === -1 ? 0 : last - first + 1 };
}

// Test cases
console.log('=== Binary Search Tests ===');

const testCases = [
    { arr: [1, 2, 3, 4, 5], target: 3 },
    { arr: [1, 2, 3, 4, 5], target: 1 },
    { arr: [1, 2, 3, 4, 5], target: 5 },
    { arr: [1, 2, 3, 4, 5], target: 6 },
    { arr: [1, 3, 5, 7, 9], target: 4 },
    { arr: [2, 2, 2, 2, 2], target: 2 },
    { arr: [1, 2, 2, 2, 3], target: 2 },
    { arr: [], target: 1 }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array:', testCase.arr);
    console.log('Target:', testCase.target);
    console.log('Index:', binarySearch(testCase.arr, testCase.target));
    console.log('Recursive:', binarySearchRecursive(testCase.arr, testCase.target));
    console.log('First occurrence:', binarySearchFirst(testCase.arr, testCase.target));
    console.log('Last occurrence:', binarySearchLast(testCase.arr, testCase.target));
    console.log('Insertion position:', binarySearchInsertion(testCase.arr, testCase.target));
    console.log('Closest element:', binarySearchClosest(testCase.arr, testCase.target));
});

// Test range search
console.log('\n=== Range Search Tests ===');
const rangeTestCases = [
    { arr: [1, 2, 2, 2, 3, 4, 5], target: 2 },
    { arr: [1, 1, 1, 1, 1], target: 1 },
    { arr: [1, 3, 5, 7, 9], target: 4 }
];

rangeTestCases.forEach((testCase, index) => {
    console.log(`\nRange Test ${index + 1}:`);
    console.log('Array:', testCase.arr);
    console.log('Target:', testCase.target);
    console.log('Range:', binarySearchRange(testCase.arr, testCase.target));
});

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
const target = 500000;
const iterations = 1000;

console.time('Iterative Binary Search');
for (let i = 0; i < iterations; i++) {
    binarySearch(largeArray, target);
}
console.timeEnd('Iterative Binary Search');

console.time('Recursive Binary Search');
for (let i = 0; i < iterations; i++) {
    binarySearchRecursive(largeArray, target);
}
console.timeEnd('Recursive Binary Search');

// Linear search comparison
console.time('Linear Search');
for (let i = 0; i < iterations; i++) {
    largeArray.indexOf(target);
}
console.timeEnd('Linear Search');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Empty array:', binarySearch([], 1));
console.log('Single element found:', binarySearch([5], 5));
console.log('Single element not found:', binarySearch([5], 3));
console.log('Target smaller than all:', binarySearch([1, 2, 3, 4, 5], 0));
console.log('Target larger than all:', binarySearch([1, 2, 3, 4, 5], 6));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    binarySearch('not an array', 5);
} catch (e) {
    console.log('Non-array error:', e.message);
}

module.exports = { 
    binarySearch, 
    binarySearchRecursive, 
    binarySearchFirst, 
    binarySearchLast, 
    binarySearchInsertion, 
    binarySearchClosest, 
    binarySearchRange 
};
