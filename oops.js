// PPRACTICING OOPS WITHS JAVASCRIPT

//     FACTORY FUNCTION

// function personMaker(nam,age){
//     const person={
//         name:nam,
//         age:age,
//         talk(){
//             console.log(`hi i am ${nam}`);
//         }
//     };
//     return person ;
// }

// let p1=personMaker("adam",21);
// let p2=personMaker("eve",22);

// The factory function can't be safely extended using the extends keyword because extended objects would inherit from the factory functions prototype property instead of from the prototype property of the constructor used by the factory function.



//                         NEW OPERATOR AND CONSTRUCTOR

// function Person(nam,age){
//     this.name=nam;
//     this.age=age;
// }

// Person.prototype.talke= function(){
//     console.log(`i am ${this.nam}`);
// };

// let P1=new Person("adam",21);
// let P2=new Person("eve",22);

//    Both of them will refer to same instance (use same copy)  


//    CLASS

class Person{
    constructor(nam,age){
        this.name=nam;
        this.age=age;
    }
    talkee(){
        console.log(`hi i am ${this.nam} `);
    }
}

let P1=new Person("adam",21);
let P2=new Person("eve",22);


//              INHERITANCE

class Friend extends Person{
    constructor(nam,age,location){
        super(nam,age);
        this.location=location;
    }
    dosti(){
        console.log("FUN FOR FREE");
    }
}

let f1=new Friend("raghav",20,"thane");
let f2=new Friend("Yaju",21,"Pune");
 



