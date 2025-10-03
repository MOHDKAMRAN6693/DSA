/**
 * Two Sum Problem - Find two numbers that add up to a target
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Second argument must be a number');
    }
    
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Alternative implementation using object instead of Map
function twoSumObject(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Second argument must be a number');
    }
    
    const numObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numObj) {
            return [numObj[complement], i];
        }
        
        numObj[nums[i]] = i;
    }
    
    return [];
}

// Implementation that returns all possible pairs
function twoSumAllPairs(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Second argument must be a number');
    }
    
    const pairs = [];
    const seen = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (seen.has(complement)) {
            // Find the index of the complement
            const complementIndex = nums.indexOf(complement);
            pairs.push([complementIndex, i]);
        }
        
        seen.add(nums[i]);
    }
    
    return pairs;
}

// Implementation that returns values instead of indices
function twoSumValues(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Second argument must be a number');
    }
    
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [complement, nums[i]];
        }
        
        numMap.set(nums[i], i);
    }
    
    return [];
}

// Implementation for sorted array (two pointers approach)
function twoSumSorted(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Second argument must be a number');
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Test cases
console.log('=== Two Sum Tests ===');

const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
    { nums: [1, 2, 3, 4, 5], target: 8 },
    { nums: [1, 2, 3, 4, 5], target: 10 }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array:', testCase.nums);
    console.log('Target:', testCase.target);
    console.log('Indices:', twoSum(testCase.nums, testCase.target));
    console.log('Values:', twoSumValues(testCase.nums, testCase.target));
    console.log('All pairs:', twoSumAllPairs(testCase.nums, testCase.target));
});

// Test with sorted array
console.log('\n=== Sorted Array Test ===');
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Sorted Array:', sortedArray);
console.log('Target 7:', twoSumSorted(sortedArray, 7));
console.log('Target 10:', twoSumSorted(sortedArray, 10));

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const target = 19999; // Last two elements

console.time('Map Method');
const result1 = twoSum(largeArray, target);
console.timeEnd('Map Method');

console.time('Object Method');
const result2 = twoSumObject(largeArray, target);
console.timeEnd('Object Method');

console.log('Result:', result1, result2);

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    twoSum('not an array', 5);
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    twoSum([1, 2, 3], 'not a number');
} catch (e) {
    console.log('Non-number target error:', e.message);
}

module.exports = { 
    twoSum, 
    twoSumObject, 
    twoSumAllPairs, 
    twoSumValues, 
    twoSumSorted 
};
