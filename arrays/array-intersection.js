/**
 * Find the intersection of two arrays
 * Time Complexity: O(m + n)
 * Space Complexity: O(min(m, n))
 */

function findIntersection(nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Both arguments must be arrays');
    }
    
    const set1 = new Set(nums1);
    const intersection = new Set();
    
    for (let num of nums2) {
        if (set1.has(num)) {
            intersection.add(num);
        }
    }
    
    return Array.from(intersection);
}

// Alternative implementation that preserves duplicates
function findIntersectionWithDuplicates(nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Both arguments must be arrays');
    }
    
    const countMap1 = new Map();
    const result = [];
    
    // Count occurrences in first array
    for (let num of nums1) {
        countMap1.set(num, (countMap1.get(num) || 0) + 1);
    }
    
    // Find intersections with duplicates
    for (let num of nums2) {
        if (countMap1.has(num) && countMap1.get(num) > 0) {
            result.push(num);
            countMap1.set(num, countMap1.get(num) - 1);
        }
    }
    
    return result;
}

// Implementation that returns indices of intersections
function findIntersectionIndices(nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Both arguments must be arrays');
    }
    
    const result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push({ value: nums1[i], index1: i, index2: j });
            }
        }
    }
    
    return result;
}

// Implementation for sorted arrays (two pointers)
function findIntersectionSorted(nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Both arguments must be arrays');
    }
    
    const sorted1 = [...nums1].sort((a, b) => a - b);
    const sorted2 = [...nums2].sort((a, b) => a - b);
    const result = [];
    
    let i = 0, j = 0;
    
    while (i < sorted1.length && j < sorted2.length) {
        if (sorted1[i] === sorted2[j]) {
            result.push(sorted1[i]);
            i++;
            j++;
        } else if (sorted1[i] < sorted2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
}

// Implementation that returns intersection with frequency
function findIntersectionWithFrequency(nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new Error('Both arguments must be arrays');
    }
    
    const countMap1 = new Map();
    const countMap2 = new Map();
    const result = [];
    
    // Count occurrences in both arrays
    for (let num of nums1) {
        countMap1.set(num, (countMap1.get(num) || 0) + 1);
    }
    
    for (let num of nums2) {
        countMap2.set(num, (countMap2.get(num) || 0) + 1);
    }
    
    // Find common elements with minimum frequency
    for (let [num, count1] of countMap1) {
        if (countMap2.has(num)) {
            const count2 = countMap2.get(num);
            const minCount = Math.min(count1, count2);
            for (let i = 0; i < minCount; i++) {
                result.push(num);
            }
        }
    }
    
    return result;
}

// Implementation for multiple arrays
function findIntersectionMultiple(arrays) {
    if (!Array.isArray(arrays) || arrays.length < 2) {
        throw new Error('At least two arrays are required');
    }
    
    for (let arr of arrays) {
        if (!Array.isArray(arr)) {
            throw new Error('All elements must be arrays');
        }
    }
    
    if (arrays.length === 2) {
        return findIntersection(arrays[0], arrays[1]);
    }
    
    let result = findIntersection(arrays[0], arrays[1]);
    
    for (let i = 2; i < arrays.length; i++) {
        result = findIntersection(result, arrays[i]);
    }
    
    return result;
}

// Test cases
console.log('=== Array Intersection Tests ===');

const testCases = [
    { nums1: [1, 2, 2, 1], nums2: [2, 2] },
    { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] },
    { nums1: [1, 2, 3], nums2: [4, 5, 6] },
    { nums1: [1, 2, 3, 4], nums2: [3, 4, 5, 6] },
    { nums1: [1, 1, 1], nums2: [1, 1, 1] },
    { nums1: [], nums2: [1, 2, 3] },
    { nums1: [1, 2, 3], nums2: [] }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array 1:', testCase.nums1);
    console.log('Array 2:', testCase.nums2);
    console.log('Intersection:', findIntersection(testCase.nums1, testCase.nums2));
    console.log('With duplicates:', findIntersectionWithDuplicates(testCase.nums1, testCase.nums2));
    console.log('Sorted intersection:', findIntersectionSorted(testCase.nums1, testCase.nums2));
    console.log('With frequency:', findIntersectionWithFrequency(testCase.nums1, testCase.nums2));
});

// Test with indices
console.log('\n=== Intersection with Indices ===');
const testArray1 = [1, 2, 3, 4];
const testArray2 = [3, 4, 5, 6];
console.log('Array 1:', testArray1);
console.log('Array 2:', testArray2);
console.log('Intersection indices:', findIntersectionIndices(testArray1, testArray2));

// Test with multiple arrays
console.log('\n=== Multiple Arrays Intersection ===');
const multipleArrays = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8]
];
console.log('Arrays:', multipleArrays);
console.log('Common intersection:', findIntersectionMultiple(multipleArrays));

// Performance test
console.log('\n=== Performance Test ===');
const largeArray1 = Array.from({ length: 10000 }, (_, i) => i + 1);
const largeArray2 = Array.from({ length: 10000 }, (_, i) => i + 5000);

console.time('Set Intersection');
findIntersection(largeArray1, largeArray2);
console.timeEnd('Set Intersection');

console.time('Sorted Intersection');
findIntersectionSorted(largeArray1, largeArray2);
console.timeEnd('Sorted Intersection');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Empty arrays:', findIntersection([], []));
console.log('One empty array:', findIntersection([1, 2, 3], []));
console.log('No intersection:', findIntersection([1, 2, 3], [4, 5, 6]));
console.log('Identical arrays:', findIntersection([1, 2, 3], [1, 2, 3]));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    findIntersection('not an array', [1, 2, 3]);
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    findIntersectionMultiple([[1, 2], 'not an array']);
} catch (e) {
    console.log('Invalid array in multiple:', e.message);
}

module.exports = { 
    findIntersection, 
    findIntersectionWithDuplicates, 
    findIntersectionIndices, 
    findIntersectionSorted, 
    findIntersectionWithFrequency, 
    findIntersectionMultiple 
};
