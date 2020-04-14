//Global Variables
    //Activities Variables

const activities = document.querySelector('.activities');
const total = document.createElement('label');
    //Payment Variables
const payment_menu = document.getElementById("payment");
const credit = document.getElementById("credit-card");
const pay_pal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
    //Form Validation Variables
const name_field = document.getElementById("name");
const email_field = document.getElementById("mail");
const activities_field = document.querySelectorAll(".activities input");
const credit_field = document.getElementById("cc-num");
const zipcode_field =document.getElementById("zip");
const cvv_field = document.getElementById("cvv");
  //Register Button Variables
const register_button = document.querySelector("form");
const activities_message = document.createElement("span");

/* Name Field: These functions check to see if the text field that is provided is left blank,
a message is displayed or the field border changes to red, once complete it changes to green.*/
function valid_name(name) {
  return /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);
}
function name_tip_showORHide(show, element, blank){
  if(show){
      element.nextElementSibling.style.borderColor = "red";
      element.textContent = "Please provide a valid Name (Upper and Lowercase only, hyphens accepted)";
      element.style.color = "red";
  }else {
      element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
      element.textContent = "Name:";
      element.style.color = "green";
  }
  if(blank){
      element.style.color = "inherit";
  }
}
function createListenerName(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.previousElementSibling;
    const blank = text == "";
    name_tip_showORHide(showTip, tooltip, blank);
  };
}

/*These functions check to make sure the desired text field is formatted in email format, not if it is a real email
and if it is not, displays an error message and changes the border of the field in red.*/
function valid_email(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
function email_tip_showORHide(show, element, blank){
  if(show){
      element.nextElementSibling.style.borderColor = "red";
      element.textContent = "Please provide a valid email address";
      element.style.color = "red";
  } else {
      element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
      element.textContent = "Email:";
      element.style.color = "green";
  }
  if(blank){
      element.style.color = "inherit";
  }
} 
function createListenerEmail(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.previousElementSibling;
    const blank = text == "";
    email_tip_showORHide(showTip, tooltip, blank);
  };
}

/*This function checks to make sure that at least one of the activity checkboxes has been selected, if not an
error message appears prompting the user to select one.*/
function activity_selected(){
  for(let i = 0; i < activities_field.length; i++){
      if(activities_field[i].type === "checkbox"){
          if(activities_field[i].checked){
              return true;
          } 
      }
  }
  return false;
}

/*These functions makes sure the text field is formatted correctly with a credit card number when the credit card
option is selected on the payment menu. If not it dispalys and error message to re-enter the numbers*/
function valid_credit(cardNum){
  return /^[0-9]{13,16}$/.test(cardNum);
}
function credit_tip_showORHide(show, element, blank){
  if(show){
      element.nextElementSibling.style.borderColor = "red";
      element.textContent = "Please provide a number between 13 & 16 digits";
      element.style.fontColor = "red";
      element.style.fontSize = "85%";
      element.style.color = "red";
  } else {
      element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
      element.textContent = "Card Number:";
      element.style.fontSize = "100%";
      element.style.borderColor = "black";
      element.style.color = "green";
  }
  if(blank){
      element.textContent = "Card Number:";
      element.style.fontSize = "100%";
      element.style.color = "white";
  }
} 
function createListenerCredit(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.previousElementSibling;
    const blank = text == "";
    credit_tip_showORHide(showTip, tooltip, blank);
  };
}

/*These functions makes sure the text field is formatted correctly with a zip code number when the credit card
option is selected on the payment menu. If not it dispalys and error message to re-enter the numbers*/

function valid_zip(zipcode){
  return /^\d{5}$/.test(zipcode);
}
function zip_tip_showORHide(show, element, blank){
  if(show){
      element.nextElementSibling.style.borderColor = "red";
      element.textContent = "Please provide a valid Zipcode";
      element.style.fontColor = "red";
      element.style.fontSize = "80%";
      element.style.color = "red";
  } else {
      element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
      element.textContent = "Zip Code:";
      element.style.fontSize = "100%";
      element.style.borderColor = "black";
      element.style.color = "green";
  }
  if(blank){
      element.textContent = "Zip Code:";
      element.style.fontSize = "100%";
      element.style.color = "white";
  }
} 
function createListenerZip(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.previousElementSibling;
    const blank = text == "";
    zip_tip_showORHide(showTip, tooltip, blank);
  };
}

/*These functions makes sure the text field is formatted correctly with a cvv number when the credit card
option is selected on the payment menu. If not it dispalys and error message to re-enter the numbers*/
function valid_cvv(cvv){
  return /^\d{3}$/.test(cvv);
}
function cvv_tip_showORHide(show, element, blank){
  if(show){
      element.nextElementSibling.style.borderColor = "red";
      element.textContent = "Please provide a valid CVV";
      element.style.fontColor = "red";
      element.style.fontSize = "80%";
      element.style.color = "red";
  } else {
      element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
      element.textContent = "CVV:";
      element.style.fontSize = "100%";
      element.style.borderColor = "black";
      element.style.color = "green";
  }
  if(blank){
      element.textContent = "CVV:";
      element.style.fontSize = "100%";
      element.style.color = "white";
  }
}       
function createListenerCvv(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.previousElementSibling;
    const blank = text == "";
    cvv_tip_showORHide(showTip, tooltip, blank);
  };
}

//Event Listeners for each input field

name_field.addEventListener('input', createListenerName(valid_name));
email_field.addEventListener('input', createListenerEmail(valid_email));
credit_field.addEventListener('input', createListenerCredit(valid_credit));
zipcode_field.addEventListener('input', createListenerZip(valid_zip));
cvv_field.addEventListener('input', createListenerCvv(valid_cvv));

/*Adds an event listener to the register button, when the submit button is clicked it checks to make sure 
all the input fields have the correct information and is formatted correctly as well.*/
register_button.addEventListener('submit', (e) => {
  if(!valid_name(name_field.value)){
      name_field.style.borderColor = "red";
      name_field.previousElementSibling.textContent = "A valid First and Last name is required";
      name_field.previousElementSibling.style.color = "red";
      e.preventDefault();
  } 
  if(!valid_email(email_field.value)){
      email_field.style.borderColor = "red";
      email_field.previousElementSibling.textContent = "A vaild email address is required";
      email_field.previousElementSibling.style.color = "red";
      e.preventDefault();
  }
  if(!activity_selected()){
      const location = activities.firstElementChild;
      activities_message.innerHTML = " (Please choose an Activity)";
      activities_message.style.fontSize = "80%";
      activities_message.style.color = "red";
      location.appendChild(activities_message);
      location.style.color = "red";
  }
  if(!valid_credit(credit_field.value) && payment_menu.value === "credit card"){
      credit_field.style.borderColor = "red";
      credit_field.previousElementSibling.style.color = "red";
      e.preventDefault();
  } 
  if(!valid_zip(zipcode_field.value) && payment_menu.value === "credit card"){
      zipcode_field.style.borderColor = "red";
      zipcode_field.previousElementSibling.style.color = "red";
      e.preventDefault();
  }
  if(!valid_cvv(cvv_field.value) && payment_menu.value === "credit card"){
      cvv_field.style.borderColor = "red";
      cvv_field.previousElementSibling.style.color = "red";
      e.preventDefault();
  }
});