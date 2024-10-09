// let a=12
// let b=22/7
// let c="Hello"
// let d=[1,2,3,4]

// let x="12"/"6"
// let bol="true"
// let str=String(bol)
// console.log(str.charAt(i))

// console.log(typeof d)

// function display(){
//     // let x=confirm("Are you sure");
//     // alert("User click "+x);

//     let x=prompt("Enter your name","name")
//     alert(x)
// }

function validate(){
    let login=document.getElementById("login").value
    let pass=document.getElementById("pass").value
    let p1=document.getElementById("result")
    if(login=="admin" && pass=="admin"){
        p1.innerText="Login Success"
    }
    else{
        p1.innerText="Login Failed"
        return false
    }
}