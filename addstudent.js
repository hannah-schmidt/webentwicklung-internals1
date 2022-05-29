

function validDate(){
    var today = new Date(Date.now() - 864e5).toISOString().split('T')[0]
    document.getElementsByName("dob")[0].setAttribute('max',today)

    var joinmin = new Date("2015-01-01").toISOString().split('T')[0]
    var joinmax = new Date("2015-12-31").toISOString().split('T')[0]
    document.getElementsByName("join")[0].setAttribute('max',joinmax)
    document.getElementsByName("join")[0].setAttribute('min',joinmin)
};

function checkForm(){
    const dob= document.getElementsByName("dob")
    var seventeen =new Date(Date.now() - (536479200000)).toISOString().split('T')[0]
    var sixty =new Date(Date.now() - (1893456000000)).toISOString().split('T')[0]
    if((seventeen>dob || sixty<=dob)){
        alert("Invalid DOB")
        return false;
    }
    return true;
};

let students=[];


const addStudent = (ev) => {
    ev.preventDefault();
    let student = {
        id: document.getElementById("adStudent_Id").value,
        fname: document.getElementById("adFirst_Name").value,
        lname: document.getElementById("adLast_Name").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value, 
        dep: document.getElementById("department").value,
        email: document.getElementById("adStudent_email").value,
        join: document.getElementById("adStudent_join").value
    }
    students.push(student)
    console.log(student)
    document.forms[0].reset()
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('add').addEventListener('click', addStudent)
});