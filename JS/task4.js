function div(a, b) {
    try {
        if(b==0)
            throw new Error(error);
        console.log(a/b);
    }
    catch(error)
    {
        console.log("Division by zero is not allowed");
    }
    finally {
        console.log("execution completed");
    }
}
div(5,2);