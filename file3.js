const aa=()=>{return {user: "name"}};
console.log(aa());

const bb=()=> [1,2,3,4,5,6];
console.log(bb());

const user={
    name : "aj", age: 20,
    welcome:function (){
        console.log(`hello ${this.name}`); //temporal literals back tick (not single quote)
        console.log(this)
    }
};

user.welcome();
user.name="ajay";
user.welcome();
const cc=user.welcome;
// console.log(cc);