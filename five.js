let n = prompt("Enter a number");
let fact = 1;
for(let i=1;i<=n;i++){
    fact = fact * i;
}
console.log("The factorial value of " , n , "is" , fact);
for(let j=1;j<=100;j++){
    console.log("I love you Srikanth");
}
let sum = 0;
for(let k=1;k<=10000;k++){
    sum = sum + k;
}
console.log("The sum of first 10000 numbers is : " , sum);
let a = 1;
while(a<=10){
    console.log("a = " , a);
    console.log("Hey Prasanna!!");
    a++;
}
let str = "Prasanna Srikanth";
for(let val of str){
    console.log("val = " , val);
}
let student = {
    name : "Prasanna Kundurthi",
    age : 20,
    cgpa : 9.03,
    isPass : true,
    placeOfBirth : "Guntur",
};
for(let i in student){
    console.log("Key = ", i , "value = ", student[i]);
}