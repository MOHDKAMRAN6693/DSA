/**
 * Find the factorial of a number (iterative and recursive)
 * Time Complexity: O(n)
 * Space Complexity: O(1) for iterative, O(n) for recursive
 */

// Iterative implementation
function factorialIterative(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// Recursive implementation
function factorialRecursive(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorialRecursive(n - 1);
}

// Tail-recursive implementation (more memory efficient)
function factorialTailRecursive(n, accumulator = 1) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    
    if (n === 0 || n === 1) {
        return accumulator;
    }
    
    return factorialTailRecursive(n - 1, n * accumulator);
}

// Implementation with memoization for better performance
const factorialMemo = (() => {
    const cache = {};
    
    return function(n) {
        if (typeof n !== 'number' || !Number.isInteger(n)) {
            throw new Error('Input must be an integer');
        }
        
        if (n < 0) {
            throw new Error('Factorial is not defined for negative numbers');
        }
        
        if (n === 0 || n === 1) {
            return 1;
        }
        
        if (cache[n]) {
            return cache[n];
        }
        
        cache[n] = n * factorialMemo(n - 1);
        return cache[n];
    };
})();

// Implementation using BigInt for very large numbers
function factorialBigInt(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    
    if (n === 0 || n === 1) {
        return BigInt(1);
    }
    
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    
    return result;
}

// Test cases
console.log('=== Factorial Tests ===');

const testNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Number | Iterative | Recursive | Tail Recursive | Memoized');
console.log('-------|-----------|-----------|----------------|---------');

testNumbers.forEach(n => {
    const iterative = factorialIterative(n);
    const recursive = factorialRecursive(n);
    const tailRecursive = factorialTailRecursive(n);
    const memoized = factorialMemo(n);
    
    console.log(`${n.toString().padStart(6)} | ${iterative.toString().padStart(9)} | ${recursive.toString().padStart(9)} | ${tailRecursive.toString().padStart(14)} | ${memoized.toString().padStart(8)}`);
});

// Test with larger numbers
console.log('\n=== Large Number Tests ===');
console.log('Factorial of 20 (BigInt):', factorialBigInt(20).toString());

// Performance comparison
console.log('\n=== Performance Test ===');
const testNum = 10;
const iterations = 10000;

console.time('Iterative');
for (let i = 0; i < iterations; i++) {
    factorialIterative(testNum);
}
console.timeEnd('Iterative');

console.time('Recursive');
for (let i = 0; i < iterations; i++) {
    factorialRecursive(testNum);
}
console.timeEnd('Recursive');

console.time('Tail Recursive');
for (let i = 0; i < iterations; i++) {
    factorialTailRecursive(testNum);
}
console.timeEnd('Tail Recursive');

console.time('Memoized');
for (let i = 0; i < iterations; i++) {
    factorialMemo(testNum);
}
console.timeEnd('Memoized');

// Error handling tests
console.log('\n=== Error Handling Tests ===');
try {
    factorialIterative(-1);
} catch (e) {
    console.log('Negative number error:', e.message);
}

try {
    factorialIterative(1.5);
} catch (e) {
    console.log('Non-integer error:', e.message);
}

module.exports = { 
    factorialIterative, 
    factorialRecursive, 
    factorialTailRecursive, 
    factorialMemo, 
    factorialBigInt 
};
