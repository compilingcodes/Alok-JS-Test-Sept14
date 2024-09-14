var voters=[
      {name:`bob`,age: 30,voted:true},
      {name:`jake`,age:40 ,voted:true},
      {name:`kate`,age:67 ,voted:true},
      {name:`sam`,age: 54,voted:true},
      {name:`phil`,age:45 ,voted:true},
      {name:`ed`,age:16 ,voted:false},
      {name:`tami`,age:20 ,voted:false},
      {name:`mary`,age:23 ,voted:true} ,   
      {name:`becky`,age:43 ,voted:true},
      {name:`joey`,age:21 ,voted:true},
      {name:`jeff`,age:32 ,voted:true}
];

function voterResults(age){
 for (let i=18;i<25;i++){
    console.log(i);
 }
 
 for (let i=26;i<35;i++){
    console.log(i);
 }

 for (let i=36;i<55;i++){
    console.log(i);
 }
}

console.log(voterResults(voters));
