//Global Variables
    //Design Menu
const design_select = document.getElementById("design");
const color_menu = document.getElementById("color");
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

/*These target the payment form. It forces the credit card option to be selected by default and hides the Paypal
and Bitcoin messages.*/
document.querySelectorAll("#payment option").selected=true;
document.querySelectorAll("#paypal").hidden=true;
document.querySelectorAll("#bitcoin").hidden=true;
payment_menu.value = 'credit card';


//Sets focus to the first text field once the webpage is open

const focus= () =>{
  document.getElementById("name").focus()
}
focus()

//Hides a input field unless the "Other" option is selected, allowing user to type in their info

document.getElementById("other-title").hidden = true;
const job_role = document.getElementById("title");
job_role.addEventListener("change", (e) => {
    const other = document.querySelectorAll("#title option")[5];
    const job_title = document.getElementById("other-title");
    if(event.target.value === other.value){
        job_title.hidden = false;
    } else {
        job_title.hidden = "true";
    }
});

//Hide the "Select Theme" option
document.getElementById("design").firstElementChild.hidden = true;

const color_select = () => {
  const select_element = document.querySelector("#color");
  const option = document.createElement("option");
  const location = select_element.firstElementChild;
  option.innerHTML = "Please select a T-Shirt theme";
  select_element.insertBefore(option, location);
  option.selected = true;
  document.getElementById("color").firstElementChild.hidden = true;
}
color_select();

//This function hides the color menu and appends a message in its place. 

const colorMenu_hide = () => {
  const color_menu = document.getElementById("color");
  const menu_message = document.createElement("p")
  const location = color_menu.parentElement;
  location.appendChild(menu_message)
  menu_message.innerHTML = "Please select a shirt design";
  color_menu.style.display = "none";
}
colorMenu_hide();

/*Creates an Event Listener on the Design menu. Selecting the theme 'JS Puns'
option, only shows the JS Puns color options in the Color drop down menu. Selecting 
the 'I heart JS' theme, only shows the I Heart color options*/

for(let j = 1; j < color_menu.length; j++){
  color_menu[j].style.display = "none";
}

design_select.addEventListener("change", (e) => {
  const shirt_options = document.querySelectorAll("#color option");
  const js_puns = document.querySelectorAll("#design option")[1];
  const i_heart = document.querySelectorAll("#design option")[2];
  for(let i = 1; i < shirt_options.length; i++){
      shirt_options[i].style.display = "none";
      if(e.target.value === js_puns.value){
          shirt_options[1].selected = true;
          shirt_options[1].style.display = "block";
          shirt_options[2].style.display = "block";
          shirt_options[3].style.display = "block";
      } else if(e.target.value === i_heart.value){
          shirt_options[4].selected = true;
          shirt_options[4].style.display = "block";
          shirt_options[5].style.display = "block";
          shirt_options[6].style.display = "block";
      }
  }
  if(e.target.value && color_menu.nextElementSibling){
      color_menu.style.display = "inherit";
      color_menu.nextElementSibling.remove();
  }
});

/*The Event Listener for the 'Activities' section. This listens for the activities chosen,
adds the total of those event and displays them at the bottom of the section. Then compares
the Dates and Times of the events chosen and disables any conflicting events with the same Date and Time.*/

let total_cost = 0;

activities.addEventListener('change', (e) => {
  const is_checked = e.target.checked;
  const cost = parseInt(e.target.getAttribute("data-cost"));
  const act_inputs = document.querySelectorAll(".activities input");
  const selected = e.target.getAttribute("data-day-and-time");
  activities.appendChild(total);
  if(is_checked){
      total_cost += cost;
      total.innerHTML = "Total= $ " + total_cost;
  } else {
      total_cost -= cost;
      total.innerHTML = "Total= $ " + total_cost;
  }
  if(total_cost === 0){
      total.style.display = "none";
  } else {
      total.style.display = "block";
  }
  for(let i = 0; i < act_inputs.length; i++){
      const calender = act_inputs[i].getAttribute("data-day-and-time");
      if(calender === selected && e.target !== act_inputs[i]){
          if(is_checked){
              act_inputs[i].disabled = true;
              act_inputs[i].parentElement.style.color = "#252a2b";
          } else {
              act_inputs[i].disabled = false;
              act_inputs[i].parentElement.style.color = "inherit";
          }
      }
  }
  if(activity_selected()){
      activities.firstElementChild.style.color = "white";
      activities_message.remove();
  }
});

/*The Event Listener for the 'Payment Info'. This listens for what payment option ois chosen,
then only shows the appropriate payment info necessary. */

payment_menu.addEventListener('change', (e) => {
  document.getElementById("payment").firstElementChild.hidden = true;
  if(e.target.value === "credit card"){
      credit.style.display = "block";
      pay_pal.style.display = "none";
      bitcoin.style.display = "none";
  } else if(e.target.value === "paypal"){
      credit.style.display = "none";
      pay_pal.style.display = "block";
      bitcoin.style.display = "none";
  } else if(e.target.value === "bitcoin"){
      credit.style.display = "none";
      pay_pal.style.display = "none";
      bitcoin.style.display = "block";
  }
});

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