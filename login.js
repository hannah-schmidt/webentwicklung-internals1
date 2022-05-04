
const errorMsg = "Login Credentials Incorrect";

const correctAadmin = "Admin";
const correctStaff = "Staff";

let adminLoginFailed = 0;
let staffLoginFailed = 0; 

let attempts=0;

const staffB = document.getElementById("stLogin")
const adminB = document.getElementById("adLogin")

const countAttempts = () => {
	if (++attempts >= 3) {
		alert("Three Login attempts failed")
		staffB.disabled =true;
        adminB.disabled =true;
	}
	
};

const checkStaffCred = () => {
    const staffPassword = document.getElementById("stPassword").value
    const staffUsername = document.getElementById("stUsername").value

    if(staffUsername === correctStaff && staffPassword === correctStaff) 
        return true;

    alert(errorMsg)
    countAttempts();
    return false;
    
};

const checkAdminCred = () => {
    const adminPassword = document.getElementById("adPassword").value
    const adminUsername = document.getElementById("adUsername").value
    if(adminUsername === correctAadmin && adminPassword === correctAadmin)
        return true; 
    alert(errorMsg)
    countAttempts();
    return false;
};
