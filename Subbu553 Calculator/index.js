function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}
module.exports={
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}
const calculator=require('./index')
calculator.addition(1,5)
calculator.subtraction(5,6)
calculator.multiplication(4,9)
calculator.division(8,2)