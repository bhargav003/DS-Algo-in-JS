function Stack (size){
    //This is to store objs in a stack ds
    this._store = {};
    //This to predetermine size of the stack
    this._size = size || Infinity;
    //this helps to keep track of where we are in stack 
    this._count = 0
}
//This Method is to push an object in to stack and returns the current size of the stack
Stack.prototype.push = function (val){
    if(this._count < this._size){
        this._store[this._count++] = val;
        return this._count;
    }
    return "Max size reached and please perform pop before adding new value";
}
//This Method is to pop of the object from the stack //Note it follows LIFO format. So pops out last element 
Stack.prototype.pop = function (){
    var deletedValue = thid._Store[--this.count];
    delete this._Store[this.count];
    if(this.count<0){
        this.count = 0;
    }
    return deletedValue
}
//This method returns the  size of the stack 
Stack.prototype.size = function (){
    return this.count;
}


