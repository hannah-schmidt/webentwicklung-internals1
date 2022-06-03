
staff=[ { id: "576465", fname: "Gina", lname: "Linetti", dob: "1999-02-02", gender: "female", dep: "fb2", email: "576465@htw-berlin.de", join: "2015-02-02" },{ id: "573288", fname: "Terry", lname: "Jeffords", dob: "1999-02-02", gender: "male", dep: "fb2", email: "576468@htw-berlin.de", join: "2015-02-02" },{ id: "57439", fname: "Max", lname: "Mustermann", dob: "1963-07-20", gender: "diverse", dep: "fb3", email: "s058439@htw-berlin.de", join: "2015-12-13" },{ id: "57439", fname: "Jane", lname: "Doe", dob: "1977-07-20", gender: "diverse", dep: "fb4", email: "s043563@htw-berlin.de", join: "2015-09-13" }, { id: "57437", fname: "Janette", lname: "Dodo", dob: "1977-07-20", gender: "male", dep: "fb1", email: "s0576432@htw-berlin.de", join: "2015-04-13" }];

function stafftable(){
    console.log("ahahaaaa")
    const stable=document.getElementById("stable")
    for(var i=0; i<staff.length; i++) { 
        var row = stable.insertRow(1);
        var cell8 = row.insertCell(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = staff[i].id;
        cell2.innerHTML = staff[i].fname;
        cell3.innerHTML = staff[i].lname;
        cell4.innerHTML = staff[i].dob;
        cell5.innerHTML = staff[i].gender;
        cell6.innerHTML = staff[i].dep;
        cell7.innerHTML = staff[i].email;
        cell8.innerHTML = staff[i].join;
        staff[i].element=row;
    }  

};

function department() {
    staff.forEach(staff => staff.element.style.display ='')
   let filter = document.getElementById("departmentfilter").value;
   if(filter!='nothing'){
    staff.filter(staff => staff.dep!=filter).forEach(staff => staff.element.style.display ='none');
   }
    filter = document.getElementById("semester").value;
    if(filter!='nothing'){
        staff.filter(staff => szn(staff)!=filter).forEach(staff => staff.element.style.display ='none');
    }
};


function szn(member){
    var arr = member.join.split('-');
    if(arr[1]>3 && arr[1]<10){
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

function addStaff() {
    let member = {
        id: document.getElementById("adStaff_Id").value,
        fname: document.getElementById("adFirst_Name").value,
        lname: document.getElementById("adLast_Name").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked').value, 
        dep: document.querySelector('#department').value,
        email: document.getElementById("adStaff_email").value,
        join: document.getElementById("adStaff_join").value
    }
        const stable=document.getElementById("stable")
        var row = stable.insertRow(1);
        member.element=row;
        var zell8 = row.insertCell(-1);
        var zell1 = row.insertCell(0);
        var zell2 = row.insertCell(1);
        var zell3 = row.insertCell(2);
        var zell4 = row.insertCell(3);
        var zell5 = row.insertCell(4);
        var zell6 = row.insertCell(5);
        var zell7 = row.insertCell(6);
        zell1.innerHTML = member.id;
        zell2.innerHTML = member.fname;
        zell3.innerHTML = member.lname;
        zell4.innerHTML = member.dob;
        zell5.innerHTML = member.gender;
        zell6.innerHTML = member.dep;
        zell7.innerHTML = member.email;
        zell8.innerHTML = member.join;
        staff.push(member)
}

