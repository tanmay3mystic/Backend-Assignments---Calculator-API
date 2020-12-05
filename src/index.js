const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/" , (req,res)=>{
    res.send("Hello world!");
});

const perform = (num1 , num2 , oprt)=>{
    let stat , res=null , msg="";
    if(num1<-1000000 || num2<-1000000) {stat="error";msg="Underflow";}
    else
    if(num1>1000000 || num2>1000000){stat="error" ; msg = "Overflow";}
    else{
        switch(oprt) {
            case "add" : stat="success";
                    msg= "the sum of given two numbers";
                    res=num1+num2;
                    break;
            case "sub" : stat="success";
                msg= "the difference of given two numbers";
                res=num1-num2;
                break;
            case "multiply" :stat="success";
                    msg= "The product of given numbers";
                    res=num1*num2;
                    break;
            case "divide" : stat=num2===0?"error":"success";
                msg= num2===0? "Cannot divide by zero":"The product of given numbers";
                res=num2!=0?num1/num2:null;
                break;
            default : res=null;
        }
     }
    if(res<-1000000) {stat="error";msg="Underflow";}
    else if (res>1000000) {stat="error" ; msg = "Overflow";}

    return {
        status:stat , 
        message:msg,
        result: res
    }


}

app.post('/:operation' , (req,res)=>{
    const body = req.body;
    const oprt = req.params.operation;

    const num1= body.num1 , num2=body.num2 ; 
    if(typeof num1=="string" || typeof num2=="string"){
        res.send({
            status: "error" , 
            message: "Invalid data types"
        })
    }

    // console.log(body);
    
        let toSend=perform(num1 , num2 , oprt);
        res.send(toSend);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;