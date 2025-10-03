/**
 * Validate parentheses (balanced brackets)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function isValidParentheses(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (char in pairs) {
            // Opening bracket
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            // Closing bracket
            if (stack.length === 0) {
                return false;
            }
            
            const last = stack.pop();
            if (pairs[last] !== char) {
                return false;
            }
        }
        // Ignore other characters
    }
    
    return stack.length === 0;
}

// Alternative implementation using counter for single type
function isValidParenthesesCounter(s, openChar = '(', closeChar = ')') {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    let count = 0;
    
    for (let char of s) {
        if (char === openChar) {
            count++;
        } else if (char === closeChar) {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    
    return count === 0;
}

// Implementation that returns the position of first invalid bracket
function findInvalidParenthesesPosition(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char in pairs) {
            stack.push({ char, position: i });
        } else if (Object.values(pairs).includes(char)) {
            if (stack.length === 0) {
                return { valid: false, position: i, type: 'unmatched_closing' };
            }
            
            const last = stack.pop();
            if (pairs[last.char] !== char) {
                return { valid: false, position: i, type: 'mismatched_brackets' };
            }
        }
    }
    
    if (stack.length > 0) {
        return { valid: false, position: stack[0].position, type: 'unmatched_opening' };
    }
    
    return { valid: true, position: -1, type: 'valid' };
}

// Implementation that fixes simple parentheses issues
function fixParentheses(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    let result = s;
    let changed = true;
    
    while (changed) {
        changed = false;
        const original = result;
        
        // Remove valid pairs
        result = result.replace(/\(\)/g, '');
        result = result.replace(/\[\]/g, '');
        result = result.replace(/\{\}/g, '');
        
        if (result !== original) {
            changed = true;
        }
    }
    
    return result;
}

// Implementation for multiple bracket types with priority
function isValidParenthesesPriority(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const stack = [];
    const brackets = {
        '(': { type: 'round', priority: 1 },
        '[': { type: 'square', priority: 2 },
        '{': { type: 'curly', priority: 3 },
        ')': { type: 'round', priority: 1 },
        ']': { type: 'square', priority: 2 },
        '}': { type: 'curly', priority: 3 }
    };
    
    for (let char of s) {
        if (['(', '[', '{'].includes(char)) {
            // Opening bracket
            if (stack.length > 0 && brackets[char].priority > stack[stack.length - 1].priority) {
                return false; // Higher priority bracket cannot be inside lower priority
            }
            stack.push({ char, priority: brackets[char].priority });
        } else if ([')', ']', '}'].includes(char)) {
            // Closing bracket
            if (stack.length === 0) {
                return false;
            }
            
            const last = stack.pop();
            if (brackets[char].type !== brackets[last.char].type) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Implementation that counts different types of brackets
function countParentheses(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }
    
    const counts = {
        round: { open: 0, close: 0 },
        square: { open: 0, close: 0 },
        curly: { open: 0, close: 0 }
    };
    
    for (let char of s) {
        switch (char) {
            case '(':
                counts.round.open++;
                break;
            case ')':
                counts.round.close++;
                break;
            case '[':
                counts.square.open++;
                break;
            case ']':
                counts.square.close++;
                break;
            case '{':
                counts.curly.open++;
                break;
            case '}':
                counts.curly.close++;
                break;
        }
    }
    
    return counts;
}

// Test cases
console.log('=== Validate Parentheses Tests ===');

const testCases = [
    "()",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}",
    "((()))",
    "()()()",
    "((())",
    ")))(((",
    "a(b[c]d)e",
    "{[()]}",
    "{[()]",
    "{[()]}",
    "",
    "no brackets",
    "((()))",
    "([{}])",
    "([)]",
    "{[()]}",
    "{[()]"
];

testCases.forEach((testCase, index) => {
    console.log(`\nTest ${index + 1}: "${testCase}"`);
    console.log('Valid:', isValidParentheses(testCase));
    console.log('Invalid position:', findInvalidParenthesesPosition(testCase));
    console.log('Fixed:', fixParentheses(testCase));
    console.log('Counts:', countParentheses(testCase));
});

// Test with priority
console.log('\n=== Priority Tests ===');
const priorityTests = [
    "([{}])", // Valid priority
    "([)]",   // Invalid priority
    "{[()]}", // Valid priority
    "{[()]"   // Invalid - missing closing
];

priorityTests.forEach((testCase, index) => {
    console.log(`Priority Test ${index + 1}: "${testCase}"`);
    console.log('Valid with priority:', isValidParenthesesPriority(testCase));
});

// Test single type parentheses
console.log('\n=== Single Type Tests ===');
const singleTypeTests = [
    "((()))",
    "()()()",
    "((())",
    ")))((("
];

singleTypeTests.forEach((testCase, index) => {
    console.log(`Single Type Test ${index + 1}: "${testCase}"`);
    console.log('Valid:', isValidParenthesesCounter(testCase));
});

// Performance test
console.log('\n=== Performance Test ===');
const longString = "()[]{}".repeat(10000);
const iterations = 100;

console.time('Stack Method');
for (let i = 0; i < iterations; i++) {
    isValidParentheses(longString);
}
console.timeEnd('Stack Method');

console.time('Counter Method');
for (let i = 0; i < iterations; i++) {
    isValidParenthesesCounter(longString);
}
console.timeEnd('Counter Method');

// Edge cases
console.log('\n=== Edge Cases ===');
console.log('Empty string:', isValidParentheses(""));
console.log('Single opening:', isValidParentheses("("));
console.log('Single closing:', isValidParentheses(")"));
console.log('Mixed brackets:', isValidParentheses("([{}])"));
console.log('Nested brackets:', isValidParentheses("(([{}]))"));

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    isValidParentheses(123);
} catch (e) {
    console.log('Non-string error:', e.message);
}

module.exports = { 
    isValidParentheses, 
    isValidParenthesesCounter, 
    findInvalidParenthesesPosition, 
    fixParentheses, 
    isValidParenthesesPriority, 
    countParentheses 
};
