                                                   //MINUS TOPICS OF JAVASCRIPT
                                                         //variables
var sheshu="lab";
var reddy="laby";
console.log(sheshu+" weds "+reddy);                                                                                     ///lab weds mami
var reddy="mami";           
                                                        //UNDEFINED
console.log(b);                                                                                                        //undefined
var b;
                                                      //not defined
console.log(z);                                                                                                         // not defined
                                                      //TYPES IN JS
              //   PRIMITIVE
              var a=10;
              
      //   WHILE 
    i=0;
      while(i<=5){
        console.log("sheshu is the best");
        i++;
    } 
    //for loop
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            console.log("SHESHU");
        }
    }
// ARRAYS
    var arr=[[1,11,111],2,3,4,5];
    console.log(arr[0]);
    console.log(arr[0][2]);
//PUSH
var a=[2,4,6,8];
a.push(10);
console.log(a);
//POP
var b=[3,6,9,12,15];
b.pop();
console.log(b);
//SHIFT
var c=[2,4,6,8];
c.shift();
console.log(c);
//UNSHIFT
var d=[2,4,6,8];
d.unshift(3);
console.log(d);
//SPLICE
var e=[1,2,3,4,5];
e.splice(2); 
console.log(e);
var f=[2,4,6,8,10,12,14,16];
f.splice(2,3);
console.log(f);
                                                     //OBJECTS
var object={
    Name:"sheshu",
    age:23,
    class :"10th",
    marks:function abc(q){
        console.log(q);   
    }
};
console.log(object.class);
console.log(object.marks);
                                //  updating objects properties
var object={
    Name:"sheshu",
    age:23,
    class :"10th",
    marks:78  
    };
object.Name="reddy";
console.log(object);
console.log(object.Name);


