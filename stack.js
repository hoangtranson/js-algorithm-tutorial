const Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count ++;
    }

    this.pop = function(){
        if(this.count == 0) {
            return undefined;
        }
        this.count --;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;

    }

    this.size = function() {
        return this.count;
    }

    this.peak = function() {
        return this.storage[this.count - 1];
    }
}

const _stack = new Stack();

_stack.push("a");
_stack.push("b");
_stack.push("c");

console.log(_stack.pop());
console.log(_stack.peak());