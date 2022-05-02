
const errorMsg = "Login Credentials Incorrect"

const adminCred = "Admin"
const staffCred = "Staff"

adminLoginFailed = 0
staffLoginFailed = 0 

function checkStaffCred() {
    const staffPassword = document.getElementById("stPassword").value
    const staffUsername = document.getElementById("stUsername").value
    if(staffLoginFailed >= 3) {
        alert("Three Login attempts failed")
    }
    else if(staffUsername == staffCred && staffPassword == staffCred && staffLoginFailed < 3) {
        alert("yay")
    } else {
        alert(errorMsg)
        staffLoginFailed ++
    }
}

function checkAdminCred() {
    const adminPassword = document.getElementById("adPassword").value
    const adminUsername = document.getElementById("adUsername").value
    if(adminLoginFailed >= 3) {
        alert("Three Login attempts failed")
    }
    else if(adminUsername == adminCred && adminPassword == adminCred) {
        window.location="admin.html";
    } else {
        alert(errorMsg)
        adminLoginFailed ++
    }
}
