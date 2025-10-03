/**
 * Find the majority element in an array
 * Time Complexity: O(n)
 * Space Complexity: O(1) for Boyer-Moore, O(n) for hash map approach
 */

function findMajorityElement(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    let candidate = nums[0];
    let count = 1;
    
    // Boyer-Moore Voting Algorithm
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    // Verify if the candidate is actually the majority element
    let actualCount = 0;
    for (let num of nums) {
        if (num === candidate) {
            actualCount++;
        }
    }
    
    return actualCount > Math.floor(nums.length / 2) ? candidate : null;
}

// Alternative implementation using hash map
function findMajorityElementHashMap(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const countMap = new Map();
    const threshold = Math.floor(nums.length / 2);
    
    // Count occurrences
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Find majority element
    for (let [num, count] of countMap) {
        if (count > threshold) {
            return num;
        }
    }
    
    return null;
}

// Implementation that returns all elements with count > n/3
function findMajorityElements(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const countMap = new Map();
    const threshold = Math.floor(nums.length / 3);
    const result = [];
    
    // Count occurrences
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Find elements with count > threshold
    for (let [num, count] of countMap) {
        if (count > threshold) {
            result.push({ element: num, count: count });
        }
    }
    
    return result;
}

// Implementation using sorting
function findMajorityElementSorting(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const sorted = [...nums].sort((a, b) => a - b);
    const threshold = Math.floor(nums.length / 2);
    let current = sorted[0];
    let count = 1;
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === current) {
            count++;
        } else {
            if (count > threshold) {
                return current;
            }
            current = sorted[i];
            count = 1;
        }
    }
    
    return count > threshold ? current : null;
}

// Implementation that returns the frequency of the majority element
function findMajorityElementWithFrequency(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const countMap = new Map();
    const threshold = Math.floor(nums.length / 2);
    
    // Count occurrences
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Find majority element with frequency
    for (let [num, count] of countMap) {
        if (count > threshold) {
            return { element: num, frequency: count, percentage: (count / nums.length * 100).toFixed(2) };
        }
    }
    
    return null;
}

// Implementation for multiple majority elements (n/3 case)
function findMajorityElementsN3(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;
    
    // First pass: find candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    
    // Second pass: verify candidates
    const result = [];
    const threshold = Math.floor(nums.length / 3);
    
    count1 = 0;
    count2 = 0;
    
    for (let num of nums) {
        if (num === candidate1) count1++;
        if (num === candidate2) count2++;
    }
    
    if (count1 > threshold) result.push(candidate1);
    if (count2 > threshold && candidate2 !== candidate1) result.push(candidate2);
    
    return result;
}

// Test cases
console.log('=== Majority Element Tests ===');

const testCases = [
    [3, 2, 3],
    [2, 2, 1, 1, 1, 2, 2],
    [1],
    [1, 2, 3, 4, 5],
    [1, 1, 1, 2, 2],
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array:', testCase);
    console.log('Boyer-Moore:', findMajorityElement(testCase));
    console.log('HashMap:', findMajorityElementHashMap(testCase));
    console.log('Sorting:', findMajorityElementSorting(testCase));
    console.log('With frequency:', findMajorityElementWithFrequency(testCase));
    console.log('All majority elements:', findMajorityElements(testCase));
});

// Test n/3 majority elements
console.log('\n=== N/3 Majority Elements Test ===');
const n3TestCases = [
    [3, 2, 3],
    [1, 1, 1, 3, 3, 2, 2, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

n3TestCases.forEach((testCase, index) => {
    console.log(`\nN/3 Test ${index + 1}:`);
    console.log('Array:', testCase);
    console.log('N/3 majority elements:', findMajorityElementsN3(testCase));
});

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 100000 }, (_, i) => Math.floor(Math.random() * 10) + 1);
const iterations = 10;

console.time('Boyer-Moore Algorithm');
for (let i = 0; i < iterations; i++) {
    findMajorityElement(largeArray);
}
console.timeEnd('Boyer-Moore Algorithm');

console.time('HashMap Algorithm');
for (let i = 0; i < iterations; i++) {
    findMajorityElementHashMap(largeArray);
}
console.timeEnd('HashMap Algorithm');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Single element [5]:', findMajorityElement([5]));
console.log('All same elements [1,1,1,1]:', findMajorityElement([1, 1, 1, 1]));
console.log('No majority [1,2,3,4]:', findMajorityElement([1, 2, 3, 4]));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    findMajorityElement('not an array');
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    findMajorityElement([]);
} catch (e) {
    console.log('Empty array error:', e.message);
}

module.exports = { 
    findMajorityElement, 
    findMajorityElementHashMap, 
    findMajorityElements, 
    findMajorityElementSorting, 
    findMajorityElementWithFrequency, 
    findMajorityElementsN3 
};
