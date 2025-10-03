/**
 * Find kth largest element in an array
 * Time Complexity: O(n) average, O(n²) worst case for QuickSelect
 * Space Complexity: O(1) for QuickSelect, O(n) for sorting approach
 */

function findKthLargest(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    // Sort and return kth largest
    const sorted = [...nums].sort((a, b) => b - a);
    return sorted[k - 1];
}

// QuickSelect algorithm (more efficient)
function findKthLargestQuickSelect(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    return quickSelect([...nums], 0, nums.length - 1, k - 1);
}

function quickSelect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }
    
    const pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (arr[j] >= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

// Implementation using heap
function findKthLargestHeap(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    // Build max heap
    const heap = [...nums];
    const n = heap.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(heap, n, i);
    }
    
    // Extract k-1 largest elements
    for (let i = n - 1; i >= n - k + 1; i--) {
        [heap[0], heap[i]] = [heap[i], heap[0]];
        heapify(heap, i, 0);
    }
    
    return heap[0];
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Implementation that returns k largest elements
function findKLargest(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const sorted = [...nums].sort((a, b) => b - a);
    return sorted.slice(0, k);
}

// Implementation that finds kth smallest
function findKthSmallest(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const sorted = [...nums].sort((a, b) => a - b);
    return sorted[k - 1];
}

// Implementation using counting sort for small range
function findKthLargestCounting(nums, k) {
    if (!Array.isArray(nums)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof k !== 'number' || k < 1 || k > nums.length) {
        throw new Error('k must be a positive number not exceeding array length');
    }
    
    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const range = max - min + 1;
    
    if (range > 10000) {
        // Fall back to sorting for large ranges
        return findKthLargest(nums, k);
    }
    
    const count = new Array(range).fill(0);
    
    // Count occurrences
    for (let num of nums) {
        count[num - min]++;
    }
    
    // Find kth largest
    let remaining = k;
    for (let i = range - 1; i >= 0; i--) {
        remaining -= count[i];
        if (remaining <= 0) {
            return i + min;
        }
    }
    
    return min;
}

// Test cases
console.log('=== Kth Largest Element Tests ===');

const testCases = [
    { nums: [3, 2, 1, 5, 6, 4], k: 2 },
    { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 },
    { nums: [1], k: 1 },
    { nums: [7, 10, 4, 3, 20, 15], k: 3 },
    { nums: [1, 2, 3, 4, 5], k: 1 },
    { nums: [5, 4, 3, 2, 1], k: 5 }
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Array:', testCase.nums);
    console.log('K:', testCase.k);
    console.log('Kth largest (sorting):', findKthLargest(testCase.nums, testCase.k));
    console.log('Kth largest (QuickSelect):', findKthLargestQuickSelect(testCase.nums, testCase.k));
    console.log('Kth largest (heap):', findKthLargestHeap(testCase.nums, testCase.k));
    console.log('K largest elements:', findKLargest(testCase.nums, testCase.k));
    console.log('Kth smallest:', findKthSmallest(testCase.nums, testCase.k));
});

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
const k = 50000;
const iterations = 10;

console.time('Sorting Method');
for (let i = 0; i < iterations; i++) {
    findKthLargest(largeArray, k);
}
console.timeEnd('Sorting Method');

console.time('QuickSelect Method');
for (let i = 0; i < iterations; i++) {
    findKthLargestQuickSelect(largeArray, k);
}
console.timeEnd('QuickSelect Method');

console.time('Heap Method');
for (let i = 0; i < iterations; i++) {
    findKthLargestHeap(largeArray, k);
}
console.timeEnd('Heap Method');

console.time('Counting Sort Method');
for (let i = 0; i < iterations; i++) {
    findKthLargestCounting(largeArray, k);
}
console.timeEnd('Counting Sort Method');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Single element [5], k=1:', findKthLargest([5], 1));
console.log('All same elements [1,1,1], k=2:', findKthLargest([1, 1, 1], 2));
console.log('Sorted array [1,2,3,4,5], k=3:', findKthLargest([1, 2, 3, 4, 5], 3));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    findKthLargest('not an array', 2);
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    findKthLargest([1, 2, 3], 0);
} catch (e) {
    console.log('Invalid k error:', e.message);
}

try {
    findKthLargest([1, 2, 3], 5);
} catch (e) {
    console.log('K too large error:', e.message);
}

module.exports = { 
    findKthLargest, 
    findKthLargestQuickSelect, 
    findKthLargestHeap, 
    findKLargest, 
    findKthSmallest, 
    findKthLargestCounting 
};
