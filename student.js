students=[ { id: "576465", fname: "Gina", lname: "Linetti", dob: "1999-02-02", gender: "female", dep: "fb2", email: "576465@htw-berlin.de", join: "2015-02-02" },{ id: "s0573288", fname: "Terry", lname: "Jeffords", dob: "1999-02-02", gender: "male", dep: "fb2", email: "576468@htw-berlin.dee", join: "2015-02-02" }];

function studenttable(){
    for(var i=0; i<students.length; i++){
        console.log(students[i])
    }
    const stable=document.getElementById("stable")
    for(var i=0; i<students.length; i++){ 
        var row = stable.insertRow(1);
        var cell7 = row.insertCell(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = students[i].id;
        cell2.innerHTML = students[i].fname;
        cell3.innerHTML = students[i].lname;
        cell4.innerHTML = students[i].dob;
        cell5.innerHTML = students[i].gender;
        cell6.innerHTML = students[i].dep;
        cell7.innerHTML = students[i].email;
    }

};

function show(show, vanish) {
    var form = document.getElementById(show);
    form.style.display = '';
    var table = document.getElementById(vanish);
    table.style.display = 'none';
    validDate();
    studenttable();
    document.getElementById('.main').innerHTML = document.getElementById(show).innerHTML;
 
  }

function validDate(){
    console.log("huhu")
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
    if((seventeen<ob || sixty>dob)){
        //alert("Invalid DOB")
        console.log("nonno")
        document.forms[0].reset()
        return false;
    }
    addStudent()
    studenttable()
    show('stable','add-form')
    return true;
};

function addStudent() {
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
    document.forms[0].reset()
}

