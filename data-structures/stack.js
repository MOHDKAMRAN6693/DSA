/**
 * Stack implementation using arrays
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) where n is the number of elements
 */

class Stack {
    constructor() {
        this.items = [];
    }
    
    // Push element to the top of the stack
    push(element) {
        this.items.push(element);
        return this;
    }
    
    // Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }
    
    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
    
    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // Return the size of the stack
    size() {
        return this.items.length;
    }
    
    // Clear the stack
    clear() {
        this.items = [];
        return this;
    }
    
    // Convert stack to array
    toArray() {
        return [...this.items];
    }
    
    // String representation of the stack
    toString() {
        return `Stack(${this.items.join(', ')})`;
    }
    
    // Search for an element and return its position (1-based)
    search(element) {
        const index = this.items.lastIndexOf(element);
        return index === -1 ? -1 : this.items.length - index;
    }
}

// Alternative implementation with fixed size
class FixedSizeStack {
    constructor(maxSize) {
        if (typeof maxSize !== 'number' || maxSize <= 0) {
            throw new Error('Max size must be a positive number');
        }
        this.items = [];
        this.maxSize = maxSize;
    }
    
    push(element) {
        if (this.isFull()) {
            throw new Error('Stack overflow: Cannot push to full stack');
        }
        this.items.push(element);
        return this;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow: Cannot pop from empty stack');
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    isFull() {
        return this.items.length === this.maxSize;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
        return this;
    }
}

// Stack with additional utility methods
class AdvancedStack extends Stack {
    constructor() {
        super();
        this.minStack = new Stack(); // For tracking minimum element
    }
    
    push(element) {
        super.push(element);
        
        // Track minimum element
        if (this.minStack.isEmpty() || element <= this.minStack.peek()) {
            this.minStack.push(element);
        }
        
        return this;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        
        const element = super.pop();
        
        // Update minimum stack
        if (element === this.minStack.peek()) {
            this.minStack.pop();
        }
        
        return element;
    }
    
    // Get minimum element in O(1) time
    getMin() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.minStack.peek();
    }
    
    // Get maximum element
    getMax() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return Math.max(...this.items);
    }
    
    // Check if stack is sorted (ascending)
    isSorted() {
        if (this.size() <= 1) return true;
        
        const temp = [];
        let prev = this.pop();
        temp.push(prev);
        let sorted = true;
        
        while (!this.isEmpty()) {
            const current = this.pop();
            temp.push(current);
            if (current > prev) {
                sorted = false;
            }
            prev = current;
        }
        
        // Restore stack
        while (temp.length > 0) {
            this.push(temp.pop());
        }
        
        return sorted;
    }
}

// Test cases
console.log('=== Stack Implementation Tests ===');

// Basic stack operations
console.log('\n=== Basic Stack Operations ===');
const stack = new Stack();

console.log('Initial stack:', stack.toString());
console.log('Is empty:', stack.isEmpty());
console.log('Size:', stack.size());

// Push elements
stack.push(10).push(20).push(30);
console.log('After pushing 10, 20, 30:', stack.toString());
console.log('Size:', stack.size());
console.log('Peek:', stack.peek());

// Pop elements
console.log('Popped:', stack.pop());
console.log('After pop:', stack.toString());
console.log('Peek:', stack.peek());

// Search
console.log('Search for 20:', stack.search(20));
console.log('Search for 50:', stack.search(50));

// Fixed size stack
console.log('\n=== Fixed Size Stack ===');
const fixedStack = new FixedSizeStack(3);
fixedStack.push(1).push(2).push(3);
console.log('Fixed stack:', fixedStack.toString());
console.log('Is full:', fixedStack.isFull());

try {
    fixedStack.push(4);
} catch (e) {
    console.log('Overflow error:', e.message);
}

// Advanced stack with min tracking
console.log('\n=== Advanced Stack with Min Tracking ===');
const advancedStack = new AdvancedStack();
advancedStack.push(5).push(2).push(8).push(1).push(9);
console.log('Advanced stack:', advancedStack.toString());
console.log('Minimum:', advancedStack.getMin());
console.log('Maximum:', advancedStack.getMax());

// Stack applications
console.log('\n=== Stack Applications ===');

// 1. Reverse a string
function reverseStringWithStack(str) {
    const stack = new Stack();
    
    // Push all characters
    for (let char of str) {
        stack.push(char);
    }
    
    // Pop all characters
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    
    return reversed;
}

console.log('Reverse "hello":', reverseStringWithStack("hello"));

// 2. Check balanced parentheses
function isBalancedParentheses(str) {
    const stack = new Stack();
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of str) {
        if (char in pairs) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (stack.isEmpty()) return false;
            
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    
    return stack.isEmpty();
}

console.log('Balanced "()[]{}":', isBalancedParentheses("()[]{}"));
console.log('Balanced "([)]":', isBalancedParentheses("([)]"));

// 3. Decimal to binary conversion
function decimalToBinary(decimal) {
    const stack = new Stack();
    
    while (decimal > 0) {
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    
    let binary = '';
    while (!stack.isEmpty()) {
        binary += stack.pop();
    }
    
    return binary || '0';
}

console.log('Decimal 10 to binary:', decimalToBinary(10));

// Performance test
console.log('\n=== Performance Test ===');
const largeStack = new Stack();
const iterations = 10000;

console.time('Push Operations');
for (let i = 0; i < iterations; i++) {
    largeStack.push(i);
}
console.timeEnd('Push Operations');

console.time('Pop Operations');
for (let i = 0; i < iterations; i++) {
    largeStack.pop();
}
console.timeEnd('Pop Operations');

// Error handling
console.log('\n=== Error Handling Tests ===');
const emptyStack = new Stack();
try {
    emptyStack.pop();
} catch (e) {
    console.log('Pop from empty stack:', e.message);
}

try {
    emptyStack.peek();
} catch (e) {
    console.log('Peek from empty stack:', e.message);
}

module.exports = { Stack, FixedSizeStack, AdvancedStack };
