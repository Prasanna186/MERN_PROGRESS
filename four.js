let score = prompt("Enter your score : ");
if(score >=90 && score <=100){
    console.log("grade A");
}
else if(score >=80 && score < 90){
    console.log("grade B");
}else if(score >=70 && score < 80){
    console.log("grade C");
}else if(score >=60 && score < 70){
    console.log("grade D");
}else if(score >=50 && score < 60){
    console.log("grade E");
}else{
    console.log("You're failed please improve yourself!!!!");
}