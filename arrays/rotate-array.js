/**
 * Rotate an array by k steps
 * Time Complexity: O(n)
 * Space Complexity: O(1) for in-place rotation, O(n) for extra space approach
 */

function rotateArray(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 0) {
        throw new Error('Second argument must be a non-negative number');
    }
    
    if (nums.length === 0) {
        return nums;
    }
    
    k = k % nums.length; // Handle k > array length
    
    if (k === 0) {
        return nums;
    }
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
    
    return nums;
}

// Helper function to reverse array elements
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Alternative implementation using extra space
function rotateArrayExtraSpace(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 0) {
        throw new Error('Second argument must be a non-negative number');
    }
    
    if (nums.length === 0) {
        return nums;
    }
    
    k = k % nums.length;
    
    if (k === 0) {
        return nums;
    }
    
    const result = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        result[(i + k) % nums.length] = nums[i];
    }
    
    return result;
}

// Implementation that rotates left instead of right
function rotateArrayLeft(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 0) {
        throw new Error('Second argument must be a non-negative number');
    }
    
    if (nums.length === 0) {
        return nums;
    }
    
    k = k % nums.length;
    
    if (k === 0) {
        return nums;
    }
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the last k elements
    reverse(nums, nums.length - k, nums.length - 1);
    
    // Reverse the first (n-k) elements
    reverse(nums, 0, nums.length - k - 1);
    
    return nums;
}

// Implementation that returns a new array without modifying the original
function rotateArrayImmutable(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 0) {
        throw new Error('Second argument must be a non-negative number');
    }
    
    if (nums.length === 0) {
        return [];
    }
    
    k = k % nums.length;
    
    if (k === 0) {
        return [...nums];
    }
    
    return [...nums.slice(-k), ...nums.slice(0, -k)];
}

// Implementation with multiple rotation directions
function rotateArrayDirection(nums, k, direction = 'right') {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 0) {
        throw new Error('Second argument must be a non-negative number');
    }
    
    if (typeof direction !== 'string' || !['left', 'right'].includes(direction)) {
        throw new Error('Direction must be "left" or "right"');
    }
    
    if (nums.length === 0) {
        return nums;
    }
    
    k = k % nums.length;
    
    if (k === 0) {
        return nums;
    }
    
    if (direction === 'left') {
        return rotateArrayLeft([...nums], k);
    } else {
        return rotateArray([...nums], k);
    }
}

// Test cases
console.log('=== Rotate Array Tests ===');

const testCases = [
    { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 },
    { nums: [-1, -100, 3, 99], k: 2 },
    { nums: [1, 2], k: 1 },
    { nums: [1, 2, 3], k: 0 },
    { nums: [1, 2, 3, 4, 5], k: 7 }, // k > array length
    { nums: [1], k: 1 },
    { nums: [], k: 1 }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Original array:', testCase.nums);
    console.log('K:', testCase.k);
    
    if (testCase.nums.length > 0) {
        console.log('Rotated right:', rotateArray([...testCase.nums], testCase.k));
        console.log('Rotated left:', rotateArrayLeft([...testCase.nums], testCase.k));
        console.log('Immutable:', rotateArrayImmutable(testCase.nums, testCase.k));
    } else {
        console.log('Empty array - no rotation needed');
    }
});

// Test with different directions
console.log('\n=== Direction Tests ===');
const testArray = [1, 2, 3, 4, 5];
console.log('Original:', testArray);
console.log('Right 2:', rotateArrayDirection(testArray, 2, 'right'));
console.log('Left 2:', rotateArrayDirection(testArray, 2, 'left'));

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const k = 5000;

console.time('In-place Rotation');
rotateArray([...largeArray], k);
console.timeEnd('In-place Rotation');

console.time('Extra Space Rotation');
rotateArrayExtraSpace(largeArray, k);
console.timeEnd('Extra Space Rotation');

console.time('Immutable Rotation');
rotateArrayImmutable(largeArray, k);
console.timeEnd('Immutable Rotation');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Single element [1], k=1:', rotateArray([1], 1));
console.log('Two elements [1,2], k=1:', rotateArray([1, 2], 1));
console.log('K equals array length:', rotateArray([1, 2, 3], 3));
console.log('K greater than array length:', rotateArray([1, 2, 3], 5));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    rotateArray('not an array', 2);
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    rotateArray([1, 2, 3], -1);
} catch (e) {
    console.log('Negative k error:', e.message);
}

try {
    rotateArrayDirection([1, 2, 3], 1, 'invalid');
} catch (e) {
    console.log('Invalid direction error:', e.message);
}

module.exports = { 
    rotateArray, 
    rotateArrayExtraSpace, 
    rotateArrayLeft, 
    rotateArrayImmutable, 
    rotateArrayDirection 
};
