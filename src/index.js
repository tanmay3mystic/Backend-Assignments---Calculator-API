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
    let stat={} ; 
    if(num1<-1000000 || num2<-1000000) {stat =  {
        status: "error" , 
        message: "Underflow",
        }}
    else
    if(num1>1000000 || num2>1000000){stat =  {
        status: "error" , 
        message: "Overflow",
        }}
    else{
        switch(oprt) {
            case "add" :stat =  {
                status: "success" , 
                message: "the sum of given two numbers",
                sum: num1+num2
                }
                    break;
            case "sub" : stat =  {
                status: "success" , 
                message: "the difference of given two numbers",
                difference: num1-num2
                }
                break;
            case "multiply" :stat =  {
                            status: "success" , 
                            message: "The product of given numbers",
                            result: num1*num2
                            }
                    break;
            case "divide" : if(num2!=0){
               stat =  {status: "success" , 
                message: "The division of given numbers",
                result: num1/num2
                  }
            }
            else stat={
                status: "error" , 
                message: "Cannot divide by zero",
            }
                break;
            
        }
     }
    if(res<-1000000) {stat =  {
        status: "error" , 
        message: "Underflow",
        }}
    else if (res>1000000) {stat =  {
        status: "error" , 
        message: "Overflow",
        }}

    return stat ; 


}

app.post('/:operation' , (req,res)=>{
    const body = req.body;
    const oprt = req.params.operation;

    const num1= body.num1 , num2=body.num2 ; 
    if(typeof num1=="string" || typeof num2==string){
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