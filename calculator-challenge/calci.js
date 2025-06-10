let num1=2
let num2=3
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let ans= document.getElementById("result")

function add(){
    let sum=num1+num2
    ans.textContent="Result: "+sum
    console.log(sum)
}

function sub(){
    let diff=num1-num2
    ans.textContent="Result: "+diff
    console.log(diff)
}

function div(){
    let quotient=num1/num2
    ans.textContent="Result: "+quotient
    console.log(div)
}

function mul(){
    let product=num1*num2
    ans.textContent="Result: "+product
    console.log(mul)
}