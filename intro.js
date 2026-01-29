/*// ES6 "user strict"
console.log("first")
//document.write("From JS")

a=10;//global defined  var bhi window ke andar hota hai
//let ye window ke andar nahi hota
console.log(window);
*/
//let a=10;// a nahi show hoga window me
//console.log(window);

//var redeclare is allowed
//var a=10;
//var a=20;
/*function hello(){
    if(true){
        let x=10;//locally to functionally scope and redeclare is not allowed but not show outer output in terminal
        console.log("inner",x);
    }
    console.log("outer",x);
}
hello();*///var globally assigned value is same like x is same

//console.log(z);//cannot access befor initialization
//let z=20;

//reassignment and redeclare is not allowed in const mein;

const arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
arr=[1,2,3,4];// aise nahi kar sakte
