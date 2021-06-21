class MyEventPublisher extends EventEmitter {
    _numbers = [];
    addNumber(number){
        this._numbers.push(number)
        if(number %2 === 0){
            this.emit("even", {number})
        }else{
            this.emit("odd", )
        }
    }
}