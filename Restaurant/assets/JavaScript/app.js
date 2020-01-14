function submitForm () {
    var contactName= document.forms["contactForm"]["colFormLabel-name"].value;
    var contactEmail = document.forms["contactForm"]["colFormLabel-email"].value;
    var contactPhone = document.forms["contactForm"]["colFormLabel-phone"].value;
    if (contactName == "" || contactEmail == "" || contactPhone == "") {
        alert("Please fill out the required information- Name, Email, Phone, and Reason for Inquiry.");
        return false;
    }
    else {
        alert("Thank you for sumbiting request!")
    }
}