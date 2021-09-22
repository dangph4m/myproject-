const handler = promise =>{
    return promise.then(data => [null, data]).catch(error =>[error, underfined]);    
}
class BadRequesError extends Error {
    constructor(statuscode, message){
        super();
        this.statuscode =statuscode;
        this.message = message;
    }
}
module.exports ={
    handler,
    BadRequesError,
}