# Backend-Assignments---Calculator-API

#Project Description :

You need to build a Calculator API Contract application which performs the following operations:

Addition

Subtraction

Multiplication

Division

You need to implement the following POST requests:
The input may contain positive, negative, and floating-point numbers.
Request body parameters for all endpoints:

num1

num2



1. /add
Response:
{
status: “success"|"failure"|"error”,
message: “the sum of given two numbers”,
sum: num1+num2
}

2. /sub
Response
{
status: “success"|"failure"|"error”,
message: “the difference of given two numbers”,
difference: num1-num2
}

3. /multiply
Response
{
status: “success"|"failure"|"error”,
message: “The product of given numbers”
result: num1*num2
}


4. /divide
Response
{
status: “success"|"failure"|"error”,
message: “The division of given numbers”
result: num1/num2
}

5. The status should be "error" in the following cases:
- num2 is 0 for endpoint /divide. In this case, the message should be "Cannot divide by zero"
- The request body parameters contain values less than -1M(10 lakhs), or the result is < -1M. In this case, the message should be "Underflow"
- The request body parameters contain values above 1M(10 lakhs), or the sum is > 1M. In this case, the message should be "Overflow"
- The request body parameters contain Strings. In this case, the message should be "Invalid data types"
