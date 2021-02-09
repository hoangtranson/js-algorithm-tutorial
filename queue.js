const Queue = function() {
    this.collection = [];

    this.enqueue = function(_value){
        this.collection.push(_value);
    }

    this.dequeue = function() {
        return this.collection.shift();
    }

    this.front = function() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.collection[0];
    }

    this.size = function() {
        return this.collection.length;
    }

    this.isEmpty = function() {
        return this.collection.length == 0;
    }
}

const _queue = new Queue();
_queue.enqueue(1);
_queue.enqueue(2);
_queue.enqueue(3);

const _first = _queue.front();
const _size = _queue.size();

_queue.dequeue();
_queue.dequeue();
_queue.dequeue();
const _isEmpty = _queue.isEmpty();