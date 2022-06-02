
students=[ { id: "576465", fname: "Gina", lname: "Linetti", dob: "1999-02-02", gender: "female", dep: "fb2", email: "576465@htw-berlin.de", join: "2015-02-02" },{ id: "573288", fname: "Terry", lname: "Jeffords", dob: "1999-02-02", gender: "male", dep: "fb2", email: "576468@htw-berlin.de", join: "2015-02-02" },{ id: "57439", fname: "Max", lname: "Mustermann", dob: "1963-07-20", gender: "diverse", dep: "fb3", email: "handg@fme.de", join: "2015-12-13" },{ id: "57439", fname: "Jane", lname: "Doe", dob: "1977-07-20", gender: "diverse", dep: "fb4", email: "handg@fme.de", join: "2015-09-13" }, { id: "57437", fname: "Janette", lname: "Dodo", dob: "1977-07-20", gender: "male", dep: "fb1", email: "handg@fme.de", join: "2015-04-13" }];

function studenttable(){
    const stable=document.getElementById("stable")
    for(var i=0; i<students.length; i++) { 
        var row = stable.insertRow(1);
        var cell8 = row.insertCell(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = students[i].id;
        cell2.innerHTML = students[i].fname;
        cell3.innerHTML = students[i].lname;
        cell4.innerHTML = students[i].dob;
        cell5.innerHTML = students[i].gender;
        cell6.innerHTML = students[i].dep;
        cell7.innerHTML = students[i].email;
        cell8.innerHTML = students[i].join;
        students[i].element=row;
    }  

};

function department() {
    students.forEach(student => student.element.style.display ='')
   let filter = document.getElementById("departmentfilter").value;
   if(filter!='nothing'){
    students.filter(student => student.dep!=filter).forEach(student => student.element.style.display ='none');
   }
    filter = document.getElementById("semester").value;
    if(filter!='nothing'){
     students.filter(student => szn(student)!=filter).forEach(student => student.element.style.display ='none');
    }
};


function szn(student){
    var arr = student.join.split('-');
    if(arr[1]>3 && arr[1]<10){
        console.log()
        return "summer";
    }else{
        return "winter";
    }

}


function show(show, vanish) {
    var form = document.getElementById(show);
    form.style.display = '';
    var table = document.getElementById(vanish);
    table.style.display = 'none';
    validDate();
    document.getElementById('.main').innerHTML = document.getElementById(show).innerHTML;
}

function validDate(){
    var today = new Date(Date.now() - 864e5).toISOString().split('T')[0]
    document.getElementsByName("dob")[0].setAttribute('max',today)
    var joinmin = new Date("2015-01-01").toISOString().split('T')[0]
    var joinmax = new Date("2015-12-31").toISOString().split('T')[0]
    document.getElementsByName("join")[0].setAttribute('max',joinmax)
    document.getElementsByName("join")[0].setAttribute('min',joinmin)
};
function checkForm() {
    const date= document.getElementById("dob").value
    const dob=new Date(date)
    const seventeen =new Date(Date.now() - (536479200000))
    const sixty =new Date(Date.now() - (1893456000000))
    if((seventeen < dob || sixty > dob)){ 
        alert("Invalid DOB")
        document.getElementById("add-form").reset()
    }else{
        addStudent()
        document.getElementById("add-form").reset()
        show('stable','add-form')
    }
};

function addStudent() {
    let student = {
        id: document.getElementById("adStudent_Id").value,
        fname: document.getElementById("adFirst_Name").value,
        lname: document.getElementById("adLast_Name").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked').value, 
        dep: document.querySelector('#department').value,
        email: document.getElementById("adStudent_email").value,
        join: document.getElementById("adStudent_join").value
    }
        const stable=document.getElementById("stable")
        var row = stable.insertRow(1);
        student.element=row;
        var zell8 = row.insertCell(-1);
        var zell1 = row.insertCell(0);
        var zell2 = row.insertCell(1);
        var zell3 = row.insertCell(2);
        var zell4 = row.insertCell(3);
        var zell5 = row.insertCell(4);
        var zell6 = row.insertCell(5);
        var zell7 = row.insertCell(6);
        zell1.innerHTML = student.id;
        zell2.innerHTML = student.fname;
        zell3.innerHTML = student.lname;
        zell4.innerHTML = student.dob;
        zell5.innerHTML = student.gender;
        zell6.innerHTML = student.dep;
        zell7.innerHTML = student.email;
        zell8.innerHTML = student.join;
    students.push(student)
}



