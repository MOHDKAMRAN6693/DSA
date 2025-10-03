/**
 * Linked List implementation with cycle detection and reversal
 * Time Complexity: Various operations
 * Space Complexity: O(n) for the list
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Add element to the end
    append(val) {
        const newNode = new ListNode(val);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        
        this.size++;
        return this;
    }
    
    // Add element to the beginning
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
        return this;
    }
    
    // Insert at specific position
    insertAt(val, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        
        if (index === 0) {
            return this.prepend(val);
        }
        
        const newNode = new ListNode(val);
        let current = this.head;
        
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return this;
    }
    
    // Remove element by value
    remove(val) {
        if (!this.head) {
            return false;
        }
        
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        
        return false;
    }
    
    // Remove element at index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        if (index === 0) {
            const val = this.head.val;
            this.head = this.head.next;
            this.size--;
            return val;
        }
        
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        const val = current.next.val;
        current.next = current.next.next;
        this.size--;
        return val;
    }
    
    // Get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.val;
    }
    
    // Check if list is empty
    isEmpty() {
        return this.size === 0;
    }
    
    // Get list size
    getSize() {
        return this.size;
    }
    
    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        
        return result;
    }
    
    // String representation
    toString() {
        return this.toArray().join(' -> ');
    }
    
    // Create cycle at specific position
    createCycle(position) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid position for cycle');
        }
        
        let current = this.head;
        let cycleNode = null;
        
        for (let i = 0; i < this.size; i++) {
            if (i === position) {
                cycleNode = current;
            }
            if (i === this.size - 1) {
                current.next = cycleNode;
            }
            current = current.next;
        }
        
        return this;
    }
}

// Detect cycle in linked list
function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Find the start of the cycle
function detectCycle(head) {
    if (!head || !head.next) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    
    // Find meeting point
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            break;
        }
    }
    
    if (!fast || !fast.next) {
        return null; // No cycle
    }
    
    // Find cycle start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Reverse linked list
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

// Reverse linked list recursively
function reverseListRecursive(head) {
    if (!head || !head.next) {
        return head;
    }
    
    const newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// Reverse linked list in groups of k
function reverseKGroup(head, k) {
    if (!head || k <= 1) {
        return head;
    }
    
    let current = head;
    let count = 0;
    
    // Check if we have k nodes
    while (current && count < k) {
        current = current.next;
        count++;
    }
    
    if (count === k) {
        current = reverseKGroup(current, k);
        
        // Reverse current group
        while (count > 0) {
            const next = head.next;
            head.next = current;
            current = head;
            head = next;
            count--;
        }
        
        head = current;
    }
    
    return head;
}

// Find middle of linked list
function findMiddle(head) {
    if (!head) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// Test cases
console.log('=== Linked List Tests ===');

// Basic operations
console.log('\n=== Basic Operations ===');
const list = new LinkedList();
list.append(1).append(2).append(3).append(4).append(5);
console.log('List:', list.toString());
console.log('Size:', list.getSize());

list.prepend(0);
console.log('After prepend 0:', list.toString());

list.insertAt(2.5, 3);
console.log('After insert 2.5 at index 3:', list.toString());

list.remove(2.5);
console.log('After remove 2.5:', list.toString());

// Cycle detection
console.log('\n=== Cycle Detection ===');
const cycleList = new LinkedList();
cycleList.append(1).append(2).append(3).append(4).append(5);
console.log('List before cycle:', cycleList.toString());
console.log('Has cycle:', hasCycle(cycleList.head));

cycleList.createCycle(2);
console.log('Has cycle after creating cycle at position 2:', hasCycle(cycleList.head));

const cycleStart = detectCycle(cycleList.head);
console.log('Cycle starts at node with value:', cycleStart ? cycleStart.val : 'No cycle');

// Reverse linked list
console.log('\n=== Reverse Linked List ===');
const reverseList1 = new LinkedList();
reverseList1.append(1).append(2).append(3).append(4).append(5);
console.log('Original list:', reverseList1.toString());

const reversed = reverseList(reverseList1.head);
console.log('Reversed list:', linkedListToString(reversed));

const reverseList2 = new LinkedList();
reverseList2.append(1).append(2).append(3).append(4).append(5);
const reversedRecursive = reverseListRecursive(reverseList2.head);
console.log('Reversed recursively:', linkedListToString(reversedRecursive));

// Helper function to convert linked list to string
function linkedListToString(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result.join(' -> ');
}

// Find middle
console.log('\n=== Find Middle ===');
const middleList = new LinkedList();
middleList.append(1).append(2).append(3).append(4).append(5);
console.log('List:', middleList.toString());
const middle = findMiddle(middleList.head);
console.log('Middle element:', middle ? middle.val : 'No middle');

// Merge sorted lists
console.log('\n=== Merge Sorted Lists ===');
const list1 = new LinkedList();
list1.append(1).append(3).append(5);
const list2 = new LinkedList();
list2.append(2).append(4).append(6);
console.log('List 1:', list1.toString());
console.log('List 2:', list2.toString());

const merged = mergeTwoLists(list1.head, list2.head);
console.log('Merged:', linkedListToString(merged));

// Performance test
console.log('\n=== Performance Test ===');
const largeList = new LinkedList();
for (let i = 0; i < 10000; i++) {
    largeList.append(i);
}

console.time('Reverse Large List');
reverseList(largeList.head);
console.timeEnd('Reverse Large List');

console.time('Find Middle Large List');
findMiddle(largeList.head);
console.timeEnd('Find Middle Large List');

// Error handling
console.log('\n=== Error Handling Tests ===');
try {
    list.insertAt(10, 100);
} catch (e) {
    console.log('Index out of bounds error:', e.message);
}

try {
    list.removeAt(-1);
} catch (e) {
    console.log('Negative index error:', e.message);
}

module.exports = { 
    ListNode, 
    LinkedList, 
    hasCycle, 
    detectCycle, 
    reverseList, 
    reverseListRecursive, 
    reverseKGroup, 
    findMiddle, 
    mergeTwoLists 
};
