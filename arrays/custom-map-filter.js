/**
 * Implement custom Array.prototype.map() and filter()
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// Custom map implementation
function customMap(arr, callback, thisArg) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof callback !== 'function') {
        throw new Error('Second argument must be a function');
    }
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Call callback with proper context and arguments
        const mappedValue = callback.call(thisArg, arr[i], i, arr);
        result.push(mappedValue);
    }
    
    return result;
}

// Custom filter implementation
function customFilter(arr, callback, thisArg) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof callback !== 'function') {
        throw new Error('Second argument must be a function');
    }
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Call callback with proper context and arguments
        if (callback.call(thisArg, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Custom reduce implementation (bonus)
function customReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof callback !== 'function') {
        throw new Error('Second argument must be a function');
    }
    
    if (arr.length === 0 && initialValue === undefined) {
        throw new Error('Reduce of empty array with no initial value');
    }
    
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    
    return accumulator;
}

// Custom forEach implementation (bonus)
function customForEach(arr, callback, thisArg) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof callback !== 'function') {
        throw new Error('Second argument must be a function');
    }
    
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

// Test cases
console.log('=== Custom Array Methods Tests ===');

const testArray = [1, 2, 3, 4, 5];

console.log('Original array:', testArray);

// Test custom map
console.log('\n=== Custom Map Tests ===');
const doubled = customMap(testArray, x => x * 2);
console.log('customMap (double):', doubled);

const withIndex = customMap(testArray, (value, index) => `${index}: ${value}`);
console.log('customMap (with index):', withIndex);

// Test custom filter
console.log('\n=== Custom Filter Tests ===');
const evens = customFilter(testArray, x => x % 2 === 0);
console.log('customFilter (evens):', evens);

const greaterThan3 = customFilter(testArray, x => x > 3);
console.log('customFilter (greater than 3):', greaterThan3);

// Test custom reduce
console.log('\n=== Custom Reduce Tests ===');
const sum = customReduce(testArray, (acc, curr) => acc + curr, 0);
console.log('customReduce (sum):', sum);

const product = customReduce(testArray, (acc, curr) => acc * curr, 1);
console.log('customReduce (product):', product);

// Test custom forEach
console.log('\n=== Custom ForEach Tests ===');
console.log('customForEach (print each):');
customForEach(testArray, (value, index) => {
    console.log(`  Index ${index}: ${value}`);
});

// Test with objects
console.log('\n=== Object Array Tests ===');
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = customMap(people, person => person.name);
console.log('Names:', names);

const adults = customFilter(people, person => person.age >= 30);
console.log('Adults:', adults);

// Test with thisArg
console.log('\n=== ThisArg Tests ===');
const multiplier = {
    factor: 3,
    multiply: function(value) {
        return value * this.factor;
    }
};

const tripled = customMap(testArray, multiplier.multiply, multiplier);
console.log('Tripled with thisArg:', tripled);

module.exports = { 
    customMap, 
    customFilter, 
    customReduce, 
    customForEach 
};
