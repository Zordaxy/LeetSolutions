// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x) this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.stack.length) return;
    let pop = this.stack.pop();
    if (pop === this.minStack[this.minStack.length - 1]) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 let stack = new MinStack();
 stack.push(2);
 stack.push(0);
 stack.push(3);
 stack.push(0);
 console.log(stack.getMin());
 stack.pop();
 console.log(stack.getMin());
 stack.pop();
 console.log(stack.getMin());
 stack.pop();
 console.log(stack.getMin());
// 0, 0, 0, 2