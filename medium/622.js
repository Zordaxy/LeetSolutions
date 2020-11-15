// 622. Design Circular Queue
// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.start = 0;
    this.size = 0;
    this.data = new Array(k);
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    // // resize functionality
    // if (this.size === this.data.length) {
    //     // extend data array
    //     let index = this.start === 0 ? this.data.length : (this.start + this.size) % this.data.length;
    //     this.data.splice(index, 0, ...new Array(Math.ceil(this.size / 2)))
    //     if (index < this.start) this.start += index;
    // }

    if (this.isFull()) return false;

    let index = this.size === 0 ? 0 : (this.start + this.size) % this.data.length;
    this.data[index] = value;
    this.size++;

    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.size === 0) return false;
    this.data[this.start] = null;
    this.start = (this.start + 1) % this.data.length;
    this.size--;
    if (!this.size) this.start = 0;

    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.size === 0) return -1;

    let index = (this.start + this.size - 1) % this.data.length;
    return this.data[index];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.size <= 0) return -1;
    return this.data[this.start];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.data.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

 let queue = new MyCircularQueue(5);
 queue.enQueue(5);
 queue.enQueue(6);
 queue.enQueue(7);
 queue.enQueue(8);
 queue.enQueue(9);
 queue.enQueue(10);
 queue.enQueue(11);
 queue.deQueue();
 queue.enQueue(12);
 queue.enQueue(13);

 console.log(queue.data);
 console.log(queue.Front());
 console.log(queue.Rear());
 console.log(queue.isEmpty());
 console.log(queue.isFull());