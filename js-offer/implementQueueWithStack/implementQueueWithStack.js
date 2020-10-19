class Stack {
  // 先进后出
  constructor() {
    this.stack = [];
  }

  push(node) {
    this.stack.push(node);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack1 = new Stack();
const stack2 = new Stack();

// 先进先出

class Queue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	push(node) {
		this.stack1.push(node);
	}

	pop() {
		if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
			throw new Error("Queue is empty");
		}
		
		if (this.stack2.isEmpty()) {
			while (!this.stack1.isEmpty()) {
				this.stack2.push(this.stack1.pop())
			}
		}
	
		return this.stack2.pop()
	}
}
