function values(){
    let inputOne=document.getElementById("num1-el").value
    let inputTwo=document.getElementById("num2-el").value
    let ans= document.getElementById("result")
    if (inputOne==="" || inputTwo===""){
        ans.textContent="Result: Please enter both the numbers."
        return
    }

    const num1=Number(inputOne)
    const num2=Number(inputTwo)
    return {num1, num2, ans}
}


function add(){
    const {num1, num2, ans}=values()
    let sum=num1+num2
    ans.textContent="Result: "+sum
    console.log(sum)
}

function sub(){
    const {num1, num2, ans}=values()
    let diff=num1-num2
    ans.textContent="Result: "+diff
    console.log(diff)
}

function div(){
    const {num1, num2, ans}=values()
    let quotient=num1/num2
    ans.textContent="Result: "+quotient
    console.log(div)
}

function mul(){
    const {num1, num2, ans}=values()
    let product=num1*num2
    ans.textContent="Result: "+product
    console.log(mul)
}