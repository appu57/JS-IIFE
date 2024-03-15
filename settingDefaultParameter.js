function testParameter(x=5) //default parameter
{
    console.log(x);
}

testParameter();




/* Setting default Parameter using IIFE */

function test(x=(()=>{
    console.log("X is undefined");
    return 5;
})())
{
   x = typeof x==='number'?x*5 :'Not a number';
   return x;
}

console.log("With valid arguement"+test(4));   //answer is 20
console.log("With undefined arguement"+test()); //answer is 25

//The Immediately Invoked Function Expression (IIFE) is executed when the default value is needed, 
//which happens only if the function is called without providing an argument for x. If you provide an argument when calling the function, the default value is not used, and the IIFE is not invoked.