function display(data){
    if(Array.isArray(data)){
    console.log("Data is an array of passengers :");
    for(var d of data){
        console.log(d);
    }
}
    else{
        console.log("Data is single passenger :");
        console.log(data);}
}
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

obj={
        name:"Lucky ",
        age:23,
        passport:"j38642"
}
display(passengers);
display(obj);

