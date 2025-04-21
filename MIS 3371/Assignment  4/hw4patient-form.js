/*
Program name: hw4patient-form.js
Author: Fariha Kapadia
Date created: 03/06/2025
Date last edited: 04/12/2025
Version: 4.5
Description: The JS for a patient registration form for a fictional hospital called River Park Medical.
*/

/* date */

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

/* slider */

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

/* fname validation */

function validateFname() {
    const fname = document.getElementById("fname").value;
    const fnameR = /^[a-zA-Z'-]{1,30}$/; 


    if (!fnameR.test(fname)) {
        document.getElementById("fname-error").innerHTML = 
        "Please enter a valid first name (letters, apostrophes, and dashes only)";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

/* lname validation */

function validateLname() {
    const lname = document.getElementById("lname").value;
    const lnameR = /^[a-zA-Z'-]{1,30}$/; // 

    if (!lnameR.test(lname)) {
        document.getElementById("lname-error").innerHTML = 
        "Please enter a valid last name (letters, apostrophes, and dashes only)";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

/* mini validation */

function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

/* dob validation */

function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

/* ssn validation */

function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

/* address 1 + 2 validation */

function validateAddress1() {
    let address1 = document.getElementById("address1");
    let address1Value = address1.value.trim();

    if (address1Value === "") {
        document.getElementById("address1-error").innerHTML = "Address Line 1 is required.";
        address1.value = "";
        return false;
    }

    else if (address1Value.length < 2 || address1Value.length > 30) {
        document.getElementById("address1-error").innerHTML = "Address Line 1 must be between 2 and 30 characters.";
        address1.value = "";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

function validateAddress2() {
    let address2 = document.getElementById("address2");
    let address2Value = address2.value.trim();

    if (address2Value && (address2Value.length < 2 || address2Value.length > 30)) {
        document.getElementById("address2-error").innerHTML = "Address Line 2 must be between 2 and 30 characters.";
        address2.value = "";
        return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }
}

/* city validation */

function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

/* zipcode validation */

function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

/* email validation */

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

/* phone validation */

function validatePhone() {
    const phoneNumber = document.getElementById("phone").value;
    const phoneR = /^\d{10}$/;

    if (!phoneR.test(phoneNumber)) {
        document.getElementById("phone-error").innerHTML = 
        "Please enter a valid 10-digit phone number";
        return false;
    } else {
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
}

/* uid validation */

function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

/* pword validation */

function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;
    const errorMessage = [];

    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
    if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");

   if (pword.length < 8) errorMessage.push("Password must be at least 8 characters long");

    if (errorMessage.length > 0) {
        document.getElementById("pword-error").innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        document.getElementById("pword-error").innerHTML = "";
        return true;
    }
}

/* pword match confirmation */

function confirmPword() {
    let pword1 = document.getElementById("pword").value;
    let pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = "";
        return true;
    }
}

/* form info review */

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

/* shows input alert */

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

/* validates every field */

function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

/* clears review */

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
};
