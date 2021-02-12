const Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

const BTS = function() {
    this.root = null;

    this.add = function(_value){
        const _node = this.root;

        if(_node == null) {
            this.root = new Node(_value);
            return;
        }else {
            const searchTree = function(node) {
                if(_value < node.data) {
                    if(node.left == null) {
                        node.left = new Node(_value);
                        return;
                    }else {
                        return searchTree(node.left);
                    }
                }else if(_value > node.data) {
                    if(node.right == null) {
                        node.right = new Node(_value);
                        return;
                    }else {
                        return searchTree(node.right);
                    }
                }else {
                    return null;
                }
            }

            return searchTree(node);
        }
    }

    this.findMin = function() {
        let _current = this.root;

        while(_current.left != null) {
            _current = _current.left;
        }

        return _current;
    }

    this.findMax = function() {
        let _current = this.root;

        while(_current.right != null) {
            _current = _current.right;
        }

        return _current;
    }

    this.findValue = function(_value) {
        let _current = this.root;

        while(_current.data != _value) {
            if(_value < _current.data) {
                _current = _current.left;
            } else {
                _current = _current.right;
            }

            if(_current == null) {
                return null;
            }
        }

        return _current;
    }

    this.isPresent = function(_value) {
        let _current = this.root;

        while(_current) {
            if(_value == _current.data) {
                return true
            } else {
                if(_value < _current.data) {
                    _current = _current.left;
                }else {
                    _current = _current.right;
                }
            }
        }

        return false;
    }

    this.remove = function(_value) {
        const removeNode = function(node, value) {
            if(node == null) {
                return null;
            }

            if(_value == node.data) {
                if(node.left == null && node.right == null) {
                    return null;
                }

                if(node.left == null) {
                    return node.right;
                }

                if(node.right == null) {
                    return node.left;
                }

                let temp = node.right;

                while(temp.left != null) {
                    temp = temp.left;
                }

                node.data = temp.data;
                node.right = removeNode(node.right, data);
            }else if(_value < node.data) {
                node.left = removeNode(node.left, _value);
                return node;
            }else{
                node.right = removeNode(node.right, _value);
                return node;
            }
        }
        this.root = removeNode(this.root, _value);
    }
}

const _bst = new BTS();

_bst.add(4);
_bst.add(2);
_bst.add(6);
_bst.add(1);
_bst.add(3);
_bst.add(5);
_bst.add(7);
_bst.remove(4);
console.log(_bst.findMin());
console.log(_bst.findMax());
console.log(_bst.isPresent(4));
