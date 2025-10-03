/**
 * Sort an array (Bubble, Quick, Merge)
 * Time Complexity: Bubble O(n²), Quick O(n log n) average, Merge O(n log n)
 * Space Complexity: Bubble O(1), Quick O(log n), Merge O(n)
 */

// Bubble Sort
function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const result = [...arr];
    const n = result.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }
        
        if (!swapped) {
            break; // Array is already sorted
        }
    }
    
    return result;
}

// Quick Sort
function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length <= 1) {
        return [...arr];
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Alternative Quick Sort with in-place partitioning
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
    
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Merge Sort
function mergeSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length <= 1) {
        return [...arr];
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Additional sorting algorithms

// Selection Sort
function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const result = [...arr];
    const n = result.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }
    
    return result;
}

// Insertion Sort
function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const result = [...arr];
    
    for (let i = 1; i < result.length; i++) {
        const key = result[i];
        let j = i - 1;
        
        while (j >= 0 && result[j] > key) {
            result[j + 1] = result[j];
            j--;
        }
        
        result[j + 1] = key;
    }
    
    return result;
}

// Heap Sort
function heapSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    const result = [...arr];
    const n = result.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(result, n, i);
    }
    
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [result[0], result[i]] = [result[i], result[0]];
        heapify(result, i, 0);
    }
    
    return result;
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

// Counting Sort (for non-negative integers)
function countingSort(arr, maxValue = null) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length === 0) {
        return [];
    }
    
    // Find max value if not provided
    if (maxValue === null) {
        maxValue = Math.max(...arr);
    }
    
    const count = new Array(maxValue + 1).fill(0);
    const result = new Array(arr.length);
    
    // Count occurrences
    for (let num of arr) {
        count[num]++;
    }
    
    // Build result array
    let index = 0;
    for (let i = 0; i <= maxValue; i++) {
        while (count[i] > 0) {
            result[index++] = i;
            count[i]--;
        }
    }
    
    return result;
}

// Test cases
console.log('=== Sorting Algorithms Tests ===');

const testCases = [
    [64, 34, 25, 12, 22, 11, 90],
    [5, 2, 8, 1, 9],
    [1],
    [],
    [3, 3, 3, 3],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5]
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Original:', testCase);
    console.log('Bubble Sort:', bubbleSort(testCase));
    console.log('Quick Sort:', quickSort(testCase));
    console.log('Merge Sort:', mergeSort(testCase));
    console.log('Selection Sort:', selectionSort(testCase));
    console.log('Insertion Sort:', insertionSort(testCase));
    console.log('Heap Sort:', heapSort(testCase));
    
    if (testCase.length > 0 && testCase.every(x => x >= 0 && Number.isInteger(x))) {
        console.log('Counting Sort:', countingSort(testCase));
    }
});

// Performance comparison
console.log('\n=== Performance Comparison ===');
const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));
const iterations = 1;

console.time('Bubble Sort');
for (let i = 0; i < iterations; i++) {
    bubbleSort(largeArray);
}
console.timeEnd('Bubble Sort');

console.time('Quick Sort');
for (let i = 0; i < iterations; i++) {
    quickSort(largeArray);
}
console.timeEnd('Quick Sort');

console.time('Merge Sort');
for (let i = 0; i < iterations; i++) {
    mergeSort(largeArray);
}
console.timeEnd('Merge Sort');

console.time('Selection Sort');
for (let i = 0; i < iterations; i++) {
    selectionSort(largeArray);
}
console.timeEnd('Selection Sort');

console.time('Insertion Sort');
for (let i = 0; i < iterations; i++) {
    insertionSort(largeArray);
}
console.timeEnd('Insertion Sort');

console.time('Heap Sort');
for (let i = 0; i < iterations; i++) {
    heapSort(largeArray);
}
console.timeEnd('Heap Sort');

console.time('Counting Sort');
for (let i = 0; i < iterations; i++) {
    countingSort(largeArray);
}
console.timeEnd('Counting Sort');

console.time('Native Sort');
for (let i = 0; i < iterations; i++) {
    [...largeArray].sort((a, b) => a - b);
}
console.timeEnd('Native Sort');

// Stability test
console.log('\n=== Stability Test ===');
const stabilityTest = [
    { value: 3, originalIndex: 0 },
    { value: 1, originalIndex: 1 },
    { value: 3, originalIndex: 2 },
    { value: 2, originalIndex: 3 }
];

console.log('Original with indices:', stabilityTest);
console.log('Sorted by value:', stabilityTest.sort((a, b) => a.value - b.value));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    bubbleSort('not an array');
} catch (e) {
    console.log('Non-array error:', e.message);
}

module.exports = { 
    bubbleSort, 
    quickSort, 
    quickSortInPlace, 
    mergeSort, 
    selectionSort, 
    insertionSort, 
    heapSort, 
    countingSort 
};
