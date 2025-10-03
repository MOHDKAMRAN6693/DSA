/**
 * DSA Solutions Index
 * This file provides easy access to all implemented solutions
 */

// String algorithms
const reverseString = require('./strings/reverse-string');
const palindromeCheck = require('./strings/palindrome-check');
const firstNonRepeating = require('./strings/first-non-repeating');
const countVowelsConsonants = require('./strings/count-vowels-consonants');

// Array algorithms
const largestSmallest = require('./arrays/largest-smallest');
const removeDuplicates = require('./arrays/remove-duplicates');
const customMapFilter = require('./arrays/custom-map-filter');
const mergeSortedArrays = require('./arrays/merge-sorted-arrays');

// General algorithms
const factorial = require('./algorithms/factorial');
const missingNumber = require('./algorithms/missing-number');

// Export all solutions
module.exports = {
    // String algorithms
    strings: {
        reverseString: reverseString.reverseString,
        reverseStringTwoPointers: reverseString.reverseStringTwoPointers,
        isPalindrome: palindromeCheck.isPalindrome,
        isPalindromeRecursive: palindromeCheck.isPalindromeRecursive,
        firstNonRepeatingChar: firstNonRepeating.firstNonRepeatingChar,
        firstNonRepeatingCharWithChar: firstNonRepeating.firstNonRepeatingCharWithChar,
        countVowelsAndConsonants: countVowelsConsonants.countVowelsAndConsonants,
        countVowelsAndConsonantsDetailed: countVowelsConsonants.countVowelsAndConsonantsDetailed
    },
    
    // Array algorithms
    arrays: {
        findLargestAndSmallest: largestSmallest.findLargestAndSmallest,
        findLargestAndSmallestIndices: largestSmallest.findLargestAndSmallestIndices,
        removeDuplicates: removeDuplicates.removeDuplicates,
        removeDuplicatesSorted: removeDuplicates.removeDuplicatesSorted,
        customMap: customMapFilter.customMap,
        customFilter: customMapFilter.customFilter,
        customReduce: customMapFilter.customReduce,
        mergeSortedArrays: mergeSortedArrays.mergeSortedArrays,
        mergeSortedArraysUnique: mergeSortedArrays.mergeSortedArraysUnique
    },
    
    // General algorithms
    algorithms: {
        factorialIterative: factorial.factorialIterative,
        factorialRecursive: factorial.factorialRecursive,
        factorialTailRecursive: factorial.factorialTailRecursive,
        findMissingNumber: missingNumber.findMissingNumber,
        findMissingNumberXOR: missingNumber.findMissingNumberXOR,
        findMissingNumbers: missingNumber.findMissingNumbers
    }
};

// Example usage
console.log('=== DSA Solutions Index ===');
console.log('All solutions are available through the exported object.');
console.log('Example usage:');
console.log('const dsa = require("./index");');
console.log('console.log(dsa.strings.reverseString("hello"));');
console.log('console.log(dsa.arrays.findLargestAndSmallest([1, 5, 3, 9, 2]));');
console.log('console.log(dsa.algorithms.factorialIterative(5));');
