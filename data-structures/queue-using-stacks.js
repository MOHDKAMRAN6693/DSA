/**
 * Queue implementation using stacks
 * Time Complexity: O(1) amortized for enqueue, O(1) for dequeue
 * Space Complexity: O(n) where n is the number of elements
 */

class QueueUsingStacks {
    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }
    
    // Add element to the rear of the queue
    enqueue(element) {
        this.inputStack.push(element);
        return this;
    }
    
    // Remove and return element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        if (this.outputStack.length === 0) {
            // Move all elements from input to output stack
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }
        
        return this.outputStack.pop();
    }
    
    // Return the front element without removing it
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        if (this.outputStack.length === 0) {
            // Move all elements from input to output stack
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }
        
        return this.outputStack[this.outputStack.length - 1];
    }
    
    // Check if queue is empty
    isEmpty() {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
    
    // Return the size of the queue
    size() {
        return this.inputStack.length + this.outputStack.length;
    }
    
    // Clear the queue
    clear() {
        this.inputStack = [];
        this.outputStack = [];
        return this;
    }
    
    // Convert queue to array
    toArray() {
        const result = [];
        
        // Add output stack elements (in reverse order)
        for (let i = this.outputStack.length - 1; i >= 0; i--) {
            result.push(this.outputStack[i]);
        }
        
        // Add input stack elements (in order)
        result.push(...this.inputStack);
        
        return result;
    }
    
    // String representation of the queue
    toString() {
        return `Queue(${this.toArray().join(', ')})`;
    }
}

// Alternative implementation with O(1) enqueue and O(n) dequeue
class QueueUsingStacksAlternative {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(element) {
        this.stack1.push(element);
        return this;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        // Move all elements from stack1 to stack2
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        
        const element = this.stack2.pop();
        
        // Move remaining elements back to stack1
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        
        return element;
    }
    
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        // Move all elements from stack1 to stack2
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        
        const element = this.stack2[this.stack2.length - 1];
        
        // Move all elements back to stack1
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        
        return element;
    }
    
    isEmpty() {
        return this.stack1.length === 0;
    }
    
    size() {
        return this.stack1.length;
    }
    
    clear() {
        this.stack1 = [];
        this.stack2 = [];
        return this;
    }
}

// Queue with additional utility methods
class AdvancedQueueUsingStacks extends QueueUsingStacks {
    constructor() {
        super();
        this.minStack = []; // For tracking minimum element
    }
    
    enqueue(element) {
        super.enqueue(element);
        
        // Track minimum element
        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        }
        
        return this;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        const element = super.dequeue();
        
        // Update minimum stack if needed
        if (this.minStack.length > 0 && element === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        
        return element;
    }
    
    // Get minimum element in O(1) time
    getMin() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.minStack[this.minStack.length - 1];
    }
    
    // Get maximum element
    getMax() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const allElements = this.toArray();
        return Math.max(...allElements);
    }
    
    // Check if queue is sorted (ascending)
    isSorted() {
        if (this.size() <= 1) return true;
        
        const elements = this.toArray();
        for (let i = 1; i < elements.length; i++) {
            if (elements[i] < elements[i - 1]) {
                return false;
            }
        }
        return true;
    }
}

// Test cases
console.log('=== Queue Using Stacks Tests ===');

// Basic queue operations
console.log('\n=== Basic Queue Operations ===');
const queue = new QueueUsingStacks();

console.log('Initial queue:', queue.toString());
console.log('Is empty:', queue.isEmpty());
console.log('Size:', queue.size());

// Enqueue elements
queue.enqueue(10).enqueue(20).enqueue(30);
console.log('After enqueuing 10, 20, 30:', queue.toString());
console.log('Size:', queue.size());
console.log('Front:', queue.front());

// Dequeue elements
console.log('Dequeued:', queue.dequeue());
console.log('After dequeue:', queue.toString());
console.log('Front:', queue.front());

// Alternative implementation
console.log('\n=== Alternative Implementation ===');
const altQueue = new QueueUsingStacksAlternative();
altQueue.enqueue(1).enqueue(2).enqueue(3);
console.log('Alternative queue:', altQueue.toString());
console.log('Dequeued:', altQueue.dequeue());
console.log('After dequeue:', altQueue.toString());

// Advanced queue
console.log('\n=== Advanced Queue with Min Tracking ===');
const advancedQueue = new AdvancedQueueUsingStacks();
advancedQueue.enqueue(5).enqueue(2).enqueue(8).enqueue(1).enqueue(9);
console.log('Advanced queue:', advancedQueue.toString());
console.log('Minimum:', advancedQueue.getMin());
console.log('Maximum:', advancedQueue.getMax());
console.log('Is sorted:', advancedQueue.isSorted());

// Queue applications
console.log('\n=== Queue Applications ===');

// 1. Level order traversal simulation
function levelOrderTraversal(nodes) {
    const queue = new QueueUsingStacks();
    const result = [];
    
    // Enqueue all nodes
    for (let node of nodes) {
        queue.enqueue(node);
    }
    
    // Process nodes level by level
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        result.push(node);
        
        // Simulate adding children (example)
        if (node * 2 <= 10) {
            queue.enqueue(node * 2);
        }
        if (node * 2 + 1 <= 10) {
            queue.enqueue(node * 2 + 1);
        }
    }
    
    return result;
}

console.log('Level order traversal [1, 2, 3]:', levelOrderTraversal([1, 2, 3]));

// 2. BFS simulation
function bfsSimulation(graph, start) {
    const queue = new QueueUsingStacks();
    const visited = new Set();
    const result = [];
    
    queue.enqueue(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        result.push(node);
        
        // Simulate visiting neighbors
        const neighbors = graph[node] || [];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.enqueue(neighbor);
            }
        }
    }
    
    return result;
}

const graph = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [],
    6: []
};

console.log('BFS from node 1:', bfsSimulation(graph, 1));

// 3. Task scheduling simulation
function taskScheduler(tasks) {
    const queue = new QueueUsingStacks();
    const completed = [];
    
    // Enqueue all tasks
    for (let task of tasks) {
        queue.enqueue(task);
    }
    
    // Process tasks
    while (!queue.isEmpty()) {
        const task = queue.dequeue();
        completed.push(`Completed: ${task}`);
    }
    
    return completed;
}

console.log('Task scheduler:', taskScheduler(['Task1', 'Task2', 'Task3']));

// Performance test
console.log('\n=== Performance Test ===');
const largeQueue = new QueueUsingStacks();
const iterations = 10000;

console.time('Enqueue Operations');
for (let i = 0; i < iterations; i++) {
    largeQueue.enqueue(i);
}
console.timeEnd('Enqueue Operations');

console.time('Dequeue Operations');
for (let i = 0; i < iterations; i++) {
    largeQueue.dequeue();
}
console.timeEnd('Dequeue Operations');

// Error handling
console.log('\n=== Error Handling Tests ===');
const emptyQueue = new QueueUsingStacks();
try {
    emptyQueue.dequeue();
} catch (e) {
    console.log('Dequeue from empty queue:', e.message);
}

try {
    emptyQueue.front();
} catch (e) {
    console.log('Front from empty queue:', e.message);
}

module.exports = { 
    QueueUsingStacks, 
    QueueUsingStacksAlternative, 
    AdvancedQueueUsingStacks 
};
