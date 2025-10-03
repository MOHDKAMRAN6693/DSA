/**
 * Group anagrams from a list of strings
 * Time Complexity: O(n * m * log(m)) where n is number of strings, m is average length
 * Space Complexity: O(n * m)
 */

function groupAnagrams(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const anagramMap = new Map();
    
    for (let str of strs) {
        if (typeof str !== 'string') {
            throw new Error('All elements must be strings');
        }
        
        // Sort characters to create key
        const sorted = str.split('').sort().join('');
        
        if (!anagramMap.has(sorted)) {
            anagramMap.set(sorted, []);
        }
        
        anagramMap.get(sorted).push(str);
    }
    
    return Array.from(anagramMap.values());
}

// Alternative implementation using character count
function groupAnagramsCount(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const anagramMap = new Map();
    
    for (let str of strs) {
        if (typeof str !== 'string') {
            throw new Error('All elements must be strings');
        }
        
        // Create character count key
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join(',');
        
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        
        anagramMap.get(key).push(str);
    }
    
    return Array.from(anagramMap.values());
}

// Implementation that returns anagram groups with their keys
function groupAnagramsWithKeys(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const anagramMap = new Map();
    
    for (let str of strs) {
        if (typeof str !== 'string') {
            throw new Error('All elements must be strings');
        }
        
        const sorted = str.split('').sort().join('');
        
        if (!anagramMap.has(sorted)) {
            anagramMap.set(sorted, []);
        }
        
        anagramMap.get(sorted).push(str);
    }
    
    const result = [];
    for (let [key, group] of anagramMap) {
        result.push({ key, group });
    }
    
    return result;
}

// Implementation that finds anagrams of a specific string
function findAnagrams(strs, target) {
    if (!Array.isArray(strs)) {
        throw new Error('First argument must be an array');
    }
    
    if (typeof target !== 'string') {
        throw new Error('Second argument must be a string');
    }
    
    const targetSorted = target.split('').sort().join('');
    const anagrams = [];
    
    for (let str of strs) {
        if (typeof str !== 'string') {
            throw new Error('All elements must be strings');
        }
        
        if (str !== target && str.split('').sort().join('') === targetSorted) {
            anagrams.push(str);
        }
    }
    
    return anagrams;
}

// Implementation that groups anagrams and sorts them
function groupAnagramsSorted(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const groups = groupAnagrams(strs);
    
    // Sort each group
    for (let group of groups) {
        group.sort();
    }
    
    // Sort groups by first element
    groups.sort((a, b) => a[0].localeCompare(b[0]));
    
    return groups;
}

// Implementation that handles case-insensitive anagrams
function groupAnagramsCaseInsensitive(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const anagramMap = new Map();
    
    for (let str of strs) {
        if (typeof str !== 'string') {
            throw new Error('All elements must be strings');
        }
        
        const lowerStr = str.toLowerCase();
        const sorted = lowerStr.split('').sort().join('');
        
        if (!anagramMap.has(sorted)) {
            anagramMap.set(sorted, []);
        }
        
        anagramMap.get(sorted).push(str);
    }
    
    return Array.from(anagramMap.values());
}

// Implementation that returns statistics about anagram groups
function groupAnagramsWithStats(strs) {
    if (!Array.isArray(strs)) {
        throw new Error('Input must be an array');
    }
    
    const groups = groupAnagrams(strs);
    const stats = {
        totalGroups: groups.length,
        largestGroupSize: Math.max(...groups.map(g => g.length)),
        smallestGroupSize: Math.min(...groups.map(g => g.length)),
        averageGroupSize: groups.reduce((sum, g) => sum + g.length, 0) / groups.length,
        groups: groups.map(group => ({
            size: group.length,
            anagrams: group
        }))
    };
    
    return stats;
}

// Test cases
console.log('=== Group Anagrams Tests ===');

const testCases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    ["a"],
    [""],
    ["listen", "silent", "enlist", "tinsel"],
    ["abc", "bca", "cab", "xyz", "yzx", "zxy"],
    ["hello", "world", "dlrow", "olleh"],
    ["", "a", "ab", "ba"]
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log('Input:', testCase);
    console.log('Grouped:', groupAnagrams(testCase));
    console.log('With keys:', groupAnagramsWithKeys(testCase));
    console.log('Sorted:', groupAnagramsSorted(testCase));
    console.log('Case insensitive:', groupAnagramsCaseInsensitive(testCase));
});

// Test finding anagrams of specific string
console.log('\n=== Find Anagrams Tests ===');
const testArray = ["listen", "silent", "enlist", "tinsel", "hello", "world"];
const target = "listen";
console.log('Array:', testArray);
console.log(`Anagrams of "${target}":`, findAnagrams(testArray, target));

// Test with statistics
console.log('\n=== Statistics Test ===');
const statsArray = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];
console.log('Array:', statsArray);
console.log('Statistics:', groupAnagramsWithStats(statsArray));

// Performance test
console.log('\n=== Performance Test ===');
const largeArray = Array.from({ length: 1000 }, (_, i) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
});

console.time('Sorting Method');
groupAnagrams(largeArray);
console.timeEnd('Sorting Method');

console.time('Count Method');
groupAnagramsCount(largeArray);
console.timeEnd('Count Method');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Empty array:', groupAnagrams([]));
console.log('Single string:', groupAnagrams(["hello"]));
console.log('Empty strings:', groupAnagrams(["", "", "a"]));
console.log('No anagrams:', groupAnagrams(["abc", "def", "ghi"]));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    groupAnagrams("not an array");
} catch (e) {
    console.log('Non-array error:', e.message);
}

try {
    groupAnagrams([1, 2, 3]);
} catch (e) {
    console.log('Non-string elements error:', e.message);
}

module.exports = { 
    groupAnagrams, 
    groupAnagramsCount, 
    groupAnagramsWithKeys, 
    findAnagrams, 
    groupAnagramsSorted, 
    groupAnagramsCaseInsensitive, 
    groupAnagramsWithStats 
};
