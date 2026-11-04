passengers=[
    {
        name:"Anil kumar",
        age:30,
        passport:"A1234567"
    },
    {
        name:"Sunil kumar",
        age:28,
        passport:"B9876543"
    }
];
console.log("First Passenger Name: "+passengers[0].name);
console.log("Second Passenger Name: "+passengers[1].name);
for(var i=0;i<passengers.length;i++){
    console.log(`Passenger ${i+1} : Name - ${passengers[i].name} , Age - ${passengers[i].age} , PassportNumber - ${passengers[i].passport}`);
}
 for(var i=0;i<passengers.length;i++ ){
    console.log(`Passenger Name : ${passengers[i].name} ,Age : ${passengers[i].age} , PassportNumber :${passengers[i].passport}`);
 }
console.log("git check");
