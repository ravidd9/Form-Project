
const submit = function(){
    const name = document.getElementById("name").value
    const salary = document.getElementById("salary").value
    const birthday = document.getElementById("birthday").value
    const phone = document.getElementById("phone").value
    if(name.length<3){
        document.getElementById("nameM").innerHTML = "Name must be longer than 2 chars"
    }
    else{
        document.getElementById("nameM").innerHTML = ""
    }
    if(salary<10000 || salary>16000){
        document.getElementById("salaryM").innerHTML = "Salary must be between 10,000 and 16,000"
    }
    else{
        document.getElementById("salaryM").innerHTML = ""
    }
    if(birthday == "" ){
        document.getElementById("birthdayM").innerHTML = "Birthday can not be empty"
    }
    else{
        document.getElementById("birthdayM").innerHTML = ""
    }
    if(phone.length != 10){
        document.getElementById("phoneM").innerHTML = "Phone number must be 10 digs"
    }
    else{
        document.getElementById("phoneM").innerHTML = ""
    }
    if(document.getElementById("nameM").innerHTML == "" && document.getElementById("salaryM").innerHTML == "" && document.getElementById("birthdayM").innerHTML == "" && document.getElementById("phoneM").innerHTML == ""){
        document.getElementById("form").style.display = "none"
        document.getElementById("welcome").innerHTML = "Welcome " + name
    }
}
document.getElementById("submit").onclick = submit 

