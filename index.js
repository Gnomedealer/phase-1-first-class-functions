function receivesAFunction(callback){ 
    return callback(function () {return "hello"})
}
console.log(callback)

function returnsANamedFunction(){
    return function greetings(){return 'Hi'}
}

function returnsAnAnonymousFunction(){ 
    return function () {return "Boo"}
}