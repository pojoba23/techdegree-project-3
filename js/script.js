// This function make sure that the form can not be left blank.
function isValidName (name) {

}

//this function makes sure that the form must be formatted as an email address, not a valid one just formated
function isValidEmail (email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)

}

//this function makes the user select at least one checkbox under "Register for Activies" section
function isvalidActivity (Activies) {


}

//this function makes the user enter a Credit Card Number, a Zip Code and a 3 number CVV if Credit Card is selected
function isValidCC (creditCard){


}