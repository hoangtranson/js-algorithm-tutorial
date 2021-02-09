const MySet = function() {
    this.collection = [];

    this.has = function(_value){
        return (this.collection.indexOf(_value) > -1);
    }

    this.add = function(_value) {
        if(!this.has(_value)) {
            this.collection.push(_value);
            return true;
        }

        return false;
    }

    this.values = function() {
        return this.collection;
    }

    this.remove = function(_value){
        if(this.has(_value)) {
            const _index = this.collection.indexOf(_value);
            this.collection.splice(_index, 1);
            return true;
        }

        return false;
    }

    this.union = function(_set) {
        let _newSet = new MySet();
        let _firstSet = this.values();
        let _secondSet = _set.values();

        _firstSet.forEach(element => {
            _newSet.add(element);
        });

        _secondSet.forEach(element => {
            _newSet.add(element);
        });

        return _newSet;
    }

    this.intersection = function(_set){
        let _newSet = new MySet();
        let _firstSet = this.values();

        _firstSet.forEach(element => {
            if(_set.has(element)){
                _newSet.add(element);
            }
        });

        return _newSet;
    }

    this.different = function(_set){
        let _newSet = new MySet();
        let _firstSet = this.values();

        _firstSet.forEach(element => {
            if(!_set.has(element)){
                _newSet.add(element);
            }
        });

        return _newSet;
    }

    this.subset = function(_set){
        let _firstSet = this.values();

        return _firstSet.every( element => {
            return _set.has(element);
        })
    }

    this.size = function(){
        return this.collection.length;
    }
}

const _set1 = new MySet();
const _set2 = new MySet();

_set1.add("a");
_set1.add("b");
_set1.add("c");
_set2.add("c");
_set2.add("d");
_set2.add("e");

const _set3 = _set1.subset(_set2)
